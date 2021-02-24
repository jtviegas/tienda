import React from 'react';
import { render, screen } from '@testing-library/react';

import utils from '../state/store/utils_model';
import ItemWidget from '../components/ItemWidget';

describe('ItemWidget', () => {
  test('renders ItemWidget component', () => {
    const itemObj = utils.randomItem(null, utils.randomString(8), 2)
    render(<ItemWidget item={itemObj} />)
    // screen.debug();
    const headerElement = screen.getByText(itemObj.name);
    expect(headerElement).toBeInTheDocument();
  });
}); 