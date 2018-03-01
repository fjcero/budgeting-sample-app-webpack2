// @flow
import * as React from 'react';
import transactionReducer from 'modules/transactions';
import categoryReducer from 'modules/categories';
import { injectAsyncReducers } from 'store';
import BudgetDetail from 'components/BudgetDetail';

// inject reducers that might not have been originally there
// injectAsyncReducers({
//   transactions: transactionReducer,
//   categories: categoryReducer,
// });

const BudgetDetailContainer = () => (
  <section>
    <BudgetDetail />
  </section>
);

export default BudgetDetailContainer;
