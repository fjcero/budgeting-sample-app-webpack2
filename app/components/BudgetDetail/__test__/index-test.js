import React from 'react';
import renderer from 'react-test-renderer';
import BudgetDetails from 'components/BudgetDetails';

it('renders correctly', () => {
  const tree = renderer.create(
    <BudgetDetails />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
