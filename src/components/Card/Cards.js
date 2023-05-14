import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Cards.css"

import { CardData1, CardData2 } from '../Data/Data';
export default function Cards() {
  return (
    <div className="cardc1">
      {CardData1.map((item, index) => {
        return (
          <div key={index} className="cardData1">
            <Card style={{ width: '14rem' }}>
              {item.icon}
              <Card.Body>
                <Card.Title>{item.heading}</Card.Title>
                <br />
                {item.people}

              </Card.Body>
            </Card>
          </div>
        );
      })}

      {CardData2.map((item, index) => {
        return (
          <div key={index} className="cardData2">
            <Card style={{ width: '14rem' }}>
              {item.icon}
              <Card.Body>
                <Card.Title>{item.heading}</Card.Title>
                <br />
                {item.people}
              </Card.Body>
            </Card>
          </div>
        );
      })}

    </div>
  )
}
