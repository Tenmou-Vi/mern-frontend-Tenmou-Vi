# Movie Review Application - Frontend

React frontend for the MERN stack movie review application with comprehensive features from Parts 1-7.

## 🚀 Deployed Application
- **Live URL**: https://frontend-dot-personal-web-page-tenmou-vi.uc.r.appspot.com
- **Backend API**: https://personal-web-page-tenmou-vi.uc.r.appspot.com

## 🔗 Related Repositories
- **Backend**: https://github.com/CS5610-WebDev-Summer25/mern-stack-project-backend-Tenmou-Vi

## 📋 Features
- **Movie Browsing**: View and search through movie collection
- **Google OAuth**: Secure user authentication
- **Review System**: Add, edit, and delete movie reviews
- **Favorites System**: Star-based movie rating and favorites
- **Drag & Drop Ranking**: Interactive favorites ranking page
- **Responsive Design**: Modern UI with movie cards and search functionality
- **Real-time Updates**: Dynamic content loading from backend API

## 🛠️ Technology Stack
- **Framework**: React 18
- **Styling**: CSS3 with responsive design
- **Authentication**: Google OAuth 2.0
- **HTTP Client**: Axios for API calls
- **Drag & Drop**: React DnD for interactive ranking
- **Deployment**: Google Cloud App Engine
- **Build Tool**: Create React App

## 📋 Project Implementation by Parts

### Part 1-3: Basic Setup and Foundation
- ✅ **React application setup** with Create React App
- ✅ **Movie display components** with card-based layout
- ✅ **Search functionality** with real-time filtering
- ✅ **Basic routing** and navigation
- ✅ **API integration** with backend services

### Part 4: Add and Edit Review Feature
- ✅ **Review form components** for adding and editing reviews
- ✅ **Review display** on movie detail pages
- ✅ **User authentication integration** for review management
- ✅ **Real-time review updates** with backend synchronization
- ✅ **Form validation** and error handling

### Part 5: Favorites Feature
- ✅ **Star-based favorites system** with visual feedback
- ✅ **Favorites persistence** across user sessions
- ✅ **Real-time favorites updates** on movie cards
- ✅ **User-specific favorites storage** integration
- ✅ **Favorites API service** for backend communication

### Part 6: Cloud Deployment
- ✅ **Google Cloud App Engine deployment** configuration
- ✅ **Production build optimization** with Create React App
- ✅ **Environment variable management** for production
- ✅ **HTTPS deployment** with SSL certificates
- ✅ **Static file serving** configuration

### Part 7: Favorites Ranking Page
- ✅ **Drag-and-drop interface** using React DnD library
- ✅ **Real-time reordering** with visual feedback
- ✅ **Persistent storage** of ranked favorites
- ✅ **Responsive design** with Google Fonts integration
- ✅ **Enhanced navigation** with dedicated Favorites page
- ✅ **Error handling** and network failure recovery

## 🏗️ Project Structure
```
src/
├── components/
│   ├── Movie.js          # Movie card component
│   ├── MoviesList.js     # Movies listing with search
│   ├── Login.js          # Google OAuth login
│   ├── Logout.js         # User logout
│   ├── AddReview.js      # Review submission form
│   ├── Favorites.js      # Favorites ranking page
│   └── DnDCard.js        # Draggable movie card
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

## 📸 Screenshots
The application features a clean, modern interface with movie cards displaying:
- Movie posters and ratings
- Search and filter functionality  
- User authentication status
- Interactive favorites system
- Drag & drop ranking interface

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
- **React DnD**: Drag and drop functionality
- **React Icons**: Icon library for UI elements

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
4. **Reviews**: Add, edit, and delete movie reviews
5. **Favorites**: Star-based rating and favorites system
6. **Drag & Drop Ranking**: Interactive favorites ranking page
7. **Responsive Design**: Mobile-first responsive layout
8. **Error Handling**: Graceful error handling for API failures

## 🔒 Security
- No sensitive credentials stored in source code
- OAuth configured through Google Cloud Console
- HTTPS-only deployment on App Engine
- Secure environment variable management 