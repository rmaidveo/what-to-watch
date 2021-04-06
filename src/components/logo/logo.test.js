import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';
it(`Logo should render correctly`, () => {
  const history = createMemoryHistory();
  const testClass = `classTest`;
  const {getByTestId} = render(
      <Router history={history}>
        <Logo className={testClass} />
      </Router>
  );
  const classElement = getByTestId(testClass);
  expect(classElement).toBeInTheDocument();

});
