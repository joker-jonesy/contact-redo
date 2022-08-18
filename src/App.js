import React from "react";
import Contact from "./components/Contact";

function App() {

  const contacts = [
    {
      name: "Cory",
      id:1,
      adr: "Something Something Lane"
    },
    {
      name: "Zach",
      id: 2,
      adr: "Something Something Lane 2222"
    },
    {
      name: "Sarah",
      id:3,
      adr: "Something Something Lane 3333"
    }
  ]

  const [list, setList]=React.useState(contacts);
  const [inp, setInp]=React.useState("");

  const submit =()=>{
    let newList =list;
    const newObj = {
      name: inp,
      id: list.length+1,
      adr: "Somewhere Somewhere Somewhere Lane"
    }
    newList.push(newObj);
    setList(newList)
  }

  return (
    <div className="App">
      {list.map(itm=>
          <Contact key={itm.id} data={itm} />
      )}
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
