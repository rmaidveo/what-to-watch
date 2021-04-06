
import React from 'react';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {PlayerPage} from './player-page';
import {film, films} from '../../mocks-test';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {createAPI} from '../../services/api';
import {createMemoryHistory} from 'history';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);
describe(`Test video player`, () => {
  const store = mockStore({
    FILMS: {
      films,
      isApplycationReady: true
    },
  });
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`Player should be render correctly`, () => {
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlayerPage
              onExitButtonClick={jest.fn()}
              onLoadFilmById={jest.fn()}
              id={film.id}
            />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Exit`)).toBeInTheDocument();
    expect(screen.getByText(`Transpotting`)).toBeInTheDocument();
    expect(screen.getByText(`Play`)).toBeInTheDocument();
    expect(screen.getByText(`Toggler`)).toBeInTheDocument();
  });

  it(`When the user clicks play the video should be paused`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlayerPage
              onExitButtonClick={jest.fn()}
              onLoadFilmById={jest.fn()}
              id={film.id}
            />
          </Router>
        </redux.Provider>
    );

    const player = container.querySelector(`.player__video`);
    const playButton = container.querySelector(`.player__play`);

    userEvent.click(playButton);
    expect(player.pause());
  });
});
