import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../Theme/ThemeContext';
import mergeTheme from '../Theme/mergeTheme';

export default class BreadProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.object,
  };

  static defaultProps = {
    value: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: mergeTheme(props.value),
    };
  }

  componentDidUpdate(prevProps) {
    const { value: theme } = this.props;
    const { value: prevTheme } = prevProps;
    if (theme !== prevTheme) {
      this.setState({ theme: mergeTheme(theme) });
    }
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  }
}
