/* global window, document, HTMLBodyElement */
// @flow
import React, { Component } from 'react';
import type { Node as ReactNode } from 'react';

type Props = {
  args: Array<any>,
  children: ReactNode,
  className: string,
  onScroll: Function
};

class InfiniteScroll extends Component<Props> {
  static defaultProps = {
    args: [],
    className: '',
  }

  onScroll: Function

  constructor(props: Props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (document.body instanceof HTMLBodyElement) {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
        const { args, onScroll } = this.props;
        onScroll(...args);
      }
    }
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

export default InfiniteScroll;
