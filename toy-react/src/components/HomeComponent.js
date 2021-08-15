import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return (
      <Loading />
    );
  }
  else if (errMess) {
    return (
      <h4>{errMess}</h4>
    );
  }
  else {
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
}

function Home(props) {
  const { dish, promotion, leader, dishesLoading, dishesErrMess } = props;
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          <RenderCard item={dish} isLoading={dishesLoading} errMess={dishesErrMess} />
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
