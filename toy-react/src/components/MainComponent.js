import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      selectedDishComments: null,
    };
  }

  onDishSelect(dishId, comments) {
    this.setState({ selectedDish: dishId });
    this.setState({ selectedDishComments: comments });
  }

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand>This is my React Toy Project</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId, dishId.comments)}
        />
        <DishDetail
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
          comments={this.state.selectedDishComments}
        />
      </div>
    );
  }
}

export default Main;
