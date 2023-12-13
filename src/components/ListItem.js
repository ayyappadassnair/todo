import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const ListItem = ({tasks,removeTask}) => {
  const [statuses, setStatuses] = useState(tasks.map(() => false));

  const handleStatusChange = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = !newStatuses[index];
    setStatuses(newStatuses);
  };
  
  return (
  <>
  <div>
    <div>
    <Table style={{width:"80vw",marginLeft:"100px", marginTop:"50px"}}>
      <thead >
        <tr>
          <th  style={{ backgroundColor: "blue", color: "white", width:"200px" }}>TITLE</th>
          <th  style={{ backgroundColor: "blue", color: "white" ,width:"600px"}}>DESCRIPTION</th>
          <th  style={{ backgroundColor: "blue", color: "white",width:"150px" }}>STATUS</th>
          <th  style={{ backgroundColor: "blue", color: "white",width:"150px" }}>DELETE</th>
        </tr>
      </thead>
      <tbody>
      {tasks.map((task, index) => (
            <tr key={index}>
              <td style={{ textDecoration: statuses[index] ? 'line-through' : 'none' }}>{task.title}</td>
                  <td style={{ textDecoration: statuses[index] ? 'line-through' : 'none' }}>{task.description}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={statuses[index]}
                      onChange={() => handleStatusChange(index)}
                    />
                  </td>
              <td><button style={{border:"none",backgroundColor:"white"}} onClick={()=>{removeTask(index)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
    </Table>
    
    </div>
  </div>
  
  </>
  )
}

export default ListItem