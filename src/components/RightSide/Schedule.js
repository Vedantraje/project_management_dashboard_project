import React from "react";
import "./Schedule.css";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
function Schedule() {
  return (
    <div>
      <div className="schmain">
        <span className="call">30 minute call with client</span>
        <button className="btninv">+ Invite</button>
      </div>
      <div className="cardc1">
        <div className="cardData3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Table striped>
                <thead>
                  <tr>
                    <th style={{ paddingLeft: "1rem" }}>
                      <i class="bi bi-people-fill"></i>
                      <i class="bi bi-people-fill"></i>
                      <i class="bi bi-people-fill"></i>
                    </th>
                    <th style={{ paddingLeft: "2rem" }}>12.35</th>
                    <th style={{ paddingLeft: "6rem" }}>
                      <i class="bi bi-telephone-fill"></i>
                    </th>
                    <th>
                      <i class="bi bi-three-dots-vertical"></i>
                    </th>
                  </tr>
                </thead>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div><br />
      <hr />

<div>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><h4>Design Project</h4></Card.Title>
        <Card.Title><i class="bi bi-hourglass-bottom"></i> <span>In Progress...</span> </Card.Title>
        <Table striped>
                <thead>
                  <tr>
                    <th>
                  Completed
                    </th>
                    <th style={{ paddingLeft: "2rem" }}>In Progress</th>
                    <th style={{ paddingLeft: "2rem" }}>
                    Team Members
                    </th>                    
                  </tr>
                </thead>
                <tbody>
        <tr>
          <td style={{ paddingLeft: "1rem" }}><h2>144</h2></td>
          <td style={{ paddingLeft: "2rem" }}><h2>24</h2></td>
          <td style={{ paddingLeft: "2rem" }}><i class="bi bi-people-fill"></i> <i class="bi bi-people-fill"></i>  <i class="bi bi-people-fill"></i></td>
        </tr>
      </tbody>
      </Table>
      </Card.Body>
    </Card>
</div>
<hr />
<div>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><h3>New Taks</h3></Card.Title>
        <Card.Title><h3>Taks title</h3></Card.Title>
        <div className="d-grid gap-2">
     
        <Form>
        <Form.Control className="mb-3" type="" placeholder="Create New..." />
      </Form>
    </div>
    <hr />
    <div>
    <span><i class="bi bi-emoji-angry icon-yellow"></i><i class="bi bi-emoji-laughing-fill"></i>
<i class="bi bi-emoji-sunglasses-fill"></i><i class="bi bi-emoji-angry"></i>
<i class="bi bi-emoji-laughing-fill"></i></span>
    </div>
        
      </Card.Body>
    </Card>
</div>
    </div>
  );
}

export default Schedule;
