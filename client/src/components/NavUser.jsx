// @flow
import React from 'react';
import LoginPopoverPanel from '../components/LoginPopoverPanel';
import SessionPopoverPanel from '../components/SessionPopoverPanel';
import Popover from '../components/Popover';
import getImageUrl from '../utils/ImageUtils';

type Props = {
  isAuthenticated: boolean,
  login: Function,
  logout: Function,
  user: Object
};

const NavUser = ({ isAuthenticated, login, logout, user }: Props) => {
  if (isAuthenticated) {
    const { avatarUrl } = user;
    return (
      <Popover className="nav-user popover--right">
        <div className="nav-user__trigger">
          <div
            className="nav-user__avatar"
            style={{ backgroundImage: `url(${getImageUrl(avatarUrl)})` }}
          />
          <i className="nav-user__chevron ion-chevron-down" />
        </div>
        <SessionPopoverPanel logout={logout} />
      </Popover>
    );
  }

  return (
    <Popover className="nav-user popover--right">
      <div className="nav-user__trigger">
        <i className="nav-user__icon ion-person" />
        <i className="nav-user__chevron ion-chevron-down" />
      </div>
      <LoginPopoverPanel login={login} />
    </Popover>
  );
};

NavUser.defaultProps = {
  user: null,
};

export default NavUser;
