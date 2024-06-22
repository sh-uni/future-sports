import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/Error_boundaries/Error_boundaries.js";

function App() {
    return (
      <div className="App">
        <div>
          <Header />
          <Main />
          <React.StrictMode>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>  
          </React.StrictMode>
        </div>
      </div>
    );
  }
  
  export default App;