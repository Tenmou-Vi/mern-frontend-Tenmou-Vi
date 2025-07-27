# Movie Review Application - Frontend

React frontend for the MERN stack movie review application with drag & drop favorites ranking.

## 🚀 Deployed Application
- **Live URL**: https://frontend-dot-personal-web-page-tenmou-vi.uc.r.appspot.com
- **Backend API**: https://personal-web-page-tenmou-vi.uc.r.appspot.com

## 📋 Features
- **Movie Browsing**: View and search through movie collection
- **Google OAuth**: Secure user authentication
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

## 🔗 Related Repositories
- **Backend**: https://github.com/CS5610-WebDev-Summer25/mern-stack-project-backend-Tenmou-Vi

## 📸 Screenshots
The application features a clean, modern interface with movie cards displaying:
- Movie posters and ratings
- Search and filter functionality  
- User authentication status
- Interactive favorites system
- Drag & drop ranking interface

## 🎯 Part 7 - Favorites Ranking Page
The application now includes a comprehensive favorites ranking system with the following features:

### 🎨 Favorites Ranking Interface
- **Drag & Drop Functionality**: Users can drag and drop movie cards to reorder their favorites
- **Real-time Updates**: Changes are automatically saved to the database
- **Visual Feedback**: Clear visual indicators for drag operations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🔧 Technical Implementation
- **React DnD**: Third-party library integration for drag and drop functionality
- **Custom Components**: DnDCard component for draggable movie cards
- **State Management**: Efficient state updates and persistence
- **API Integration**: Seamless backend communication for data persistence

### 📱 User Experience
- **Intuitive Interface**: Clear instructions and visual cues
- **Immediate Feedback**: Real-time updates as users interact
- **Error Handling**: Graceful handling of network issues
- **Performance**: Optimized rendering and state management

### 🎯 Key Features
1. **Interactive Ranking**: Drag movies to reorder favorites list
2. **Automatic Saving**: Changes persist immediately to database
3. **Visual Indicators**: Clear feedback during drag operations
4. **Responsive Layout**: Adapts to different screen sizes
5. **Error Recovery**: Handles network failures gracefully

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
4. **Favorites**: Star-based rating and favorites system
5. **Drag & Drop Ranking**: Interactive favorites ranking page
6. **Responsive Design**: Mobile-first responsive layout
7. **Error Handling**: Graceful error handling for API failures

## 🔒 Security
- No sensitive credentials stored in source code
- OAuth configured through Google Cloud Console
- HTTPS-only deployment on App Engine
- Secure environment variable management 