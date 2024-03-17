import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const desktopThmbnails = import.meta.glob('./assets/1ironMaiden/thumbnails/bak/*.{jpg,jpeg,png,svg}');
  const mobileThumbnails = import.meta.glob('./assets/1ironMaiden/thumbnails/*.{jpg,jpeg,png,svg}');
  const buttonItems = import.meta.glob('./buttons/*.{jpg,jpeg,png,svg}');

  const [type, setType] = useState('desktop');
  const [images, setImages] = useState([]);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    console.log("use effect ");
    onSetDescktop();

    const items = [];
    for (const button in buttonItems) {
      // Extract the URL using a new URL object (prevents path issues)
      items.push(new URL(button, import.meta.url).href);
      // items.push(new URL(image, import.meta.url).href);
    }

    console.log("check ", items);
    setButtons(items);

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
        </div>
        <div className="buttons__wrapper">          
        {buttons.sort().map((image, index) => (<div key={`image-${index}`}><img src={image} alt={`image-${index}`} /></div>))}
      </div>
      </div>

      
      <div className="thumbnails">
        {images.map((image, index) => (<div key={`image-${index}`}><img style={{ height: "100%", width: "100%" }} src={image} alt={`image-${index}`} /></div>))}
      </div>

      <div className="footer">
        <h1>foooter</h1>
      </div>
    </>


  )
}

export default App
