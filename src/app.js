import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './routers/AppRouter';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import './styles/styles.scss';

 const store = configureStore();
 console.log(store.getState());

 store.dispatch(addExpense({description: 'Water bill'}));
 store.dispatch(addExpense({description: 'Gas bill'}));
 store.dispatch(setTextFilter('water'));
 const state = store.getState();
 const visible = getVisibleExpenses(state.expenses, state.filters)
 console.log(visible);

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
