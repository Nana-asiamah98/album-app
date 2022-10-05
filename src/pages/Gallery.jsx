import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Italicizer from "../components/Italicizer";
import SearchInput from "../components/SearchInput";
import { getResource } from "../utils/ApiHandler";
import { filteredWords } from "../utils/FilterWords";

const AlBUM_URL = "https://jsonplaceholder.typicode.com/users/1/albums";
const Gallery = () => {
  const [album, setAlbum] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await getResource(AlBUM_URL);
      setAlbum([...response]);
      setFilteredData([...response]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = filteredWords(album, search);
    setFilteredData([...result]);
  };

  const onSearchChange = (value) => {
    setSearch(value);
    const result = filteredWords(album, search);
    setFilteredData([...result]);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <SearchInput handleSubmit={handleSubmit} search={onSearchChange} />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((val, ind) => (
            <li key={ind}>
              <Link to={`${ind + 1}/photos`}>
                <Italicizer word={val.title} search={search} />
              </Link>
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

export default Gallery;
