import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AlBUM_URL = "https://jsonplaceholder.typicode.com/albums";

const Photos = () => {
  let param = useParams();
  const [photos, setPhotos] = useState([]);

  const fetchAlbumPhotos = async () => {
    const albumId = param.albumId;
    try {
      const response = await axios.get(`${AlBUM_URL}/${albumId}/photos`);
      const responseData = [...response.data];
      setPhotos([...responseData]);s
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbumPhotos();
  }, []);
  return (
    <div>
      <h3>Photos {param.albumId}</h3>

      <div>
        <ul>
          {photos.map((val,ind) => (
            <li key={ind}>
              <img src={val.thumbnailUrl} alt={val.title+"_img"}/>
              <div>
              {val.title}
              </div>
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Photos;
