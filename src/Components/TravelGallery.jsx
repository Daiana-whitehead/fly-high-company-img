import React from "react";
import "./styleGallery.css";
import {RViewerTrigger, RViewer} from 'react-viewerjs';
import { getStorage, ref, list } from "firebase/storage";

const pageTokenExample=()=>{
  
  const storage = getStorage();
  const listRef = ref(storage, 'Gallery/png');
  const firstPage = list(listRef, { maxResults: 10 });

  if (firstPage.nextPageToken) {
    const secondPage = list(listRef, {
      maxResults: 10,
      pageToken: firstPage.nextPageToken,
    });
    
  }
};

const TravelGallery=()=>{
  
  return(
    <>
      <nav>
        <div>
          <h1>Fly high company</h1>
        </div>
      </nav>
      <body>
        <h2>Viajes disponibles:</h2>
          <div className="img-travel">
           <RViewer imageUrls={list}>
             <div>
                {firstPage.map((listRef, index)=>{
                  return(
                    <RViewerTrigger index={index}>
                      <img src={pageTokenExample}></img>
                    </RViewerTrigger>
                  )
                })}
              </div>
            </RViewer>
          </div>
      </body>
    </>
  );
}

export default TravelGallery();