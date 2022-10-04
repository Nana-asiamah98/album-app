import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AlBUM_URL = "https://jsonplaceholder.typicode.com/users/1/albums";
const SearchPhotos = () => {
  const navigate = useNavigate();
  const [album, setAlbum] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The searched word => ", search);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search For Image"
        />
      </form>
      <ul>
        {album.length > 0 ? (
          album.map((val, ind) => (
            <li key={ind}>
              <Link to={`${ind + 1}/photos`}>{val.title}</Link>
            </li>
          ))
        ) : (
          <p>
            <span>Loading..</span>
          </p>
        )}
      </ul>
    </div>
  );
};

export default SearchPhotos;
