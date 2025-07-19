'use client';
import { Provider } from 'react-redux';
import { store } from './lib/store'
import PortfolioApp from './components/PortfolioApp';

export default function Home() {
  return (
    <Provider store={store}>
      <PortfolioApp />
    </Provider>
  );
}