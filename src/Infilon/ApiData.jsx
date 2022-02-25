import React, {useState, useEffect } from "react";
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.production.min";
import Table from "./Table";
import TableHead from './TableHead';


const ApiData = () =>{
  const [apiData, setapiData] =useState([]);
  const [first_name, setfirst_name] =useState('');
  const [last_name, setlast_name] =useState('');
  const [email, setemail] =useState('');
  const [userId, setUserId] =useState(null);


  useEffect(()=>{
    getData();
  }, []);
  
 

  const getData = async() =>{
    try{
        let url=`https://reqres.in/api/users?page=1`;
        let res = await fetch(url);
        let data = await res.json();
        const base_data = data.data;
        //const {id, email, first_name} = base_data;
        // const apiDataInfo = {
        //     id, 
        //     email, 
        //     first_name,
        //   }
          setapiData(base_data);
            // console.log(data);
            setfirst_name(base_data[0].first_name);
            setlast_name(base_data[0].last_name);
            setemail(base_data[0].email);
            setUserId(base_data[0].id);


    }
    catch(error){
      console.log(error);
    }

  }

 function deleteUser(id){
   fetch(`https://reqres.in/api/users/${id}`,{
     method:'DELETE'
   }).then((result)=>{
     result.json().then((resp)=>{
       console.log(result)
       getData()
     })
    console.log(result)
   })
 }


function updateUser(id){
  // console.log(apiData[id-1]);
  setfirst_name(apiData[id-1].first_name);
  setlast_name(apiData[id-1].last_name);
  setemail(apiData[id-1].email);
  setUserId(apiData[id-1].id);
}

function Edit(){
  let item ={first_name, last_name,email, userId};
  fetch(`https://reqres.in/api/users/${userId}`,{
     method:'PUT',
     header:{
       'Accept' : 'application/json',
       'Content-Type' : 'application/json'
     },
     body:JSON.stringify(item)
   }).then((result)=>{
     result.json().then((resp)=>{
       console.log(resp)
       getData()
     })
    console.log(result)
   })
}


//  componentDidMount() {
//   // Simple DELETE request with fetch
//   fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
//       .then(() => this.setState({ status: 'Delete successful' }));
// }

//  console.log(apiData[0]);

return(
 <> 
 
 <div className="container">
 
 <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Avtar</th>
      <th scope="col">Updation</th>
    </tr>
  </thead>
  <tbody>
  {apiData.map((val)=>{
    return(
        <>
    <tr key={val.id}>
      <td>{val.id}</td>
      <td>{val.first_name}</td>
      <td>{val.last_name}</td>
      <td>{val.email}</td>
      <td><img src={val.avatar} /></td>
      <td>
      <button type="button" className="btn btn-primary" onClick={() =>deleteUser(val.id)}>Delete</button>&nbsp;&nbsp;
      <button type="button" className="btn btn-primary" onClick={() =>updateUser(val.id)}>Edit</button>
      </td>
    </tr>
    </>
    )
 })} 
  </tbody>
</table>
</div>

<div className="form">
<input type='text' value={first_name} onChange={(e)=>setfirst_name(e.target.value)} /><br/><br />
<input type='text' value={last_name} onChange={(e)=>setlast_name(e.target.value)} /><br/><br />
<input type='text' value={email} onChange={(e)=>setemail(e.target.value)} /><br/><br />
<button type="button" className="btn btn-primary" onClick={Edit}>Update</button>
</div>

  {/* {apiData.map((val)=>{
    return(
        <>
         <Table 
         id={val.id}
         first_name={val.first_name}
         last_name={val.last_name}
         email={val.email}
         avatar={val.avatar}
         />

        </>
    )
 })}  */}

 </>
)
}

export default ApiData;