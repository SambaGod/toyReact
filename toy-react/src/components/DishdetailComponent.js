import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {
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

  render() {
    const kommente =
      this.props.comments != null
        ? this.props.comments.map(komment => {
            return <div key={komment.id}>{komment.comment}</div>;
          })
        : '';

    return (
      <div className='row'>
        <div className='col-6'>{this.renderDish(this.props.dish)}</div>
        <div className='col-6'>{kommente}</div>
      </div>
    );
  }
}

export default DishDetail;
