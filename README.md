<file path="README.md">
# MediSense AI - AI-Powered Healthcare Assistant

MediSense AI is an advanced healthcare assistant that provides real-time symptom analysis and personalized medical insights. Built with modern web technologies and AI integration, it makes healthcare guidance accessible to everyone, especially in underserved areas.

## 🌟 Key Features

- **AI-Powered Analysis**: Get instant, personalized health insights using Gemini AI.
- **Secure Authentication**: Email-based user authentication system using Firebase.
- **Symptom Tracking**: Log and monitor your symptoms over time.
- **Medical History**: Access your previous health records and AI recommendations.
- **Responsive Design**: Seamless experience across all devices.
- **Privacy Focused**: Secure data handling with Firebase and encrypted communication.
- **Profile Management**: Update user profile information and profile picture.

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern UI
- **Routing**: React Router v6
- **State Management**: React Context + Hooks
- **Icons**: Lucide React
- **Build Tool**: Vite

### Backend
- **API**: Node.js with Express
- **Database**: MongoDB
- **AI**: Gemini API
- **Authentication**: Firebase Authentication
- **Middleware**: CORS, JSON parsing, JWT authentication
- **Image Upload**: Multer

### Development
- **Language**: TypeScript, JavaScript
- **Linting**: ESLint
- **Package Manager**: npm
- **Development Server**: Vite Dev Server, Node.js

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── landing/        # Landing page components
│   ├── profile/        # Profile components
│   └── shared/         # Shared components
├── contexts/           # React Context for state management
├── features/           # Feature-specific components and pages
│   ├── auth/           # Authentication feature
│   │   ├── components/ # Auth components
│   │   └── pages/      # Auth pages
│   ├── dashboard/      # Dashboard feature
│   │   ├── components/ # Dashboard components
│   │   └── pages/      # Dashboard pages
│   ├── history/        # History feature
│   │   └── pages/      # History pages
│   └── landing/        # Landing feature
│       └── components/ # Landing components
├── pages/              # Page components
├── services/           # API and authentication services
├── types/              # TypeScript interfaces
├── utils/              # Helper functions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
server/
├── config/             # Configuration files
├── controllers/        # API controllers
├── middleware/         # Middleware functions
├── models/             # Database models
├── routes/             # API routes
├── services/           # Backend services
└── utils/              # Backend utility functions
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB installed and running
- Firebase project setup with API keys

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/yourusername/medisense-ai.git
cd medisense-ai
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase and Gemini API keys:
```env
VITE_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
VITE_FIREBASE_PROJECT_ID="YOUR_FIREBASE_PROJECT_ID"
VITE_FIREBASE_STORAGE_BUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
VITE_FIREBASE_APP_ID="YOUR_FIREBASE_APP_ID"
VITE_FIREBASE_MEASUREMENT_ID="YOUR_FIREBASE_MEASUREMENT_ID"
VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

4. Start development server
```bash
npm run dev
```

5. Start the backend server
```bash
npm run server
```

Visit `http://localhost:5173` to view the application.

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run server   # Start the backend server
```

## 🌐 API Endpoints

The backend server provides the following API endpoints:

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user.

### Profile
- `GET /api/profile`: Get the current user's profile.
- `PATCH /api/profile`: Update the current user's profile.

### Symptoms
- `POST /api/symptoms/check`: Analyze symptoms and get AI advice.
- `GET /api/symptoms/history`: Get the symptom history for the current user.
- `DELETE /api/symptoms/history/:id`: Delete a specific symptom history log.

## 🔒 Security Features

- **Secure Authentication**
  - Email-based authentication with Firebase.
  - Password hashing.
  - Secure session management.
  - Protected routes.

- **Data Protection**
  - Encrypted data storage in MongoDB.
  - Secure API communication with JWT.
  - XSS protection.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- Email: support@medisense.ai
- GitHub Issues: [Create an issue](https://github.com/yourusername/medisense-ai/issues)
- Contact the team:
  - Backend issues: [Ezekiel Gwamna](https://github.com/izzymarc)
  - Frontend issues: [Ugo Ogadi](https://github.com/ugo-ogadi)

## 🔮 Future Enhancements

- Advanced AI integration
- Real-time chat support
- Mobile application
- Health tracking analytics
- Integration with medical devices

## 🙏 Acknowledgments

- React Team
- Tailwind CSS Team
- Vite Team
- Firebase Team
- Gemini API Team
- All contributors and supporters

## Additional Resources
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Gemini API Documentation](https://ai.google.dev/gemini-api)
    </file>
