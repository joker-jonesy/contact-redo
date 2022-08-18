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

  return (
    <div className="App">
      {list.map(itm=>
          <Contact key={itm.id} data={itm} />
      )}
    </div>
  );
}

export default App;
