import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Masonry from 'masonry-layout';
import Carousel3D from './3DCarousel/Carousel3D.jsx';
import ForChima from './Pages/forchima.jsx';
import ForDani from './Pages/ForDani.jsx';
import ForPort from './Pages/ForPort.jsx';

function App() {




  return (
    <div className=' overflow-hidden'>
      <ForPort />
    </div>
  )
}

export default App
