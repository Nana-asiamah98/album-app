import axios from "axios";
import { React, useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const AlBUM_URL = "https://jsonplaceholder.typicode.com/users/1/albums";
const Gallery = () => {
  const [album, setAlbum] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(AlBUM_URL);
      const responseData = [...response.data];
      console.log(responseData);
      setAlbum([...responseData]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {album.length > 0 ? (
          album.map((val, ind) =>(
            <li key={ind}>
                <Link to={`${ind+1}/photos`}>{val.title}</Link>
            </li>
          ))
        ) : (
          <p>
            <span>No Value</span>
          </p>
        )}
      </ul>
    </div>
  );
};

export default Gallery;
