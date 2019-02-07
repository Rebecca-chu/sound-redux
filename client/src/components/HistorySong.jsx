// @flow
import React, { Component } from 'react';
import ArtworkPlay from '../components/ArtworkPlay';
import Link from '../components/Link';
import { SONG_PATH, USER_PATH } from '../constants/RouterConstants';
import getImageUrl from '../utils/ImageUtils';

type Props = {
  index: number,
  isActive: boolean,
  isPlaying: boolean,
  navigateTo: Function,
  playlist: string,
  playSong: Function,
  song: {
    artworkUrl?: string,
    id?: number,
    title?: string,
    user: { id?: number, username?: string }
  }
};

class HistorySong extends Component<Props> {
  onClick: Function;

  render() {
    const { index, isActive, isPlaying, navigateTo, playlist, playSong, song } = this.props;
    const { artworkUrl, id, title, user } = song;
    const { username } = user;

    return (
      <div
        className="history__song"
        onClick={this.onClick}
        role="button"
        tabIndex="0"
      >
        <div
          className="history__song__artwork"
          style={{ backgroundImage: `url(${getImageUrl(artworkUrl)})` }}
        >
          <ArtworkPlay
            index={index}
            isActive={isActive}
            isPlaying={isPlaying}
            playlist={playlist}
            playSong={playSong}
          />
        </div>
        <div className="history__song__main">
          <Link
            className="history__song__title"
            keys={{ id }}
            navigateTo={navigateTo}
            path={SONG_PATH}
          >
            {title}
          </Link>
          <Link
            className="history__song__username"
            keys={{ id: user.id }}
            navigateTo={navigateTo}
            path={USER_PATH}
          >
            {username}
          </Link>
        </div>
      </div>
    );
  }
}

export default HistorySong;
