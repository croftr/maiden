import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const desktopThmbnails = import.meta.glob('./assets/1ironMaiden/thumbnails/bak/*.{jpg,jpeg,png,svg}');
  const mobileThumbnails = import.meta.glob('./assets/mobile/*.{jpg,jpeg,png,svg}');

  const [type, setType] = useState('desktop');

  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("use effect ");
    onSetDescktop();
  }, []);

  const onSetDescktop = () => {
    const urls = [];
    for (const image in desktopThmbnails) {
      // Extract the URL using a new URL object (prevents path issues)
      urls.push(new URL(image, import.meta.url).href);
    }

    console.log("check ", urls);

    setImages(urls);
  }

  const onSetMobile = () => {
    const urls = [];
    for (const image in mobileThumbnails) {
      // Extract the URL using a new URL object (prevents path issues)
      urls.push(new URL(image, import.meta.url).href);
    }

    console.log("check ", urls);

    setImages(urls);
  }


  const onChangeType = () => {

    if (type === 'desktop') {
      onSetMobile();
    } else {
      onSetDescktop();
    }
    setType(type === 'desktop' ? 'mobile' : 'desktop');
  }

  return (
    <>
      <div className="headerAndTools">
        <div className='header'>

          <a href="http://horseflaps.com" target="_blank">
            <img src="src/assets/homeImages/banner.jpg" alt="horseflaps.com banner" /></a>


          <h1 >pipeline</h1>
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
