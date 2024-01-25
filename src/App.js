import './App.css';
// import BackgroundImage from './BackgroundImage'
import Backgroundstart from './BackGroundStart'
import { useState } from 'react';
import image1 from './Images/hQuSTGC.jpg'
import image2 from './Images/th.jpeg'
import image3 from './Images/wp2552690.jpg'
import { Route,Routes } from 'react-router-dom';



function App() {

  const [images, setImages] = useState([
    {
      id: 1,
      src : `${image1}`,
      alt : "image1",
      text : "First Image"
    },
    {
      id: 2,
      src : `${image2}`,
      alt : "image2",
      text : "Second Image"
    },
    {
      id: 3,
      src : `${image3}`,
      alt : "image3",
      text : "Third Image"
    }
  ])

  const [imagesbg, setImagesbg] = useState('')
  const [text, setText] = useState('Click on image')
  const bgchnage = (id) => {
      const imagedata = images.find(image => (image.id) === id)
      setImagesbg(imagedata.src);

      setText(imagedata.text)
  }

  return (
    <div className="App">
      <Routes>
      <Route path='*' element={<Backgroundstart 
              images ={images}
              setImages = {setImages}
              bgchnage = {bgchnage}
              imagesbg = {imagesbg}
              text = {text}
            />}/>
        {/* <Route path='/:id' element={<BackgroundImage 
              images ={images}
              setImages = {setImages}
            />}/> */}
      </Routes>
    </div>
  );
}

export default App;
