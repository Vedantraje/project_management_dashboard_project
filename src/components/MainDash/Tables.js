import React from "react";
import "./Tables.css";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import { TableData } from "../Data/Data";


function Tables() {
  return (
    <div className="Tablemain">
      <div className="head">
        <h3 align="center">Monthly Tasks</h3>
        <Button className="btn1">Archive</Button>
        <Button className="btn2">+ New </Button>
      </div>
<hr />
{TableData.map((item,index)=>{
  return(
    <div className="table1" key={index.id}>

    <Table striped>
      <thead>
        <tr>
          <th>Today</th>
        </tr>
      </thead>
      <hr />

      <tbody>
        <tr>
          <td>{item.img1}</td>
          <td>{item.name1}</td>
          <td>{item.people1}</td>
        </tr>

        <tr>
          <td>{item.img2}</td>
          <td>{item.name2}</td>
          <td>{item.people2}</td>
        </tr>

        <tr>
          <td>{item.img3}</td>
          <td>{item.name3}</td>
          <td>{item.people3}</td>
        </tr>
        </tbody>

       <thead>
        <tr>
          <th>Tomorrow</th>
        </tr>
      </thead>
      <hr />


      <tbody>
      <tr>
      <td>{item.img4}</td>
          <td>{item.name4}</td>
          <td>{item.people4}</td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
})}

    </div>
  );
}

export default Tables;
