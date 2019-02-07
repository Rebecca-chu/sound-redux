// @flow
import React from 'react';
import { addCommas } from '../utils/NumberUtils';

type Props = {
  favoritingsCount: number | null
};

const HeartCount = ({ favoritingsCount }: Props) => {
  if (favoritingsCount) {
    return (
      <div className="heart__count">
        {addCommas(favoritingsCount)}
      </div>
    );
  }

  return null;
};

HeartCount.defaultProps = {
  favoritingsCount: null,
};

export default HeartCount;
