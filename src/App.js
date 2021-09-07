import React from 'react';
import AboutPage from './pages/AboutPage'
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/Nav"
function App() {
  return (
    <div className="App">
      
      <GlobalStyle/>
      <Nav/>
      <AboutPage/>
    </div>
  );
}

export default App;
