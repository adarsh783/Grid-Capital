import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
import LayoutSignin from './layouts/LayoutSignin';

// Views 
import Home from './views/Home';
import Secondary from './views/Secondary';
import Login from './views/Login';
import Blog from './views/Blog';
import Blogdetail from './views/Blogdetail';
import Signup from './views/Signup';
import Roadmap from './components/sections/Roadmap';
import Faq from './components/sections/Faq';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/secondary" component={Secondary} layout={LayoutAlternative} />
            <AppRoute exact path="/login" component={Login} layout={LayoutSignin} />
            <AppRoute exact path="/signup" component={Signup} layout={LayoutSignin} />
            <AppRoute exact path="/faq" component={Faq} layout={LayoutAlternative} />
            <AppRoute exact path="/blog" component={Blog} layout={LayoutAlternative} />
            <AppRoute exact path="/blogdetail" component={Blogdetail} layout={LayoutAlternative} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);