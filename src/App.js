import React from 'react';

import { About, Blog, Features, Footer, Header, Possibility  } from './containers';
import { CTA, Brand, Navbar } from './components';

  
const App = () => {
  return (
    <div>
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <About />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App