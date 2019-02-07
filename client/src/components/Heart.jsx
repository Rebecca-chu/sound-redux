// @flow
import React, { Component } from 'react';
import HeartCount from '../components/HeartCount';
import LoginPopoverPanel from '../components/LoginPopoverPanel';
import Popover from '../components/Popover';

type Props = {
  className: string,
  favoritingsCount: number | null,
  id: number,
  isAuthenticated: boolean,
  liked: boolean,
  login: Function,
  toggleLike: Function
};

class Heart extends Component<Props> {
  static defaultProps = {
    className: '',
    favoritingsCount: null,
  };

  onClick: Function;

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id, liked, toggleLike } = this.props;
    toggleLike(id, !liked);
  }

  render() {
    const { className, favoritingsCount, isAuthenticated, liked, login } = this.props;
    if (!isAuthenticated) {
      return (
        <Popover className={`heart ${className}`} >
          <div className="heart__inner">
            <i className="heart__icon ion-ios-heart" />
            <HeartCount favoritingsCount={favoritingsCount} />
          </div>
          <LoginPopoverPanel login={login} />
        </Popover>
      );
    }

    return (
      <div className={`heart ${liked ? 'heart--liked' : ''} ${className} `}>
        <div
          className="heart__inner"
          onClick={this.onClick}
          role="button"
          tabIndex="0"
        >
          <i className="heart__icon ion-ios-heart" />
          <HeartCount favoritingsCount={favoritingsCount} />
        </div>
      </div>
    );
  }
}

export default Heart;
