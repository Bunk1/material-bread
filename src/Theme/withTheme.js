import React from 'react';
import ThemeContext from './ThemeContext';

function withTheme(Component) {
  return class extends React.PureComponent {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => {
            return <Component theme={theme} {...this.props} />;
          }}
        </ThemeContext.Consumer>
      );
    }
  };
}

export default withTheme;
