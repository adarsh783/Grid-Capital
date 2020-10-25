import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

class Cta extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      split,
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
      bottomDivider && 'has-bottom-divider',
      split && 'cta-split'
    );

    return (
     <section
        {...props}
        className={outerClasses}
      >
        <div className="container" style={{backgroundColor:'#8e79fc'}}>
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
                <Button color="primary" style={{fontSize:'20px'}}>Go</Button>
              </Input>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;