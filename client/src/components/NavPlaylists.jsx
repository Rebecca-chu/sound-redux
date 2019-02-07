// @flow
import React from 'react';
import NavPlaylistsItem from '../components/NavPlaylistsItem';
import Popover from '../components/Popover';

const defaultProps = {
  navPlaylist: null,
};

type Props = {
  navigateTo: Function,
  navPlaylist: { title?: string } | null,
  navPlaylists: Array<{
    id: number, title: string, tracks: Array<{ id: number, artworkUrl: string }>
  }>,
  showPlaylist: boolean
};

const NavPlaylists = ({ navigateTo, navPlaylist, navPlaylists, showPlaylist }: Props) => (
  <Popover className="nav-playlists">
    <div className={`nav-session__item ${showPlaylist ? 'nav-session__item--active' : ''}`}>
      <div className="nav-session__item__text">
        {navPlaylist ? navPlaylist.title : 'Playlists'}
      </div>
      <i className="nav-session__item__icon ion-ios-arrow-down" />
    </div>
    <div className="nav-playlists__panel">
      {navPlaylists.map(playlist => (
        <NavPlaylistsItem
          key={playlist.id}
          navigateTo={navigateTo}
          playlist={playlist}
        />
      ))}
    </div>
  </Popover>
);

NavPlaylists.defaultProps = defaultProps;

export default NavPlaylists;
