import React, { Component } from 'react';

export default class NewsItem extends Component {
render() {
    let {title, description, image,url} = this.props;
return (
<>
<div className="card my-3">
  <img className="card-img-top" src={image?image:'https://images.wsj.net/im-497978/social'} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={url} className="btn btn-primary" target="_blank">Read More</a>
  </div>
</div>
</>
)
}
}
