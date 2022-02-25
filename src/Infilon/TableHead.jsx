import React from "react";


const TableHead = () =>{
return(
  <>

<div className="container">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Avtar</th>
    </tr>
  </thead>
</div>
  </>
)
}

export default TableHead;