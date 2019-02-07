// @flow
import React from 'react';
import type { Node as ReactNode } from 'react';

type Props = {
  children: ReactNode,
  className: string,
  isLoading: boolean,
};

const Loader = ({ children, className, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className={`loader ${className}`}>
        <div className="loader__rects">
          <div className="loader__rect loader__rect--1" />
          <div className="loader__rect loader__rect--2" />
          <div className="loader__rect loader__rect--3" />
          <div className="loader__rect loader__rect--4" />
          <div className="loader__rect loader__rect--5" />
        </div>
      </div>
    );
  }

  return children;
};

Loader.defaultProps = {
  children: null,
  className: '',
};

export default Loader;
