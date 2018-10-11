import { contacts } from "../static-data";

export default (state = { contacts }, action) => {
  return state;
};

/**
 * The app is now managed by the reducer
 * 
 * 
 * “Using ES6 default parameters, we have set the state parameter to an initial value of {contacts}

This is essentially the same as {contacts: contacts}

Hence, the return state statement within the reducer will return this value, {contacts: contacts} as the initial state of the application.”
 */
