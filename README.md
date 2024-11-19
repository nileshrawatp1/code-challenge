# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks:
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>
Answer: I have used javascript fetch API to fetch the list of Pokemons.

Question 2: What steps would you take to future improve this?<br>
Answer: We can wrap the fetch API call to an async function and then we can apply try catch method for error handlings.

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
- Automatically generating action creators and action types.
- Allowing direct mutations of the state with Immer.
- Reducing boilerplate and enhancing developer productivity.

Question 5: Describe the benefits of immutable code.<br>
- Easier Debugging: No side effects easier tracing of data changes.
- Simpler Testing: Pure functions and easier state comparison
- Easy rollback of state
- Prevents data conflicts in distributed systems.

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store
Question 6: How can you verify the action has been dispatched?
Answer:
- Using console.log() inside the reducer.
- Using Redux DevTools extension
- Using redux-logger Library

## Task 6:
Question 7: explain the use of `useEffect` hook in React
Answer: The useEffect hook is used to perform side effects in function components. A side effect can include things like data fetching, logging, etc. It runs after every render and can be customized to run on specific conditions.

Question 8: What is A High Order Component?
Answer: A Higher-Order Component is a pattern in React that allows you to reuse component logic. It is a function that takes a component as an argument and returns a new component with additional functionality or logic.

Question 9: What use cases would a HOC be usefull?
Answer:
- Code Reusability
- Conditionally Rendering Component
- Manipulating Props
- Stateful Logic

Question 10: What does it indicate when a component is prefixed with `use` and `with`
Answer:
use Prefix: Typically, components or hooks prefixed with use are React hooks (useState, useEffect, useContext)
with Prefix: Components prefixed with with typically refer to Higher-Order Components (HOCs)

Question 11: What is a Generic type in typescript?
Answer: A Generic Type in TypeScript allows you to create reusable and flexible components or functions that can work with multiple data types while maintaining type safety

Question 12: Whats the difference between a controlled and uncontrolled input in React?
Answer:
Controlled Input: In a controlled input, the form element's value is controlled by the component's state. Every change is handled by React, and the input’s value is bound to a state variable.
Uncontrolled Input: In an uncontrolled input, the value of the form element is not controlled by React. Instead, the DOM manages the value. React doesn't control the state of the input field directly.
