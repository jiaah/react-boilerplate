import React from 'react';
import Spinner from './src/components/Spinner';

class AsyncRoute extends React.Component {
  state = {
    loaded: false,
  };

  component = null;

  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <Spinner />;
  }
}

export default AsyncRoute;
