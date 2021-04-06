import React from 'react';
import {render} from '@testing-library/react';
import VideoPlayer from './video-player';
import {film} from '../../mocks-test';

describe(`Test VideoPlayer`, () => {

  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

  });

  it(`VideoPlayer should be render correctly`, () => {
    const {container} = render(
        <VideoPlayer isPlaying={true} src={film.videoLink} preview={film.previewImageSrc} />
    );
    expect(container.querySelector(`video`)).toBeInTheDocument();
  });
});
