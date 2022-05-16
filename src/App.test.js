import Input from './components/input/input.component';
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { createStore } from 'redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { dataReducer } from "./store/data/data.reducer";


describe('Test <Input/>', () => {
  afterEach(cleanup);
  test('Test reducer render Input', () => {

    const { getByTestId, getByText, container, } = render(<Input />);

    expect(getByText('1').textContent).toBe('1');

  });
});
