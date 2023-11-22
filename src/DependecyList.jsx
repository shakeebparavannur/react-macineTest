import { useState } from "react";

const DependecyList = () => {
  const [district, setDistrict] = useState([]);
  const data = [
    { state: "kerala", district: ["Malappuram", "Calicut", "Ernamkulam"] },
    { state: "tamilnadu", district: ["Coimbatore", "Madurai", "Erode"] },
  ];
  const selectDist = (e) => {
    const state = data.find((da) => da.state == e.target.value);
    console.log(e.target.value, "eValue");
    console.log(state, "state");
    setDistrict(state.district);
    console.log("clicked");
  };
  console.log(district);

  return (
    <div>
      <div>
        <select name="state" id="" onChange={selectDist}>
          {data.map((dat) => {
            console.log(dat.state);
            return (
              <option value={dat.state} key={dat.state}>
                {dat.state}
              </option>
            );
          })}
        </select>
        <select name="district" id="">
          {district.map((dist) => {
            return (
              <option key={dist} value={dist}>
                {dist}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DependecyList;
