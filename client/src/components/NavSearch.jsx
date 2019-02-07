/* global document, HTMLElement */
/* @flow */
import React, { Component } from 'react';
import { SONGS_PATH } from '../constants/RouterConstants';

type Props = {
  navigateTo: Function,
};

class NavSearch extends Component<Props> {
  onKeyDown: Function;
  onKeyPress: Function;
  input: HTMLInputElement | null;

  constructor(props: Props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.input = null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.keyCode === 191) {
      const insideInput = (e.target instanceof HTMLElement) ?
        e.target.tagName.toLowerCase().match(/input|textarea/) : false;

      if (!insideInput) {
        e.preventDefault();
        if (this.input) { this.input.focus(); }
      }
    }
  }

  onKeyPress(e: KeyboardEvent) {
    if (e.charCode === 13) {
      const { navigateTo } = this.props;
      const value = (e.currentTarget instanceof HTMLInputElement) ?
        e.currentTarget.value.trim() : '';

      if (value !== '') {
        navigateTo({
          keys: {},
          path: SONGS_PATH,
          options: { q: value },
        });
      }
    }
  }

  render() {
    return (
      <div className="nav-search">
        <i className="nav-search__icon ion-search" />
        <input
          ref={(node) => { this.input = node; }}
          className="nav-search__input"
          placeholder="SEARCH"
          onKeyPress={this.onKeyPress}
          type="text"
        />
      </div>
    );
  }
}

export default NavSearch;
