import React from 'react'

export default function ShowData(props) {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Gender : {props.gender}</p>
      <p>Department : {props.department}</p>
      <p>Role : {props.role}</p>
      <p>Salary : Rs. {props.salary}</p>
    </div>
  )
}
