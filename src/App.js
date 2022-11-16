import axios from "axios";
import { useEffect } from "react";
import { useMeal } from "./api/context";
import "./App.css";

function App() {
  const {
    state: { meals },
    dispatch,
  } = useMeal();

  const loadData = (data) => {
    dispatch({
      type: "ADD_MEALS",
      payload: data,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get(
        "http://themealdb.com/api/json/v1/1/lookup.php?i=52772"
      );
      dispatch({
        type: "ADD_MEALS",
        payload: data,
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <p>{JSON.stringify(meals)}</p>
      <button onClick={loadData}>load</button>
    </div>
  );
}

export default App;
