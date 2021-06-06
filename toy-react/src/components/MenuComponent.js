import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className='col-md-6 col-sm-12 my-1'>
          <Card onClick={() => this.props.onClick(dish.id, dish.comments)}>
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
      </div>
    );
  }
}

export default Menu;
