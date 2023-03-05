import { useState } from "react";
import "./App.css";
import axios from "axios";

type ButtonClickedResponse = {
  result: string;
};

function App() {
  const apiUrl: string = process.env.REACT_APP_PUBLIC_URL as string;

  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState("");

  const ButtonClicked = async () => {
    setCounter(counter + 1);

    axios
      .post<ButtonClickedResponse>(
        apiUrl,
        { number: counter + 1 },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setResult(res.data.result);
      });
  };

  return (
    <>
      <div className="App">
        <div className="Form">
          <div className="Texts">
            <p>Your count</p>
            <p className="Counter">{counter}</p>
          </div>
          <button onClick={ButtonClicked} className="Increase-Button">
            Push me!
          </button>
          <h1 className="Result">{result}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
