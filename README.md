# Authentication System

Created an Authentication System

- The master branch contains the authentication system using Passport.js
- The manual-local-auth branch contains Manual Authentication system

## Folder Strucutre

This project supports the MVC structure. You canm learn more about the MVC structure <a href="https://www.youtube.com/watch?v=pCvZtjoRq1I" target="_blank">here</a>

```
codeial
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── assets
|    └── css
|         └── layouts.css
|         └── styles.js
├── models
|       └── user.js
├── views
|      └── _footer.ejs
|      └── _header.ejs
|      └── home.ejs
|      └── layout.ejs
|      └── user.ejs
|      └── user_profile.ejs
|      └── user_sign_in.ejs
|      └── user_sign_up.ejs
├── routes
|      └── index.js
|      └── user.js
├── controllers
|      └── home_controller.js
|      └── user_controller.js
├── config
       └── mongoose.js
       └── passport-local-strategy.js
```

## Starting the project

Make sure you change the directory to codeial

```bash
cd codeial
```

Now type in the following command to start the project: 

```bash
npm start
```



