import React from 'react'

export default function Info(props) {
  const textColorStyle = {
    color: props.classLevel === 'Freshmen' ? 'green' : 'black'
  };
  
  return (
    <>
      <p><strong>Full name:</strong> {props.username}</p>
      <p style={textColorStyle}><strong>Class Level:</strong> {props.classLevel}</p>
      <p><strong>School:</strong> {props.school}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </>
  );
}
