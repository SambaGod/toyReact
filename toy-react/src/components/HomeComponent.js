import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

function RenderCard({ item }) {
  const { image, name, designation, description } = item;
  return (
    <Card>
      <CardImg src={image} alt={name} />
      <CardBody>
        <CardTitle>
          <strong>{name}</strong>
        </CardTitle>
        {designation && <CardSubtitle>{designation}</CardSubtitle>}
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  const { dish, promotion, leader } = props;
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          <RenderCard item={dish} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={promotion} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
}
export default Home;
