
import { useMeal } from './api/context';
import './App.css';

function App() {
  const {state,dispatch} = useMeal();
  console.log(state,dispatch);
  
  return (
    <div >
   <button></button>
    </div>
  );
}

export default App;
