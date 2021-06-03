import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Set both dish and comment details to null in the start
      selectedDish: null,
      selectedDishComments: null,
    };
  }

  onDishSelect(dish, comments) {
    // Change the status of both dish and comments received as arguments via onClick function
    this.setState({ selectedDish: dish });
    this.setState({ selectedDishComments: comments });
  }

  render() {
    // Iterate over all items inside dishes and use "dish" as an iteration variable
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className='col-md-6 col-sm-12 my-1'>
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
        {/* Iterated menu items are filled here */}
        <div className='row'>{menu}</div>

        {/* Iterated dish details and comments are filled here in DishDetail component */}
        {/* dish and comments are passed as props to the component */}
        <DishDetail
          dish={this.state.selectedDish}
          comments={this.state.selectedDishComments}
        />
      </div>
    );
  }
}

export default Menu;
