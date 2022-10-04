import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AlBUM_URL = "https://jsonplaceholder.typicode.com/users/1/albums";
const Gallery = () => {
  const navigate = useNavigate();
  const [album, setAlbum] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(AlBUM_URL);
      const responseData = [...response.data];
      setAlbum([...responseData]);
      setFilteredData([...responseData]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = album.filter((val, ind) => {
      const words = val.title.split(" ");

      const filteredWords = words.filter((__val) => {
        return __val.indexOf(search) !== -1;
      });

      const __result = { id: ind, words: filteredWords };

      const filteredIndex = filteredWords.length > 0 ? __result : false;

      return filteredIndex;
    });

    setFilteredData([...result]);
  };

  const boldenSearchWord = (word) => {
    if (search === "") return word;

    const separatedWords = word.split(" ");
    const filteredWords = separatedWords.filter((__val) => {
      return __val.indexOf(search) !== -1;
    });

    const structuredSentence = separatedWords.map((__main,ind) => {
      return (
        <span key={ind}>
          {filteredWords.includes(__main) ? <b> {__main} </b> : __main}
        </span>
      );
    });

    return structuredSentence;
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
        {filteredData.length > 0 ? (
          filteredData.map((val, ind) => (
            <li key={ind}>
              <Link to={`${ind + 1}/photos`}>
                {boldenSearchWord(val.title)}
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
