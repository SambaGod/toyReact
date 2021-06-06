import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <Card>
        <CardImg top width='100%' src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle tag='h2'>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments }) => {
  const kommente =
    comments != null
      ? comments.map(komment => {
          return (
            <div key={komment.id} className='mb-5'>
              <p>{komment.comment}</p>
              <p>
                -- {komment.author}{' '}
                <span className='text-secondary'>
                  | {new Date(komment.date).toLocaleDateString('de-de')}{' '}
                </span>
              </p>
            </div>
          );
        })
      : '';
  return <li className='list-group-item'>{kommente}</li>;
};

const DishDetail = props => {
  return (
    <div className='row my-1'>
      <div className='col-md-6 col-12'>
        <RenderDish dish={props.dish} />
      </div>

      <div
        className={`col-md-6 col-12 mt-2 ${
          props.comments == null ? 'd-none' : ''
        }`}
      >
        <ul className='list-group'>
          <h4>Comments</h4>
          <RenderComments comments={props.comments} />
        </ul>
      </div>
    </div>
  );
};

export default DishDetail;
