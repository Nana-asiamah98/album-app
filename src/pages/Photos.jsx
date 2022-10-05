import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getResource } from "../utils/ApiHandler";
import SearchInput from "../components/SearchInput";
import { filteredWords } from "../utils/FilterWords";
import Italicizer from "../components/Italicizer";

const AlBUM_URL = "https://jsonplaceholder.typicode.com/albums";

const Photos = () => {
  let param = useParams();
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchAlbumPhotos = async () => {
    const albumId = param.albumId;
    try {
      const URL = `${AlBUM_URL}/${albumId}/photos`;
      const response = await getResource(URL);
      setPhotos([...response]);
      setFilteredData([...response]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = filteredWords(photos, search);
    setFilteredData([...result]);
  };

  const onSearchChange = (value) => {
    setSearch(value);
    const result = filteredWords(photos, search);
    setFilteredData([...result]);
  };

  useEffect(() => {
    fetchAlbumPhotos();
  }, []);
  return (
    <div>
      <h1>Photos for Album {param.albumId}</h1>
      <SearchInput handleSubmit={handleSubmit} search={onSearchChange} />

      <div>
        <ul>
          {filteredData.map((val, ind) => (
            <li key={ind}>
              <img src={val.thumbnailUrl} alt={val.title + "_img"} />
              <div>
                <Italicizer word={val.title} search={search} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Photos;
