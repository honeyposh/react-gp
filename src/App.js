import Header from "./components/Header";
import Input from "./components/Input";
import InputList from "./components/InputList";
import React from "react";
function App() {
  const [list, setList] = React.useState([]);
  function addList(input) {
    setList([...list, input]);
  }

  return (
    <div>
      <Header />
      <Input addList={addList} />
      <InputList list={list} />
    </div>
  );
}
export default App;
