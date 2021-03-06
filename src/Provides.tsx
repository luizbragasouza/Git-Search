import React from 'react';
import App from './App';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './provider';

import './styles/main.css';

const Providers: React.FC = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
