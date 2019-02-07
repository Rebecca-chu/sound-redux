// @flow
import React from 'react';
import Link from '../components/Link';
import NavPlaylists from '../components/NavPlaylists';
import NavStream from '../components/NavStream';
import { SONGS_PATH } from '../constants/RouterConstants';

type Props = {
  fetchNewStreamSongs: Function,
  isAuthenticated: boolean,
  loadNewStreamSongs: Function,
  navigateTo: Function,
  navPlaylist: Object | null,
  navPlaylists: Array<Object>,
  newStreamSongs: Array<number>,
  showLikes: boolean,
  showPlaylist: boolean,
  showStream: boolean,
  streamFutureUrl: string
};

const NavSession = ({
  fetchNewStreamSongs,
  isAuthenticated,
  loadNewStreamSongs,
  navigateTo,
  navPlaylist,
  navPlaylists,
  newStreamSongs,
  showLikes,
  showPlaylist,
  showStream,
  streamFutureUrl,
}: Props) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="nav-session">
      <NavStream
        fetchNewStreamSongs={fetchNewStreamSongs}
        loadNewStreamSongs={loadNewStreamSongs}
        navigateTo={navigateTo}
        newStreamSongs={newStreamSongs}
        showStream={showStream}
        streamFutureUrl={streamFutureUrl}
      />
      <Link
        className={`nav-session__item ${showLikes ? 'nav-session__item--active' : ''}`}
        navigateTo={navigateTo}
        path={SONGS_PATH}
        options={{ s: 'likes' }}
      >
        Likes
      </Link>
      <NavPlaylists
        navigateTo={navigateTo}
        navPlaylist={navPlaylist}
        navPlaylists={navPlaylists}
        showPlaylist={showPlaylist}
      />
    </div>
  );
};

NavSession.defaultProps = {
  navPlaylist: null,
};

export default NavSession;
