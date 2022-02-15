import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}
let NewsItem = (props) => (
props.article ?
<article style={articleStyle} >
  <div>
    <h1>{props.article.title}</h1>
    <img style={imgStyle} src={props.article.urlToImage} alt="" />
    <h4>{props.article.description}</h4>
    <a href={props.article.url} target="_blank">READ MORE</a>
    <button onClick={() => {throw new Error("this is my new error")}}>Show the error after click</button>
  </div>
</article> :
null
);
const mapStateToProps = (state) => ({
article: state.reducer4.news,
})
NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;