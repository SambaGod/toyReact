import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card onClick={() => onClick(dish.id, dish.comments)}>
      <CardImg top width='100%' src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle tag='h2'>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

const Menu = props => {
  const menu = props.dishes.map(dish => {
    return (
      <div key={dish.id} className='col-md-6 col-sm-12 my-1'>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='row'>{menu}</div>
    </div>
  );
};

export default Menu;
