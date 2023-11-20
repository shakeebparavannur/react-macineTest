import React, { useState } from 'react'

const DependecyList = () => {
    const data = [
        {state:'kerala',district:['Malappuram', 'Calicut', 'Ernamkulam']},
        {state:'tamilnadu',district:['Coimbatore', 'Madurai', 'Erode']}
    ]
   const selectDist = ()=>{

    }
    console.log(data);
    const [district,setDistrict] = useState([]);
  return (
    <div>
        <div>
            <select name="state" id="">
            {data.map((dat)=>{
                console.log(dat.state);
                return(
                    <option value={dat.state} onSelect={selectDist()}>{dat.state}</option>
                    
                    )
                    

            })}
            <option value="test"> test</option>
            </select>
            <select name="district" id=""></select>
        </div>
    </div>
  )
}

export default DependecyList