import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Italicizer from "../components/Italicizer";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import { getResource } from "../utils/ApiHandler";
import { avatarGenerator } from "../utils/AvatarGeneator";
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

  const avatar = (word) => {
    return avatarGenerator(word);
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
      <div className="bg-white  py-12 ">
        <Navbar
          handleSubmit={handleSubmit}
          navTitle={"My Gallery"}
          onSearchChange={onSearchChange}
          placeholderTitle={"album ..."}
        />
        <hr />

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredData.length > 0 ? (
              filteredData.map((val, ind) => (
                <Link key={ind} to={`${ind + 1}/photos`} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={avatar(`${ind + 1}`)}
                      alt={"avatar"}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <p className="mt-1 text-lg font-light text-gray-900">
                    <Italicizer word={val.title} search={search} />
                  </p>
                </Link>
              ))
            ) : (
              <div>
                <h3>No Result ...</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
