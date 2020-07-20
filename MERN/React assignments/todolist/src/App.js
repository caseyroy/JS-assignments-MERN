import React, { useState } from 'react';
import './App.css';

function App() {
  const [katanaSet, setKatanaSet] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, { katanaset: katanaSet, isAquired: false }]);
  };

  const handleDelete = (delIdx) => {
    const filteredList = list.filter((list, idx) => {
      return idx !== delIdx;
    })
    setList(filteredList);
  };
  const isChecked = (updatedIdx) => {
    const updatedList = list.map((list, idx) => {
      if (idx === updatedIdx) {
        return { ...list, isAquired: !list.isAquired };
      }

    })
    setList(updatedList)
  }
  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleSubmit(event);
      }}
      >
        <div>
          <input onChange={(event) => {
            setKatanaSet(event.target.value);
          }}
            type="text"
            value={katanaSet}
          /><br />
          <button>Add Set</button><br />
          <label>Katana Sets Not Aquired</label>
          <hr />
        </div>
      </form>

      {
        list.map((list, idx) => {
          const labelStyle = { textDecoration: "none" };

          if (list.isAquired) {
            labelStyle.textDecoration = "line-through";
          }
          return (
            <div key={idx}>
              <label style={labelStyle} >{list.katanaset}</label>
              {/* <label style={{ textDecoration: list.isAquired ? "line-through" : "none" }}>{list.katanaset}</label> */}
              <input onChange={(event) => { isChecked(idx) }} type="checkbox" checked={list.isAquired} />
              <button onClick={(event) => { handleDelete(idx); }}>Delet Set</button>
            </div>
          )

        })}
    </div>
  );
}

export default App;
