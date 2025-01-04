import { User, Mail } from 'lucide-react';

    interface ProfileInfoProps {
      user: {
        name: string;
        email: string;
        profilePicture?: string;
      };
    }

    export function ProfileInfo({ user }: ProfileInfoProps) {
      return (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="bg-blue-100 w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500">Name</label>
              <div className="flex items-center gap-2 text-gray-700">
                <User className="w-4 h-4" />
                <span>{user.name}</span>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
