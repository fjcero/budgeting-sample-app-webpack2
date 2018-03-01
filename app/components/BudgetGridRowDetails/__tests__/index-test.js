import React from 'react';
import renderer from 'react-test-renderer';
import BudgetGridRowDetails from 'components/BudgetGridRowDetails';
import { MemoryRouter } from 'react-router-dom';

it('renders details row correctly', () => {
  const mockTransaction = {
    id: 1,
    description: "Trader Joe's food",
    value: -423.34,
    categoryId: 1,
  };

  const mockCategories = {
    1: 'Groceries',
    2: 'School',
  };

  const tree = renderer.create(
    <MemoryRouter>
      <BudgetGridRowDetails transaction={mockTransaction} categories={mockCategories} />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
