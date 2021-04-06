
import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {film} from '../../mocks-test';
import {PlayerPage} from './player-page';
const defaultProps = {
  match: {params: {id: 1}},
};

describe(`Test video player`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`Player should be render correctly`, () => {
    render(
        <PlayerPage
          activeFilm={film}
          onExitButtonClick={jest.fn()}
          onLoadFilmById={jest.fn()}
          {...defaultProps}
        />
    );

    expect(screen.getByText(`Exit`)).toBeInTheDocument();
    expect(screen.getByText(`Transpotting`)).toBeInTheDocument();
    expect(screen.getByText(`Play`)).toBeInTheDocument();
    expect(screen.getByText(`Toggler`)).toBeInTheDocument();
  });

  it(`When the user clicks play the video should be paused`, () => {
    const {container} = render(
        <PlayerPage
          activeFilm={film}
          onExitButtonClick={jest.fn()}
          onLoadFilmById={jest.fn()}
          {...defaultProps}
        />
    );

    const player = container.querySelector(`.player__video`);
    const playButton = container.querySelector(`.player__play`);

    userEvent.click(playButton);
    expect(player.pause());
  });
});
