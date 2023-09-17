import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

// things I made up
const prizes = [
  { title: 'First Place Prize Project',
    content:
      "$5 Amazon Gift Card",
  },
  { title: 'Best Theme-Related Project',
  content:
    "Prizes TBD",
  },
  { title: 'Best Website Project',
  content:
    'Prizes TBD',
  },
  { title: 'Best Game Project',
    content: 
    'Prizes TBD',
  },
  { title: 'Best Mobile Project',
    content:
    'Prizes TBD',
  },
  { title: 'Best Beginner Project',
    content:
    'Prizes TBD',
  }
];

const PrizesPage = () => {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  return (
    <Container fluid
      id="prizes"
    >
      <h1
        style={{
          fontFamily: 'Mokoto',
          fontWeight: '400',
          color: 'white',
          textAlign: 'center',
          fontSize: '3rem',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',

          paddingBottom: 10,
        }}
      >
        Prizes
      </h1>
      <Accordion style={{ fontFamily: 'Poppins', width: '75vw', margin: 'auto' }} >
        {prizes.map((prizes, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header> {prizes.title} </Accordion.Header>
            <Accordion.Body> {prizes.content} </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <h2 style ={{ fontFamily: 'Poppins Light', fontSize: 20, textAlign: "center", paddingTop: 20, paddingBottom: 30}}
      >Feel free to contact us with any other questions at <a href='mailto:hackrpi@rpi.edu' style ={{color: "#db4941"}}>hackrpi@rpi.edu!</a></h2>
      
    </Container>
  );
};

export default PrizesPage;