# Demo APP

## About
Small but ambitious application with 4 screens to sign in, create a post, write a comment, and preview changes.

## Getting started
* Clone this repo
* Install dependencies by `npm install`
* Run app by `npm start`
* Open http://localhost:8081/

## App structure
* Step 1 / Sign in 
    * URL: /
    * Fakes and stores token in localStorage
    * Validates if user is registered (for testing you can use Sincere@april.biz) 
* Step 2 / Write a post
    * URL: /add-post
    * Form with title and text to create new post
    * Use user id and token to POST new post
    * After posting saves post id
* Step 3 / Write a comment
    * URL: /add-comment
    * Form with name and text for comment 
    * Use user id, post id and token to POST new comment 
* Step 4 / Review
    * URL: /review
    * Preview of entered data from previous state 
    * You can logout - it will clear token in he storage and redirect to sign in page
    * You can reset changes - it will clear post and comment data and redirect to step 2 
    
## Folder structure
* /src/actions/** - contains constant actions to describe events in the apps such as signIn, signOut, addPost, etc.
* /src/components/** - folder for app components which represents routes and confirmation dialog
* /src/reducers/** - contains functions to tie actions and state, return new state
* /src/sagas/** - contains all sagas needed to create saga middleware
* /src/types/** - definition of types for actions

## Resources
* [React v17.0.1](https://reactjs.org)
* [Redux v4.0.5](https://redux.js.org)
* [Saga v1.1.3](https://redux-saga.js.org)
* [Material UI](https://material-ui.com/)

## Dependencies
* [Node v15.0.1](https://nodejs.org/uk/blog/release/v15.0.1/)
* [NPM 6.14.8](https://www.npmjs.com/package/npm/v/6.14.8)
    
## Known issues
* There is one warning in the last step caused by the confirmation dialog from Material UI:
> Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode.
* If you refresh any route it will lose entered data from previous steps. Sorry, haven't solved it :grimacing:
    
