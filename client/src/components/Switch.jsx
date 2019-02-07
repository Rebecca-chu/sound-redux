// @flow
import React from 'react';

type Props = {
  args: Array<any>,
  on: boolean,
  onClick: Function,
};

class Switch extends React.Component<Props> {
  static defaultProps = {
    args: [],
  };

  onClick: Function;

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { args, onClick } = this.props;
    onClick(...args);
  }

  render() {
    const { on } = this.props;
    return (
      <div
        className={`switch ${on ? 'switch--on' : ''}`}
        onClick={this.onClick}
        role="button"
        tabIndex="0"
      >
        <div className="switch__button" />
      </div>
    );
  }
}

export default Switch;
