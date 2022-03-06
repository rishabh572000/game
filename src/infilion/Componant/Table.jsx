import React, { Component } from 'react';

export default class Table extends Component {
    // data=[
    //     {
    //         "id": 1,
    //         "email": "george.bluth@reqres.in",
    //         "first_name": "George",
    //         "last_name": "Bluth",
    //         "avatar": "https://reqres.in/img/faces/1-image.jpg"
    //     },
    //     {
    //         "id": 2,
    //         "email": "janet.weaver@reqres.in",
    //         "first_name": "Janet",
    //         "last_name": "Weaver",
    //         "avatar": "https://reqres.in/img/faces/2-image.jpg"
    //     },
    //     {
    //         "id": 3,
    //         "email": "emma.wong@reqres.in",
    //         "first_name": "Emma",
    //         "last_name": "Wong",
    //         "avatar": "https://reqres.in/img/faces/3-image.jpg"
    //     },
    //     {
    //         "id": 4,
    //         "email": "eve.holt@reqres.in",
    //         "first_name": "Eve",
    //         "last_name": "Holt",
    //         "avatar": "https://reqres.in/img/faces/4-image.jpg"
    //     },
    //     {
    //         "id": 5,
    //         "email": "charles.morris@reqres.in",
    //         "first_name": "Charles",
    //         "last_name": "Morris",
    //         "avatar": "https://reqres.in/img/faces/5-image.jpg"
    //     },
    //     {
    //         "id": 6,
    //         "email": "tracey.ramos@reqres.in",
    //         "first_name": "Tracey",
    //         "last_name": "Ramos",
    //         "avatar": "https://reqres.in/img/faces/6-image.jpg"
    //     }
    // ]
  constructor(){
      super();
      this.state={
          data :[],
         loading:false,
         page:1,
         
      }
  }

async componentDidMount(){
    let url="https://reqres.in/api/users?page=1";
    let urlData=await fetch(url);
    let parseData= await urlData.json();
    this.setState({data : parseData.data});
}

handleNext = async () => {
    let url=`https://reqres.in/api/users?page=${this.state.page+1}`;
    let urlData=await fetch(url);
    let parseData= await urlData.json();

    this.setState({
        data : parseData.data,
        page : this.state.page+1,


    })

}
handlePrev = async () => {
    let url=`https://reqres.in/api/users?page=${this.state.page-1}`;
    let urlData=await fetch(url);
    let parseData= await urlData.json();

    this.setState({
        data : parseData.data,
        page : this.state.page-1,


    })
}


render() {
return (
<>
<h3 className='text-center'>Api Data</h3>
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Avtar</th>
    </tr>
  </thead>
  <tbody>
  {this.state.data.map((element)=>{
    return(
      <tr key={element.id}>
      <td scope="row">{element.id}</td>
      <td>{element.first_name}</td>
      <td>{element.last_name}</td>
      <td>{element.email}</td>
      <td><img src={element.avatar} /></td>
    </tr>
    )
  })}
  </tbody>
</table>
<div className='d-flex justify-content-between'>
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>Prev</button>
<button disabled={this.state.page+1 > Math.ceil(this.state.total_pages/6)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
</div>
</>
)
}
}
