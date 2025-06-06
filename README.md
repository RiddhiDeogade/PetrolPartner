# PetrolPartner

PetrolPartner is a React-based web app for managing driver forms with authentication via Google and Firebase integration. It features user signup, driver form submission, listing submitted drivers, and protected routes.



## Features

- User authentication with Google sign-in (Firebase Auth)
- Submit and list driver details stored in Firebase Firestore
- Protected routes based on authentication
- Responsive UI with React Router and HashRouter for GitHub Pages compatibility
- Deployment configured for GitHub Pages

## Technologies Used

- React (v19)
- Firebase (Auth, Firestore)
- React Router DOM (v7)
- GitHub Pages for deployment
- Material UI and custom CSS styling


## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account with a project set up

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/RiddhiDeogade/PetrolPartner.git
   cd PetrolPartner
2. Install dependencies:
   
- npm install

Create a .env file in the project root with your Firebase credentials

3. Start the development server:
    ```bash
   npm start
The app will open at http://localhost:3000.


## Usage
Navigate through the app using the navbar.

Sign up or log in using Google authentication.

Submit driver forms and view the list of submitted drivers.

Protected routes are accessible only after login.

## Deployment
This project uses GitHub Pages for deployment.

### Build the app:
      ```bash
      npm run build

### Deploy to GitHub Pages:
      ```bash
      npm run deploy
The app will be available at:

   https://RiddhiDeogade.github.io/PetrolPartner/
   Note: The app uses HashRouter to support GitHub Pages routing.
   


## Environment Variables
The .env file stores sensitive Firebase configuration keys. Make sure to:

Add .env to .gitignore to prevent pushing sensitive data.

Restart your dev server whenever you change .env.


## Troubleshooting
If Google Sign-In is not working, verify Firebase Console authorized domains include your deployment domain (e.g., localhost and yourgithubusername.github.io).

Use HashRouter for routing on GitHub Pages to avoid 404 errors on refresh.

Restart dev server after .env changes.


## Contact
Developed by Riddhi Deogade.

Feel free to open issues or submit pull requests!

