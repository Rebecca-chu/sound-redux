// @flow
import React from 'react';

type Props = {
  logout: Function,
};

const SessionPopoverPanel = ({ logout }: Props) => (
  <div
    className="popover__panel__item"
    onClick={logout}
    role="button"
    tabIndex="0"
  >
    Logout
  </div>
);

export default SessionPopoverPanel;
