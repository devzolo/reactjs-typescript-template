import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;
