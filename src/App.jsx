import { useState } from 'react'

import d1 from './assets/desktop/i1.jpg'
import d2 from './assets/desktop/i2.jpg'
import m1 from './assets/mobile/i1.jpg'
import m2 from './assets/mobile/i2.jpg'

import './App.css'

function App() {
  
  const [type, setType] = useState('desktop');

  const [images, setImages] = useState([d1,d2]);

  const onChangeType = () => {
    if (type === 'desktop') {
      setImages([m1,m2]);
    } else {
      setImages([d1,d2]);
    }
    setType(type === 'desktop' ? 'mobile' : 'desktop');
  }

  return (
    <div className='wrapper' style={{ display: "flex", flexDirection: "column", flex: 1, width: "100%" }}>
    
    <div className="header" style={{ width: "100%" }}>
     <h1 >Header</h1>
     </div> 
    
<div>
  <p>hello mike</p>
</div>

    <button onClick={onChangeType}>{type}</button>

    <div className="thumbnails" style={{ display: "flex", gap: 8, minHeight: "calc(100vh - 356px)" }}>
     {images.map((image, index) => (<div key={`image-${index}`}><img style={{ width: 100, height: 100 }} src={image} alt={`image-${index}`} /></div>))}
    </div>
    
    <div className="footer">
     <h1>foooter</h1>     
    </div>
   </div>
  )
}

export default App