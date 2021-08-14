import { Component, Fragment } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {
  constructor(props){
    super (props);
  }
  render() {
    const HomePage = () => {
      const { dishes, promotions, leaders } = this.props;
      return (
        <Home
          dish={dishes.filter(dish => dish.featured)[0]}
          promotion={promotions.filter(promotion => promotion.featured)[0]}
          leader={leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      const { dishes, comments } = this.props;
      return (
        <DishDetail
          dish={
            dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10) // match.params.{prop} gets the prop from route URI
            )[0]
          }
          comments={comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    const { dishes, leaders } = this.props;
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={dishes} />}
          />
          <Route
            path='/aboutus'
            component={() => <About leaders={leaders} />}
          />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(connect((mapStateToProps), {})(Main));
// Since we are using Router, it's important to surround this with withRouter()
