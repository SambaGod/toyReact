import { Component, Fragment } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Main />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
