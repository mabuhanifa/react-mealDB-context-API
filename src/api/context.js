import { createContext, useReducer } from "react";

const MealContext = createContext();
const initialState = {
  meals: [],
  singleMeal: {},
};
const Meal = ({ children }) => {
  const [state, dispatch] = useReducer(initialState);
  return <MealContext.Provider>{children}</MealContext.Provider>;
};
