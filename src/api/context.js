import { createContext, useContext, useReducer } from "react";
import mealReducer from "./reducer";

const MealContext = createContext();

const initialState = {
  meals: [54],
  singleMeal: { a: "a" },
};

const Meal = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initialState);
  const store = { state, dispatch };

  return <MealContext.Provider value={store}>{children}</MealContext.Provider>;
};

export const useMeal = () => {
  const data = useContext(MealContext);
  if (data === undefined) {
    throw new Error();
  }
  return data;
};

export default Meal;
