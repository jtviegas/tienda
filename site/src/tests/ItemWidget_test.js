import React from 'react';
import { render, screen } from '@testing-library/react';

import utils from '../services/store/utils_model';
import ItemSmallWidget from '../components/shop/wgt_item_small';

describe('ItemWidget', () => {
  test('renders ItemWidget component', () => {
    const itemObj = utils.randomItem(null, utils.randomString(8), 2)
    render(<ItemSmallWidget item={itemObj} />)
    // screen.debug();
    const headerElement = screen.getByText(itemObj.name);
    expect(headerElement).toBeInTheDocument();
  });
}); 