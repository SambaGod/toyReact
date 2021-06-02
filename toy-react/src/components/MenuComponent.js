import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      selectedDishComments: null,
    };
  }

  onDishSelect(dish, comments) {
    this.setState({ selectedDish: dish });
    this.setState({ selectedDishComments: comments });
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className='col-md-6 col-sm-12 my-5'>
          <Card onClick={() => this.onDishSelect(dish, dish.comments)}>
            <CardImg top width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle tag='h2'>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='row'>{menu}</div>
        <DishDetail
          dish={this.state.selectedDish}
          comments={this.state.selectedDishComments}
        />
      </div>
    );
  }
}

export default Menu;
