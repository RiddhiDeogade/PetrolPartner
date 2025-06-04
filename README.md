# PetrolPartner

PetrolPartner is a React-based web app for managing driver forms with authentication via Google and Firebase integration. It features user signup, driver form submission, listing submitted drivers, and protected routes.

---

## Features

- User authentication with Google sign-in (Firebase Auth)
- Submit and list driver details stored in Firebase Firestore
- Protected routes based on authentication
- Responsive UI with React Router and HashRouter for GitHub Pages compatibility
- Deployment configured for GitHub Pages

---

## Technologies Used

- React (v19)
- Firebase (Auth, Firestore)
- React Router DOM (v7)
- GitHub Pages for deployment
- Material UI and custom CSS styling

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account with a project set up

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/RiddhiDeogade/PetrolPartner.git
   cd PetrolPartner
Install dependencies:
- npm install

Create a .env file in the project root with your Firebase credentials:


REACT_APP_FIREBASE_API_KEY=your_api_key_here


REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here


REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here


REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here


REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here


REACT_APP_FIREBASE_APP_ID=your_app_id_here


REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

---

Start the development server:
npm start
The app will open at http://localhost:3000.

###Usage
Navigate through the app using the navbar.

Sign up or log in using Google authentication.

Submit driver forms and view the list of submitted drivers.

Protected routes are accessible only after login.

###Deployment
This project uses GitHub Pages for deployment.

Build the app:
npm run build

Deploy to GitHub Pages:
npm run deploy
The app will be available at:

https://RiddhiDeogade.github.io/PetrolPartner/
Note: The app uses HashRouter to support GitHub Pages routing.
---

###Folder Structure


PetrolPartner/
├── public/
├── src/
│   ├── components/         # React components (Navbar, HomePage, SignupPage, DriverFormPage, DriverListPage)
│   ├── context/            # AuthContext for authentication state management
│   ├── firebase.js         # Firebase configuration and initialization
│   ├── App.jsx             # Main app routing and layout
│   └── styles.css          # Global styles
├── .env                   # Firebase environment variables (not committed)
├── package.json
├── README.md
└── ...


Environment Variables
The .env file stores sensitive Firebase configuration keys. Make sure to:

Add .env to .gitignore to prevent pushing sensitive data.

Restart your dev server whenever you change .env.


Troubleshooting
If Google Sign-In is not working, verify Firebase Console authorized domains include your deployment domain (e.g., localhost and yourgithubusername.github.io).

Use HashRouter for routing on GitHub Pages to avoid 404 errors on refresh.

Restart dev server after .env changes.


Contact
Developed by Riddhi Deogade.

Feel free to open issues or submit pull requests!

