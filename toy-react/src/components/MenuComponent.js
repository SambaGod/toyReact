import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderMenuItem = ({ dish }) => {
  const { id, image, name } = dish;
  return (
    <Card>
      <Link to={`/menu/${id}`}>
        <CardImg top width='100%' src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle tag='h2'>{name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = props => {
  const menu = props.dishes.map(dish => {
    return (
      <div key={dish.id} className='col-md-6 col-sm-12 my-1'>
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className='row'>{menu}</div>
    </div>
  );
};

export default Menu;
