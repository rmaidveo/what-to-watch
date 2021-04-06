import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import ShowMoreButton from './show-more-button';
import userEvent from '@testing-library/user-event';


const mockStore = configureStore({});
describe(`Test Autorized`, () => {

  it(`ShowMoreButton should render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore({});
    const onShowMoreButtonClick = jest.fn();

    const {getByText} = render(
        <Provider store={store}>
          <Router history={history}>
            <ShowMoreButton onClick={onShowMoreButtonClick} />
          </Router>
        </Provider>
    );
    const button = getByText(`Show more`);
    expect(button).toBeInTheDocument();
  });

  it(`ShowMoreButton should render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore({});
    const onShowMoreButtonClick = jest.fn();

    render(
        <Provider store={store}>
          <Router history={history}>
            <ShowMoreButton onButtonClick={onShowMoreButtonClick} />
          </Router>
        </Provider>
    );
    userEvent.click(screen.getByTestId(/show-more/i));
    expect(onShowMoreButtonClick).toBeCalled();
  });
});
