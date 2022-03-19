import React from 'react';
import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import { useState } from 'react';

// import { isLoggedIn } from '../utils/AuthService';

function Gallery({ galleryContent }) {
  const [images, setImages] = useState([]);
  console.log(title);
  // const apiUrl =
  //   'https://api.cloudinary.com/v1_1/maggie-schuetz/resources/image';
  // fetch(apiUrl)
  //   .then(res => res.json())
  //   .then(data => setImages(data.results));

  // return (
  //   <div>
  //     <CloudinaryContext cloudName="maggie-schuetz">
  //       {display.map(image => (
  //         <Image cloudName="maggie-schuetz" folder={title}>
  //           <Transformation angle="-45" />
  //           <Transformation effect="trim" angle="45" crop="scale" width="600" />
  //           <Transformation overlay="text:Arial_100:Hello" />
  //         </Image>
  //       ))}
  //     </CloudinaryContext>
  //   // </div>
  // );
}

export default Gallery;
