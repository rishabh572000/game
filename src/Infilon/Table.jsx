import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Table = (props) =>{
return(
  <>
   <div className="container">
    <table className="table table-striped">
  <tbody>
    <tr>
      <td>{props.id}</td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.email}</td>
      <td><img src={props.avatar} /></td>
    </tr>
  </tbody>
</table>
</div>
  </>
)
}

export default Table;