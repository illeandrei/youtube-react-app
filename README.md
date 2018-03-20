### Preview
[rawgit](https://rawgit.com/illeandrei/youtube-react-app/master/index.html)

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone git@github.com:illeandrei/youtube-react-app.git
> cd youtube-react-app
> npm install
> npm start
```

#### About React
[React](https://reactjs.org/)

#### Functional Component
- is a simple function that returns some JSX.
- fun fact - functional component can contain a class based cmp.

#### Class based Component
- does every thing that a functional component does, but the difference is, a class
component is controlled by state.
- it return JSX through the 'render' method.

#### State
- is initialized in the constructor of a class (this state = ...)
- can only be changed through the 'setState' function!
- ##### component level state 
- is the state that is initialized inside the class constructor
- if state changes, the update are made only locally, i.e on the component of which the
state changed.
- ##### application level stat 
- comes from redux

#### Controlled Component
- is a component which is controlled by the state

#### Data flow
- how will all the (nested) components know about the data?
- which component should be responsible for grabbing the data?
- downwards data flow - means that only the most parent component of our App
should be responsible for fetching data (from api, or from redux, or flux).
