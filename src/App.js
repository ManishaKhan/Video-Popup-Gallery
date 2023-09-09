
import './App.css';
import { Media } from './Components';
import {useState } from 'react'
// import { ReactVideoGallery } from './Components/ReactVideoGallery';
// import { VideoCarousel } from './Components/VideoCarousel';




function App() {

  const [file, setFile]=useState(null);

  return (
    <div className="container">
      <h1>Video Galley</h1>
      <div className='media-container'>
        {
          Media.map((file, index)=>(
            <div className="media" key={index} 
            onClick={()=>setFile(file)}>
              {
                <video src={file.url}></video>
                
              }

            </div>
          ))
        }
      </div>

      <div className='popup-media' style={{display:file?'block' : 'none'}}>
          <span onClick={()=>setFile(null)}>&times;</span>
          {
            <video src={file?.url} muted autoPlay controls></video>
          }
      </div>
    </div>
  );
}

export default App;
