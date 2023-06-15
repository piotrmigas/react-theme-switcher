import { useEffect, useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import Container from './components/Container';
import { ThemeProvider } from 'styled-components';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark') as string);
    return savedMode || false;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <div className='theme-switch-wrapper'>
          <label className='theme-switch' htmlFor='checkbox'>
            <input type='checkbox' id='checkbox' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <div className='slider round'></div>
          </label>
          <em>{!darkMode ? 'Enable' : 'Disable'} Dark Mode!</em>
        </div>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </Container>
    </ThemeProvider>
  );
}

export default App;
