import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
User,
UserCredential,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../config/firebase'

interface AuthContextType {
user: User | null
loading: boolean
error: string | null
login: (email: string, password: string) => Promise<UserCredential>
logout: () => Promise<void>
register: (email: string, password: string) => Promise<UserCredential>
}

const AuthContext = createContext<AuthContextType>({
user: null,
loading: true,
error: null,
login: async () => {
    throw new Error('AuthContext not initialized')
},
logout: async () => {
    throw new Error('AuthContext not initialized')
},
register: async () => {
    throw new Error('AuthContext not initialized')
}
})

export function useAuth() {
return useContext(AuthContext)
}

interface AuthProviderProps {
children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
const [user, setUser] = useState<User | null>(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, 
    (user) => {
        setUser(user)
        setLoading(false)
    },
    (error) => {
        setError(error.message)
        setLoading(false)
    }
    )

    return unsubscribe
}, [])

const login = async (email: string, password: string) => {
    try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    setError(null)
    return result
    } catch (error) {
    if (error instanceof Error) {
        setError(error.message)
    } else {
        setError('An unexpected error occurred')
    }
    throw error
    }
}

const logout = async () => {
    try {
    await signOut(auth)
    setError(null)
    } catch (error) {
    if (error instanceof Error) {
        setError(error.message)
    } else {
        setError('An unexpected error occurred')
    }
    throw error
    }
}

const register = async (email: string, password: string) => {
    try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    setError(null)
    return result
    } catch (error) {
    if (error instanceof Error) {
        setError(error.message)
    } else {
        setError('An unexpected error occurred')
    }
    throw error
    }
}

const value = {
    user,
    loading,
    error,
    login,
    logout,
    register
}

return (
    <AuthContext.Provider value={value}>
    {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
)
}
