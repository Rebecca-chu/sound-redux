// @flow
import React from 'react';
import Link from '../components/Link';
import NavSearch from '../components/NavSearch';
import NavSession from '../components/NavSession';
import NavUser from '../components/NavUser';
import { SONGS_PATH } from '../constants/RouterConstants';

type Props = {
  fetchNewStreamSongs: Function,
  isAuthenticated: boolean,
  loadNewStreamSongs: Function,
  login: Function,
  logout: Function,
  navigateTo: Function,
  navPlaylist: Object | null,
  navPlaylists: Array<{
    id: number, title: string, tracks: Array<{ id: number, artworkUrl: string }>
  }>,
  newStreamSongs: Array<number>,
  showLikes: boolean,
  showPlaylist: boolean,
  showStream: boolean,
  streamFutureUrl: string,
  user: Object
};

const Nav = ({
  fetchNewStreamSongs,
  isAuthenticated,
  loadNewStreamSongs,
  login,
  logout,
  navigateTo,
  navPlaylist,
  navPlaylists,
  newStreamSongs,
  showLikes,
  showPlaylist,
  showStream,
  streamFutureUrl,
  user,
}: Props) => (
  <div className="nav">
    <div className="nav__inner container">
      <div className="nav__section">
        <i className="nav__logo__icon ion-radio-waves" />
        <Link
          className="nav__logo__text"
          navigateTo={navigateTo}
          path={SONGS_PATH}
        >
          SoundRedux
        </Link>
      </div>
      <div className="nav__section nav__section--session">
        <NavSession
          fetchNewStreamSongs={fetchNewStreamSongs}
          isAuthenticated={isAuthenticated}
          loadNewStreamSongs={loadNewStreamSongs}
          navigateTo={navigateTo}
          navPlaylist={navPlaylist}
          navPlaylists={navPlaylists}
          newStreamSongs={newStreamSongs}
          showLikes={showLikes}
          showPlaylist={showPlaylist}
          showStream={showStream}
          streamFutureUrl={streamFutureUrl}
        />
      </div>
      <div className="nav__section nav__section--search">
        <NavSearch navigateTo={navigateTo} />
      </div>
      <div className="nav__section nav__section--user">
        <NavUser
          isAuthenticated={isAuthenticated}
          login={login}
          logout={logout}
          showPlaylist={showPlaylist}
          user={user}
        />
      </div>
    </div>
  </div>
);

Nav.defaultProps = {
  navPlaylist: null,
  user: null,
};

export default Nav;
