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

const RenderDish = ({ dish }) => {
  if (dish !== null) {
    const { image, name, description } = dish;
    return (
      <Card>
        <CardImg top width='100%' src={image} alt={name} />
        <CardBody>
          <CardTitle tag='h2'>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments, addComment, dishId}) => {
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
  return <li className='list-group-item'>{kommente}</li>;
};

const DishDetail = props => {
  const { dish, comments, addComment } = props;
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
              <RenderComments comments={comments} addComment={addComment} dishId={dish.id} />
            </ul>
        )}
          <CommentForm dishId={dish.id} addComment={addComment} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
