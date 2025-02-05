# Overview:
Artifacts is a web application designed to help users explore, track, and manage historical artifacts. The platform offers a dynamic, user-friendly experience where users can view detailed information on various artifacts, contribute their own entries, and maintain personalized collections. With features like user authentication, real-time database updates, and responsive design, Artifacts bridges the gap between technology and history. 

# Technologies Used
- Frontend: React, Tailwind CSS, DaisyUI
- Backend: MongoDB, Node.js, Express.js
- Routing: React Router DOM
- Authentication & Database: Firebase
- Animations: Lottie-React, React Motion
- UI Enhancements: React Simple Typewriter, Swiper.js, React Helmet Async

# Key Features
* User Authentication: Login via email/password or Google.
* Responsive Design: Compatible with mobile, tablet, and desktop devices.
* Conditional Navbar: Displays login/logout options based on authentication status.
* Home Page: Features a slider with highlighted artifacts and meaningful sections.
* Artifact Exploration: Browse artifacts with detailed information pages.
* Private Routes: Secure access for adding, managing, and liking artifacts.
* CRUD Operations: Create, read, update, and delete artifact entries.
* Like Functionality: Toggle likes with real-time database updates.
* Search Functionality: Filter artifacts by name for easy discovery.
* Dynamic Titles: Page titles adjust based on current route.
* Error Handling: Custom 404 error page and loading spinner for smooth UX.

# Dependencies
 Core Dependencies:
- firebase - For authentication and real-time database management.
- react-router-dom - To manage application routing and private routes.
- tailwindcss & daisyui - For styling and responsive design.
- axios - For API requests.
- lottie-react, react-motion - For smooth animations.
- react-helmet-async - To dynamically update page titles.
- react-simple-typewriter - To add dynamic typewriter effects.
- swiper - For implementing carousels and sliders.

# How to Run the Project Locally
Clone the Repository:
* git clone https://github.com/yourusername/assignment-11.git
* cd assignment-11
---
Install Dependencies:
 - Ensure you have Node.js installed. Then, run:
 + npm install
---
Set Up Firebase Configuration:
- Create a .env file in the root directory and add your Firebase config:
- VITE_FIREBASE_API_KEY=your_api_key
- VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
- VITE_FIREBASE_PROJECT_ID=your_project_id
- VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
- VITE_FIREBASE_APP_ID=your_app_id
---
Run the Development Server:
- npm run dev
---
Build for Production:
- npm run build
---

# Live Link:
  - https://assignment-11-client-8495f.web.app/
  - [Firebase Documentation](https://firebase.google.com/docs)
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
 