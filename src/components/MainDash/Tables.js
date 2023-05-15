import React from "react";
import "./Tables.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { TableData } from "../Data/Data";
import Card from "react-bootstrap/Card";
function Tables() {
  return (
    <div className="Tablemain">
      <div className="head">
        <h3 align="center">Monthly Tasks</h3>
        <Button id="btn1">Archive</Button>
        <Button id="btn2">+ New </Button>
      </div>
      <hr />

      <div>
        <div className="cardData4">
          <Card style={{ width: "auto" }}>
            <Card.Body>
              <Table striped>
                <thead>
                  <tr>
                    <th style={{ paddingLeft: "1rem" }}>Active Tasks</th>
                    <th style={{ paddingLeft: "4rem" }}>Completed</th>
                    <th style={{ paddingLeft: "20rem" }}>                    
                        <Button variant=""><i class="bi bi-search"></i><span style={{ paddingLeft: "0.5rem" }}>Search</span></Button>
                    </th>
                  </tr>
                </thead>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>

                     
      {TableData.map((item, index) => {
        return (
      <div id="cardData5" key={index.id}>
          <Card style={{ width: "auto" }}>
            <Card.Body>
              <Table striped>
                <thead>
                <span>Today</span> 

                  <tr>
                    <th style={{ paddingLeft: "4rem" }}>{item.img1}</th>
                    <th style={{ paddingLeft: "10rem" }}>                    
                    {item.name1}<br/><span className="desc">App Design and Upgrade New Features</span></th>
                  <th style={{ paddingLeft: "12rem" }}>{item.people}{item.people}{item.people}{item.people}</th>                  
                  </tr>
                  <tr>
                    <th style={{ paddingLeft: "4rem" }}>{item.img2}</th>
                    <th style={{ paddingLeft: "10rem" }}>                    
                    {item.name2}<br/><span className="desc">Facebook Ads Design for Creative Cloud</span></th>
                  <th style={{ paddingLeft: "12rem" }}>{item.people}{item.people}{item.people}{item.people}</th>                  
                  </tr>
                  <tr>
                    <th style={{ paddingLeft: "4rem" }}>{item.img3}</th>
                    <th style={{ paddingLeft: "10rem" }}>                    
                    {item.name3}<br/><span className="desc">Payoneer Dashboard Design</span></th>
                  <th style={{ paddingLeft: "12rem" }}>{item.people}{item.people}{item.people}{item.people}</th>                  
                  </tr>
                  <span>Tomorrow</span> 
                  <tr>
                    <th style={{ paddingLeft: "4rem" }}>{item.img4}</th>
                    <th style={{ paddingLeft: "10rem" }}>                    
                    {item.name4}<br/><span className="desc">Developing View - Just Now</span></th>
                  <th style={{ paddingLeft: "12rem" }}>{item.people}{item.people}{item.people}{item.people}</th>                  
                  </tr>
                </thead>
              </Table>
            </Card.Body>
          </Card>
        </div>
        );
      })}
    </div>
  );
}

export default Tables;
