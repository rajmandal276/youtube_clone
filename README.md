# YouTube Clone - Project Documentation

## Introduction
This project is a YouTube Clone built using React. It aims to provide a video browsing experience similar to YouTube, featuring video playback, search functionality, and user interaction.

## Tech Stack Used
- **Frontend:** React, React Router DOM
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **HTTP Requests:** Axios
- **Utilities:** date-fns
- **Testing:** React Testing Library

## Installation and Setup Guide
### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS recommended)
- npm or yarn

### Steps to Install
1. Clone the repository:
   ```sh
   git clone <https://github.com/rajmandal276/youtube_clone.git>
   cd youtube_clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. The application will be available at `http://localhost:3000/`

## Folder Structure
```
 youtube_clone/
 ├── public/                # Static assets
 ├── src/
 │   ├── components/        # Reusable UI components
 │   │   ├── Feed.jsx     
 │   │   ├── Header.jsx      
 │   │   ├── SearchVideoResult.jsx  
 │   │   ├── MenuItems.jsx 
 │   │   ├── Sidebar.jsx  
 │   │   ├── RelatedVideos.jsx     
 │   │   ├── VideoComments.jsx     
 │   │   ├── VideoDetails.jsx     
 │   │   └── VideoList.jsx
 │   ├── images/             
 │   ├── useContextHook/     # Context API state management
 │   │   ├── useContextApi.js   
 │   │   ├── useSpeechRecognition.js
 │   │   └── useTheme.js     
 │   ├── utils/             # Utility functions
 │   │   ├── constant.js  
 │   │   ├── fetchApi.js
 │   │   ├── helper.js
 │   │   └── SpinnerLoader.js       
 │   ├── App.js             
 │   ├── index.js          
 │   ├── index.css         
 │   ├── reportWebVitals.js
 │   └── setupTests.js      
 ├── .gitignore             # Git ignore file
 ├── package.json           # Project metadata and dependencies
 ├── package-lock.json      # Lock file for dependencies
 ├── tailwind.config.js     # Tailwind CSS configuration
 ├── README.md              # Project readme
 └── build/                 # Production-ready build files
```

## APIs Used
- **YouTube Data API v3**: Fetches video details, search results, and comments.

## Overview of UI Components
- **Feed**: Displays the main content feed (list of videos or posts).
- **Header**: Contains the top navigation bar with logo, menu, and search.
- **SearchVideoResult**: Shows search results for videos based on user input.
- **MenuItems**: Renders menu options or links in navigation.
- **Sidebar**: Provides additional navigation or related content in a side panel.
- **RelatedVideos**: Displays videos related to the currently viewed video.
- **VideoComments**: Shows and manages comments for a video.
- **VideoDetails**: Displays detailed information about a specific video.
- **VideoList**: Renders a list or grid of video items.

## Features
- Video search functionality using YouTube API.
- Video playback with metadata (views, likes, description, etc.).
- Responsive UI with Tailwind CSS.
- Context API for state management.
- Optimized API calls using Axios.
- Dark mode support.
- Voice search support.

## Best Practices
- **Component Reusability**: Components are modular and reusable.
- **State Management**: Context API is used to manage global states efficiently.
- **Performance Optimization**: API requests are minimized and cached where necessary.
- **Code Organization**: Project follows a clean and scalable folder structure.
- **Error Handling**: API calls handle errors gracefully with fallback UI.

## Styling & Theming
- The project utilizes Tailwind CSS for styling.
- Custom utility classes are defined in `tailwind.config.js`.
- Dark mode can be implemented via Tailwind’s dark mode configuration.

## References
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [YouTube Data API v3](https://developers.google.com/youtube/v3)

