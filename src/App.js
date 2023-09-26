import {useState} from "react";
import Form from "./Form";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const onChange = (event) => {
    setInput(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (input === "") {
      return ;
    }
    setInput("");
    setList(prevArray => [input, ...prevArray]);
  }

  return (
    <div>
      <h1>todolist-app</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={input} placeholder="할 일을 입력하세요."></input>
        <button type="submit">Add</button>
      </form>
      <hr/>
      {list.map((input) => <div>{input}</div>)}
    </div>
  );
}

export default App;
