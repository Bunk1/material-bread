import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@components';

import { Ripple, Hoverable } from '../../../src';
class Section extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
  };

  state = {
    color: 'transparent',
  };

  handleHover(toggle) {
    this.setState({
      backgroundColor: toggle ? 'rgba(0,0,0,.12)' : 'rgba(0,0,0,0)',
    });
  }

  render() {
    const { text, img, href, imgWidth, width, height, platforms } = this.props;
    const { backgroundColor } = this.state;
    return (
      <Hoverable
        onHoverIn={() => this.handleHover(true)}
        onHoverOut={() => this.handleHover(false)}>
        <a href={href} style={{ textDecoration: 'none', color: 'black' }}>
          <Ripple
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 16,
              marginRight: 16,
              height: height ? height : 175,
              width: width ? width : 175,
              backgroundColor,
              borderRadius: 10,
              marginBottom: 16,
              padding: 16,
            }}
            rippleContainerBorderRadius={10}>
            <img
              src={img}
              style={{
                maxHeight: 120,
                maxWidth: '100%',
                margin: 'auto',
                marginBottom: 8,
              }}
            />
            <h4
              style={{
                margin: 0,
                marginTop: 4,
                letterSpacing: 1,
                fontWeight: 500,
                textAlign: 'center',
                color: 'black',
                fontSize: 18,
              }}>
              {text}
            </h4>
            <p style={{ fontSize: 14 }}>
              {platforms &&
                platforms.map((platform, index) => (
                  <span key={index} style={{ color: '#666666' }}>
                    {platform}
                  </span>
                ))}
            </p>
          </Ripple>
        </a>
      </Hoverable>
    );
  }
}

export default Section;
