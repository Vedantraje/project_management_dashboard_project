import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Cards.css"

import { CardData1, CardData2 } from '../Data/Data';
export default function Cards() {
  return (
    <div className="cardc1">
    
      {CardData1.map((item, index) => {
        return (
          <div key={index} id="cardData1">
            <Card style={{ width: '14rem' }}>
              <Card.Body>
              {item.icon}
                <Card.Title>{item.heading}</Card.Title>
                <br />
                {item.people}{item.people}{item.people}{item.people}

              </Card.Body>
            </Card>
          </div>
        );
      })}

      {CardData2.map((item, index) => {
        return (
          <div key={index} id="cardData2">
            <Card style={{ width: '14rem' }}>
              <Card.Body>
               {item.icon}
                <Card.Title>{item.heading}</Card.Title>
                <br />
                {item.people}{item.people}{item.people}{item.people}
              </Card.Body>
            </Card>
          </div>
        );
      })}

    </div>
  )
}
