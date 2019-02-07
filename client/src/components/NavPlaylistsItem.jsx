// @flow
import React from 'react';
import Link from '../components/Link';
import { PLAYLIST_PATH } from '../constants/RouterConstants';
import getImageUrl from '../utils/ImageUtils';

type Props = {
  navigateTo: Function,
  playlist: {
    id: number, title: string, tracks: Array<{ id: number, artworkUrl: string }>
  }
};

const NavPlaylistsItem = ({ navigateTo, playlist }: Props) => {
  const { id, title, tracks } = playlist;

  return (
    <Link
      className="nav-playlists__item"
      key={id}
      keys={{ id }}
      navigateTo={navigateTo}
      path={PLAYLIST_PATH}
    >
      <div className="nav-playlists__item__main">
        <div className="nav-playlists__item__title">
          {title}
        </div>
        <div className="nav-playlists__item__meta">
          {`${tracks.length} Song${tracks.length === 1 ? '' : 's'}`}
        </div>
      </div>
      <div className="nav-playlists__item__songs">
        {tracks.slice(0, 5).map(song => (
          <div
            className="nav-playlists__item__song"
            key={song.id}
            style={{ backgroundImage: `url(${getImageUrl(song.artworkUrl)})` }}
          />
        ))}
      </div>
    </Link>
  );
};

export default NavPlaylistsItem;
