import React, { useState } from "react";
function Users() {
  
  const [state, setState] = useState(localStorage.getItem("Result"));
  return (
    <>
      <div className="reg2">
        <h1>USERS</h1>
        <table className="table table-striped table-dark">
          <tbody key={'header'}>
            {JSON.parse(state).map((item,key)=>{
              return <tr key={key}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>;
            })}
          </tbody>
          
        </table>
      </div>
    </>
  );
}

export default Users;