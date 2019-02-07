/* global document, HTMLAudioElement */
/* @flow */
import React, { Component } from 'react';

type Props = {
  index: number,
  isActive: boolean,
  isPlaying: boolean,
  playlist: string,
  playSong: Function
};

class ArtworkPlay extends Component<Props> {
  playSong: Function;
  togglePlay: Function;

  constructor() {
    super();
    this.playSong = this.playSong.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  playSong() {
    const { index, playlist, playSong } = this.props;
    playSong(playlist, index);
  }

  togglePlay() {
    const { isPlaying } = this.props;
    const audioElement = document.getElementById('audio');

    if (audioElement instanceof HTMLAudioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    }
  }

  render() {
    const { isActive, isPlaying } = this.props;
    return (
      <div
        className={`artwork-play ${isActive ? 'artwork-play--active' : ''}`}
        role="button"
        tabIndex="0"
        onClick={isActive ? this.togglePlay : this.playSong}
      >
        <i className={`artwork-play__icon ion-${isActive && isPlaying ? 'radio-waves' : 'ios-play'}`} />
      </div>
    );
  }
}

export default ArtworkPlay;
