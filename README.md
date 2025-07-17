# Movie Review Application - Frontend

React frontend for the MERN stack movie review application.

## 🚀 Deployed Application
- **Live URL**: https://frontend-dot-personal-web-page-tenmou-vi.uc.r.appspot.com
- **Backend API**: https://personal-web-page-tenmou-vi.uc.r.appspot.com

## 📋 Features
- **Movie Browsing**: View and search through movie collection
- **Google OAuth**: Secure user authentication
- **Favorites System**: Star-based movie rating and favorites
- **Responsive Design**: Modern UI with movie cards and search functionality
- **Real-time Updates**: Dynamic content loading from backend API

## 🛠️ Technology Stack
- **Framework**: React 18
- **Styling**: CSS3 with responsive design
- **Authentication**: Google OAuth 2.0
- **HTTP Client**: Axios for API calls
- **Deployment**: Google Cloud App Engine
- **Build Tool**: Create React App

## 🏗️ Project Structure
```
src/
├── components/
│   ├── Movie.js          # Movie card component
│   ├── MoviesList.js     # Movies listing with search
│   ├── Login.js          # Google OAuth login
│   ├── Logout.js         # User logout
│   └── AddReview.js      # Review submission form
├── services/
│   ├── movies.js         # Movie API service
│   └── favorites.js      # Favorites API service
├── App.js                # Main application component
└── index.js              # Application entry point
```

## 🚀 Deployment Information
- **Platform**: Google Cloud App Engine
- **Service**: frontend
- **Runtime**: Static file serving for React SPA
- **Environment**: Production

## 🔗 Related Repositories
- **Backend**: https://github.com/Tenmou-Vi/mern-backend-Tenmou-Vi
- **Full Project**: https://github.com/CS5610-WebDev-Summer25/mern-stack-project-backend-Tenmou-Vi

## 📸 Screenshots
The application features a clean, modern interface with movie cards displaying:
- Movie posters and ratings
- Search and filter functionality  
- User authentication status
- Interactive favorites system

## 🎯 Part 6 - Cloud Deployment
This frontend is successfully deployed to Google Cloud App Engine as part of the Part 6 requirements for cloud deployment of the full MERN stack application.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm start
# or
yarn start
```

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Google Cloud
```bash
gcloud app deploy app.yaml --service frontend
```

## 📦 Key Dependencies
- **React**: UI framework
- **Axios**: HTTP client for API calls
- **Google Auth**: OAuth 2.0 authentication

## 🔧 Environment Variables
The application uses the following environment variables:
- `REACT_APP_API_BASE_URL`: Backend API endpoint
- `REACT_APP_GOOGLE_CLIENT_ID`: Google OAuth client ID (configured in deployment)

## 🧪 Testing
```bash
npm test
# or
yarn test
```

## 📁 File Structure Details
- **components/**: Reusable React components
- **services/**: API service functions
- **__test__/**: Unit tests for components
- **public/**: Static assets and HTML template
- **app.yaml**: Google Cloud App Engine deployment configuration

## 🌟 Features Implemented
1. **Movie Display**: Card-based movie presentation with posters
2. **Search & Filter**: Real-time movie search functionality
3. **Authentication**: Google OAuth integration
4. **Favorites**: Star-based rating and favorites system
5. **Responsive Design**: Mobile-first responsive layout
6. **Error Handling**: Graceful error handling for API failures

## 🔒 Security
- No sensitive credentials stored in source code
- OAuth configured through Google Cloud Console
- HTTPS-only deployment on App Engine
- Secure environment variable management
