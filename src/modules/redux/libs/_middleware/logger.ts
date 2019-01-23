import {app} from "../../../..";

export const logger = (store: any) => (next: any) => (action: any) => {
  if (app().isDevelopMode()) {
    console.log('dispatching', action)
  }
  const result = next(action);
  if (app().isDevelopMode()) {
    console.log('next state', store.getState())
  }
  
  return result;
};
