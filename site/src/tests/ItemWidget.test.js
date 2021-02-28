import React from 'react';
import { render, screen } from '@testing-library/react';

import utils from '../state/store/utils_model';
import WindowWidget from '../components/shop/windowwidget';

describe('ItemWidget', () => {
  test('renders ItemWidget component', () => {
    const itemObj = utils.randomItem(null, utils.randomString(8), 2)
    render(<WindowWidget item={itemObj} />)
    // screen.debug();
    const headerElement = screen.getByText(itemObj.name);
    expect(headerElement).toBeInTheDocument();
  });
}); 