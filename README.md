# Description

This is a simple contact book project, using react as a frontend solution and firebase for the backend, using firebase authentication features, database with firestore, and firebase storage to store photos for contacts.

This application was deployed using the firebase hosting system. Access the link to view and use it. [Simple agenda firebase app](https://agenda-119d4.web.app/)

---

## How to install

```bash

 # Clone the repository
 $ git clone https://github.com/RodSilvaSoul/simple-agenda.git

 # Rum yarn or npm install
 $ yarn or npm install

```

### .env file

To proceed with the installation you will have to start a new web application in the firebase console. Read the firebase documentation to start a new web project and get the necessary configuration data to be put in your .env file in the application root using the .env.example file as a guide.

[Firebase web project documentation](https://firebase.google.com/docs/web/setup?authuser=0)

[.env.example](./.env.example)

```txt
#firebase

REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
REACT_APP_MEASUREMENT_ID=

```

### Firebase console

With your project created, in your firebase console activate the following features, firebase authentication, firestore database and storage. To use social media authentication , enable these features in your firebase authentication panel. To make all these settings use the documentation for each resource.

### Documentation

- [Firestore](https://firebase.google.com/docs/firestore)
- [Storage](https://firebase.google.com/docs/storage)
- [Authentication](https://firebase.google.com/docs/auth)

---

## Technologies used

The project was developed using the following technologies

- [React](https://pt-br.reactjs.org)
- [Firebase](https://firebase.google.com)
- [Styled Components](https://styled-components.com)
- [React hook form](https://react-hook-form.com)
- [React csv](https://www.npmjs.com/package/react-csv)
- [React modal](https://github.com/reactjs/react-modal)
- [React drop zone](https://react-dropzone.js.org)
- [React router dom](https://reactrouter.com/web/guides/quick-start)
- [Framer motion](https://www.framer.com/motion/)
