import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Grid from '@material-ui/core';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Clients extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container" style={{backgroundColor:'#58678C'}}>
          <div
            className={innerClasses}
          >
            <ul className="list-reset">
              <li className="reveal-rotate-from-left" style={{color:'#ffffff',fontSize:'30px'}}>
                Register today to get an exclusive early beta access.For the 1,000 users only.
              </li>
              <li className="reveal-rotate-from-left" style={{color:'#ffffff'}}>
              <Input
                type="email"
                label="This is a label"
                formGroup="desktop"
                labelHidden>
                <Button color="primary" style={{fontSize:'20px',backgroundColor:'#58678C'}}>Go</Button>
              </Input>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;