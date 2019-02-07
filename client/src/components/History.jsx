// @flow
import React from 'react';
import HistorySong from '../components/HistorySong';

type Props = {
  isPlaying: boolean,
  navigateTo: Function,
  playlist: string,
  playingSongId: number | null,
  playSong: Function,
  showHistory: boolean,
  songs: Array<{
    artworkUrl?: string,
    id?: number,
    title?: string,
    user: { id?: number, username?: string }
  }>,
  toggleShowHistory: Function
};

const History = ({
  isPlaying,
  navigateTo,
  playingSongId,
  playlist,
  playSong,
  showHistory,
  songs,
  toggleShowHistory,
}: Props) => {
  if (!showHistory) {
    return null;
  }

  return (
    <div className="history">
      <div
        className="history__bg"
        onClick={toggleShowHistory}
        role="button"
        tabIndex="0"
      />
      <div className="history__main">
        <div className="history__header">
          <div className="history__header__title">
            Recently Played
          </div>
          <div
            className="history__header__button"
            onClick={toggleShowHistory}
            role="button"
            tabIndex="0"
          >
            <i className="history__header__button__icon ion-android-close" />
          </div>
        </div>
        <div className="history__body">
          {songs.map((song, i) => (
            <HistorySong
              index={i}
              isActive={playingSongId === song.id}
              isPlaying={isPlaying}
              key={song.id}
              navigateTo={navigateTo}
              playlist={playlist}
              playSong={playSong}
              song={song}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

History.defaultProps = {
  playingSongId: null,
};

export default History;
