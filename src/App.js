import { useMeal } from "./api/context";
import "./App.css";

function App() {
  const { state:{meals}, dispatch } = useMeal();
  const loadData = () => {
    dispatch({
      type: "ADD_MEALS",
      payload: { new: "data" },
    });
  };

  return (
    <div>
      <p>{JSON.stringify(meals)}</p>
      <button onClick={loadData}>load</button>
    </div>
  );
}

export default App;
