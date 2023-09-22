import React from 'react';
import Routes from './Routes';
import Header from './layout/Header/index'
import Footer from './layout/Footer/index'

function App() {
  return (
    <section className="bg-gray-900 overflow-hidden">
      <Header />
        <Routes />
      <Footer />
    </section>
  );
}

export default App;
