import { useState } from 'react'

import d1 from './assets/desktop/i1.jpg'
import d2 from './assets/desktop/i2.jpg'
import m1 from './assets/mobile/i1.jpg'
import m2 from './assets/mobile/i2.jpg'

import './App.css'

function App() {

  const [type, setType] = useState('desktop');

  const [images, setImages] = useState([d1, d2]);

  const onChangeType = () => {
    if (type === 'desktop') {
      setImages([m1, m2]);
    } else {
      setImages([d1, d2]);
    }
    setType(type === 'desktop' ? 'mobile' : 'desktop');
  }

  return (

    <>
      <div className="headerAndTools">
        <div className='header'>
          <h1 >pipline</h1>
        </div>
        <button onClick={onChangeType}>{type}</button>
      </div>


      <div className="thumbnails">
        {images.map((image, index) => (<div key={`image-${index}`}><img style={{ width: 100, height: 100 }} src={image} alt={`image-${index}`} /></div>))}
      </div>

      <div className="footer">
        <h1>foooter</h1>
      </div>
    </>


  )
}

export default App
