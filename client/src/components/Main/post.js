import React from 'react';

const style={
  cardBody: {
    width: '95%',
    margin:'1.5em',
    textAlign: 'left'
  }
}

const post = ({
  id,
  title,
  poster,
  postBody,
  commentCount
}) => {
  return ( 
    <div class="card" style={style.cardBody}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">By: {poster}</h6>
        <p className="card-text">{postBody}</p>
        <a href="#" className="card-link">Comments({commentCount})</a>
      </div>
    </div>
   );
}
 
export default post;