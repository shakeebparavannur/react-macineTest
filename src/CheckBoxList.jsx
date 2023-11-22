import React, { useState } from "react";
import "./checkbox.css";
const CheckBoxList = () => {
  const arr = ["Play Cricket", "Read Books", "Do HomeWork"];
  const [task, setTask] = useState(arr);
  const [selected, setSelected] = useState([]);
  console.log(selected);
  const del = (item) => {
    const newArr = task.filter((ar) => ar !== item);
    setTask(newArr);
  };
  const sel = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    if (checked) {
      setSelected([...selected, value]);
    } else {
      const newArr = selected.filter((ar) => ar !== value);
      setSelected(newArr);
    }
  };
  return (
    <div>
      <h3>Check Box List</h3>
      <ul>
        {task.map((ar) => {
          return (
            <div className="list" key={ar}>
              <input type="checkbox" name="task" value={ar} onChange={sel} />
              <li className="list-item">{ar}</li>
              {selected.includes(ar) && (
                <button onClick={() => del(ar)}>Delete</button>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckBoxList;
