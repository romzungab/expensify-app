import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/AppRouter';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import './styles/styles.scss';

 const store = configureStore();
 console.log(store.getState());

 store.dispatch(addExpense({description: 'Water bill', amount:45000, createdAt: 12000}));
 store.dispatch(addExpense({description: 'Gas bill', createdAt:1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));

 const state = store.getState();
 const visible = getVisibleExpenses(state.expenses, state.filters)
 console.log(visible);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
