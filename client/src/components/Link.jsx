// @flow
import React from 'react';
import type { Node as ReactNode } from 'react';
import { compileHash } from '../utils/RouterUtils';

type Props = {
  children: ReactNode,
  className: string,
  onClick: (() => void) | null,
  navigateTo: ({
    path: string,
    keys: { id?: number },
    options?: { s?: string, g?: string, t?: string, q?: string }
  }) => void,
  keys: { id?: number },
  options: { s?: string, g?: string, t?: string, q?: string },
  path: string,
  title: string,
};

class Link extends React.Component<Props> {
  static defaultProps = {
    className: '',
    keys: {},
    onClick: null,
    options: {},
    title: '',
  };

  onClick: Function;

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: SyntheticMouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { keys, navigateTo, onClick, options, path } = this.props;
    navigateTo({ path, keys, options });
    if (typeof onClick === 'function') {
      onClick();
    }
  }

  render() {
    const { children, className, keys, options, path, title } = this.props;

    return (
      <a
        className={className}
        href={`/${compileHash({ path, keys, options })}`}
        onClick={this.onClick}
        title={title}
      >
        {children}
      </a>
    );
  }
}

export default Link;
