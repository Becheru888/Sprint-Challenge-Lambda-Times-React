import React from 'react';
import TimesPage from './components/TimesPage/TimesPage';
import Login from './components/Login';
import withAuthentication from '../src/withAuthentication/withAuthentication'

const App = () => {
  return (
    <div className="App">
     <Comp/>
    </div>
  );
}

export default App;

const Comp = withAuthentication(TimesPage)(Login)