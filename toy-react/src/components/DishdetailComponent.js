import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {
  // renderDish simply takes dish as an argument and fills in the card below
  renderDish(dish) {
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
  }

  renderComments() {
    // 
  }

  render() {
    const kommente =
      this.props.comments != null
        ? this.props.comments.map(komment => {
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

    return (
      <div className='row my-1'>
        {/* Dish details */}
        <div className='col-md-6 col-12'>
          {this.renderDish(this.props.dish)}
        </div>

        {/* Comments */}
        <div className='col-md-6 col-12'>
          {/* show the heading if comments are not empty */}
          <h4 className={`mt-2 ${this.props.comments == null ? 'd-none' : ''}`}>
            Comments
          </h4>
          {kommente}
        </div>
      </div>
    );
  }
}

export default DishDetail;
