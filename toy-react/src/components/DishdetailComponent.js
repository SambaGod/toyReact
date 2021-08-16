import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const RenderDish = ({ dish }) => {
  const { image, name, description } = dish; 

  if (dish !== null) {
    return (
      <FadeTransform in transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
        <Card>
          <CardImg top width='100%' src={baseUrl + image} alt={name} />
          <CardBody>
            <CardTitle tag='h2'>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments }) => {
  const kommente =
    comments != null
      ? comments.map(komment => {
          const { id, comment, author, date } = komment;
          return (
            <div key={id} className='mb-5'>
              <p>{comment}</p>
              <p>
                -- {author}{' '}
                <span className='text-secondary'>
                  | {new Date(date).toLocaleDateString('de-de')}{' '}
                </span>
              </p>
            </div>
          );
        })
      : '';
  return (
    <Fade in>
      <li className='list-group-item'>{kommente}</li>
    </Fade>
  );
};

const DishDetail = props => {
  const { dish, comments, postComment, isLoading, errMess } = props;

  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/menu'>Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className='row my-1'>
        <div className='col-md-6 col-12'>
          <RenderDish dish={dish} />
        </div>
        <div className='col-md-6 col-12 mt-2'>
        {comments !== null && (
            <ul className='list-group'>
              <h4>Comments</h4>
              <Stagger in>
                <RenderComments comments={comments} postComment={postComment} dishId={dish.id} />
              </Stagger>
            </ul>
        )}
          <CommentForm dishId={dish.id} postComment={postComment} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
