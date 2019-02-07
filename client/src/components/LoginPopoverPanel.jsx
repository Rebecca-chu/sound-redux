// @flow
import React from 'react';

type Props = {
  login: Function
};

const LoginPopoverPanel = ({ login }: Props) => (
  <div
    className="button button--orange button--block button--margin"
    onClick={login}
    role="button"
    tabIndex="0"
  >
    Sign into SoundCloud
  </div>
);

export default LoginPopoverPanel;
