import React, {Component} from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    let url ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fee6713989e4a309cd0f70bd659d647&pageSize=10';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles, totalResult:parsedData.totalResult})

  }

   handlePrev = async () =>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fee6713989e4a309cd0f70bd659d647&page=${this.state.page -1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();


   this.setState({
    page:this.state.page-1,
    articles:parsedData.articles,
   })

 }
  handleNext = async () =>{
    if(this.state.page+1 > Math.ceil(this.state.totalResult/10)){

    }
    else{
      
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fee6713989e4a309cd0f70bd659d647&page=${this.state.page +1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();


   this.setState({
    page:this.state.page+1,
    articles:parsedData.articles,
   })
  }
 }
render(){
return (
<>
<div className='container my-3'>
<h2 className='text-center'>DailyNews - Top Headlines</h2>
<div className='row'>
{this.state.articles.map((element)=>{
  return(
  <div className='col-md-4' key={element.url}>
    <NewsItem title={element.title?element.title.slice(0,20):'This News Title is null'} description={element.description?element.description.slice(0,80):'This News Description is null'} image={element.urlToImage} url={element.url}/>
    

  </div>
  )
})}

</div>
<div className='d-flex justify-content-between'>
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>Prev</button>
<button disabled={this.state.page+1 > Math.ceil(this.state.totalResult/10)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
</div>
</div>
</>
  )
}

}

