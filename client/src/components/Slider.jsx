/* global document */
// @flow
import React, { Component } from 'react';
import offsetLeft from '../utils/DomUtils';

type Props = {
  className: string,
  max: number,
  onChange: Function,
  value: number
};

const prevent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

class Slider extends Component<Props> {
  static defaultProps = {
    className: '',
  };

  onClick: Function
  onMouseDown: Function
  onMouseMove: Function
  onMouseUp: Function
  domNode: HTMLDivElement | null

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.domNode = null;
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  onClick(e: SyntheticMouseEvent<HTMLDivElement>) {
    const { max, onChange } = this.props;
    const percent = (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth;
    onChange(percent * max);
  }

  onMouseDown() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove(e: SyntheticMouseEvent<HTMLElement>) {
    const { domNode, props } = this;
    const { max, onChange } = props;

    if (domNode) {
      const diff = e.clientX - offsetLeft(domNode);
      const percent = Math.min(Math.max(diff / domNode.offsetWidth, 0), 1);
      onChange(percent * max);
    }
  }

  onMouseUp() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  render() {
    const { className, max, value } = this.props;
    const width = `${(value / max) * 100}%`;

    return (
      <div
        className={`slider ${className}`}
        onClick={this.onClick}
        ref={(node) => { this.domNode = node; }}
        role="button"
        tabIndex="0"
      >
        <div className="slider__bar">
          {max > 0
            ? (
              <div className="slider__bar__fill" style={{ width }}>
                <div
                  className="slider__handle"
                  onClick={prevent}
                  onMouseDown={this.onMouseDown}
                  role="button"
                  tabIndex="0"
                />
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default Slider;
