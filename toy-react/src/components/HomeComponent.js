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
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

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
      <FadeTransform in transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
        <Card>
          <CardImg src={baseUrl + image} alt={name} />
          <CardBody>
            <CardTitle>
              <strong>{name}</strong>
            </CardTitle>
            {designation && <CardSubtitle>{designation}</CardSubtitle>}
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
}

function Home(props) {
  const { 
    dish,
    promotion,
    leader,
    dishesLoading,
    dishesErrMess,
    promosLoading,
    promosErrMess,
    leaderLoading,
    leaderErrMess } = props;
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          <RenderCard item={dish} isLoading={dishesLoading} errMess={dishesErrMess} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={promotion} isLoading={promosLoading} errMess={promosErrMess} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={leader} isLoading={leaderLoading} errMess={leaderErrMess} />
        </div>
      </div>
    </div>
  );
}
export default Home;
