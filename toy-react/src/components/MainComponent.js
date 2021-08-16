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
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => ({
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
})

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (values) => dispatch(postFeedback(values)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) },
  fetchLeaders: () => { dispatch(fetchLeaders()) },
})

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  
  render() {
    const HomePage = () => {
      const { dishes, promotions, leaders } = this.props;
      return (
        <Home
          dish={dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={dishes.isLoading}
          dishesErrMess={dishes.errMess}
          promotion={promotions.promotions.filter(promotion => promotion.featured)[0]}
          promosLoading={promotions.isLoading}
          promosErrMess={promotions.errMess}
          leader={leaders.leaders.filter(leader => leader.featured)[0]}
          leaderLoading={leaders.isLoading}
          leaderErrMess={leaders.errMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      const { dishes, comments, postComment } = this.props;
      return (
        <DishDetail
          dish={
            dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10) // match.params.{prop} gets the prop from route URI
            )[0]
          }
          isLoading={dishes.isLoading}
          errMess={dishes.errMess}
          comments={comments.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={comments.errMess}
          postComment = {postComment}
        />
      );
    };

    const { dishes, leaders, resetFeedbackForm, location, postFeedback } = this.props;
    return (
      <Fragment>
        <Header />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={300}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route
                exact
                path='/menu'
                component={() => <Menu dishes={dishes} />}
              />
              <Route
                path='/aboutus'
                component={() => <About leaders={leaders.leaders} />}
              />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact postFeedback={postFeedback} resetFeedbackForm={resetFeedbackForm} />} />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// Since we are using Router, it's important to surround this with withRouter()
