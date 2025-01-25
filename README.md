# MediSense AI - AI-Powered Healthcare Assistant

MediSense AI is an advanced healthcare assistant that leverages artificial intelligence to provide real-time symptom analysis and personalized medical insights. Built with modern web technologies and AI integration, it aims to make healthcare guidance more accessible to everyone.

## 🌟 Key Features

- **AI-Powered Analysis**: Get instant, personalized health insights using Gemini AI
- **Secure Authentication**: Email-based authentication with Firebase
- **Symptom Tracking**: Log and monitor your symptoms over time
- **Medical History**: Access your previous health records and AI recommendations
- **Responsive Design**: Seamless experience across all devices
- **Privacy Focused**: Secure data handling with Firebase
- **Profile Management**: Manage your user profile and preferences

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context + Hooks
- **Icons**: Lucide React
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with Express
- **Database**: Firebase Firestore
- **AI**: Google Gemini API
- **Authentication**: Firebase Authentication
- **Deployment**: AWS Lambda with Serverless Framework

### Development
- **Language**: TypeScript
- **Linting**: ESLint
- **Package Manager**: npm
- **Development Server**: Vite Dev Server

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── common/         # Shared components
│   ├── landing/        # Landing page components
│   └── profile/        # Profile components
├── contexts/           # React Context providers
├── pages/              # Page components
├── services/           # API and service integrations
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point

server/
├── config/            # Server configuration
├── controllers/       # API controllers
├── middleware/        # Express middleware
├── routes/           # API routes
├── services/         # Backend services
└── utils/            # Utility functions
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- Firebase project with Authentication and Firestore enabled
- Google Cloud project with Gemini API access
- AWS account for backend deployment

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medisense-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Copy the example env file
   cp .env.example .env

   # Edit .env with your credentials
   code .env
   ```

4. **Start development servers**
   ```bash
   # Start frontend development server
   npm run dev

   # Start backend locally
   npm run server
   ```

5. **Firebase Emulator (Optional)**
   ```bash
   # Start Firebase emulators
   npm run emulators

   # Seed emulator with test data
   npm run seed-emulator
   ```

## 🚀 Deployment

### Frontend (Cloudflare Pages)

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add environment variables in Cloudflare Pages dashboard

### Backend (AWS Lambda)

1. Configure AWS credentials
   ```bash
   aws configure
   ```

2. Deploy using Serverless Framework
   ```bash
   cd server
   serverless deploy
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run server` - Start backend server locally
- `npm run emulators` - Start Firebase emulators
- `npm run seed-emulator` - Seed emulator with test data

## 🔒 Security Features

- Secure email-based authentication
- Protected API routes with Firebase Authentication
- CORS protection
- Environment variable security
- XSS protection through React

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- Create an issue on GitHub
- Contact: support@medisense.ai

## 🙏 Acknowledgments

- React Team
- Firebase Team
- Google Cloud & Gemini API Team
- All contributors and supporters