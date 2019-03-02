# Test app

Getting to know react hooks, my main goal is to make the app work as optimized as possible, using only functional components and avoiding useless rerenders with the help of hooks and memo.
The app stores a language reference in the browser's local storage and gets the previously selected setting on load.

## Current content

- hooks used:
[useState], [useReducer], [useContext]
- react features:
[React.memo]
- other:
[react-router-dom]

There are two store providers situated on the top level, one for language and other for user, and the whole app reacts to changes on these two.

Currently, user data and interactions are hard coded, the idea is to connect it with an API soon.

### Nav bar
The app has a nav bar with a responsive menu that turns to a "burger menu" on smaller devices, it contains the main route links and a language toggle between english and spanish.
Shows "logout" if there's a logged user, otherwise it renders "login, signup" buttons.

### routes
[Not-protected]
- Home "/"
- About "/about"

[Protected]
- Sign up "/signup"
- Log in "/login"

## npm start

Port is changed to 4200, http://localhost:4200.
