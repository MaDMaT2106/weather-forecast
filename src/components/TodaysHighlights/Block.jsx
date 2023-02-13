import React from 'react';

export default function Block({ title, content }) {
  return (
    <div className="highlightBlock container">
      <p className="highlightBlock-title">{title}</p>
      <div className='highlightBlock-content'>{content}</div>
    </div>
  );
}
