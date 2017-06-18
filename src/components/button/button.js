import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touchable from 'rc-touchable';
import classNames from 'classnames';

import './button.css';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
      child.props.children.split('').join(' '));
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return <span>{child}</span>;
  }
  return child;
}

class Button extends Component {
  static defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    disable: false,
    loading: false,
    activeStyle: {}
  }

  render() {
    const { children, size, type, inline, activeStyle, loading, disabled, prefixCls, className, onClick, ...resetProps } = this.props;

    const wrapCls = {
      [className]: className,
      [prefixCls]: true,
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-ghost`]: type === 'ghost',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-inline`]: inline
    }

    const kids = React.Children.map(children, insertSpace);

    return (
      <Touchable
        activeClassName={activeStyle ? `${prefixCls}-active` : undefined}
        activeStyle={activeStyle}
        disabled={disabled}
      >
        <a
          role="button"
          className={classNames(wrapCls)}
          onClick={disabled ? undefined : onClick}
          aria-disabled={disabled}
          {...resetProps}
        >
          {kids}
        </a>
      </Touchable>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'warning', 'ghost']),
  size: PropTypes.oneOf(['large', 'small']),
  activeStyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;