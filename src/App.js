
import './App.css';
import {useState} from "react";
import StateInfo from "./StateInfo";
import ErrorMessage from "./ErrorMessage.jsx";
const App = () => {

  const BASE_URL = "https://api.react-formula.com/learning-api/demos/states-project/states/";


  const [text,setText] = useState(null);
  const [error,setError] = useState(null);
  const [state,setState] = useState(null);

  const fetchState = async ()=>{
  const response = await fetch(BASE_URL + text);
  
  if(response.status === 200){
      const stateData = await response.json();
      setState(stateData);
      setError(null);
    }else{
      const errorData = await response.json();
      setError(errorData);
      setState(null);
    }
  };


  
  return <div className="flex bg-stone-100 justify-center min-h-screen flex-col items-center">
   <div className="w-full max-w-4xl flex flex-col justify-center items-center">
    <form
      className="m-5"
      onSubmit={(e)=>{
        e.preventDefault();
        fetchState();
        setText("");
      }}
      >
      <label htmlFor="state-input">State</label>
    <input
      placeholder="Search a state"
      id="state-input"
      value={text}
      onChange={(e)=>{
        setText(e.target.value)
      }}
      className="border border-stone-200 p-2 m-2"
      type = "text" />
      <button
        className="bg-teal-200 border border-teal-400 text-xl p-2 rounded-lg"
        onClick={()=>{}}>Search</button>
    </form>

    {
      state && ( <div className="stateContainer" > <StateInfo info={state} /> </div> )
    }

    {

      error && <ErrorMessage error={error} />
      
    }
    
    
   </div>
  </div>
};

export default App;
