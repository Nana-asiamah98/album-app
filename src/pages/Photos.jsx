import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getResource } from "../utils/ApiHandler";
import SearchInput from "../components/SearchInput";
import { filteredWords } from "../utils/FilterWords";
import Italicizer from "../components/Italicizer";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const AlBUM_URL = "https://jsonplaceholder.typicode.com/albums";

const Photos = () => {
  let param = useParams();
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState({});

  const fetchAlbumPhotos = async () => {
    const albumId = param.albumId;
    try {
      const URL = `${AlBUM_URL}/${albumId}/photos`;
      const response = await getResource(URL);
      setPhotos([...response]);
      setFilteredData([...response]);
    } catch (error) {}
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

  const displayModal = (photo) => {
    setShowModal(!showModal);
    setImage(photo);
  };

  const closeModal = () => {
    setShowModal(!showModal);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    fetchAlbumPhotos();
  }, []);
  return (
    <div>
      <div className="bg-white  py-12 ">
        <Navbar
          handleSubmit={handleSubmit}
          navTitle={`Photos For Album ${param.albumId}`}
          onSearchChange={onSearchChange}
          placeholderTitle={"photos ..."}
        />
        <hr />
      </div>

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredData.length > 0 ? (
            filteredData.map((val, ind) => (
              <Link
                key={ind}
                to={`#0`}
                onClick={() => displayModal(val)}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={val.thumbnailUrl}
                    alt={val.title + "_img"}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <span
                  data-testid="phototext"
                  className="mt-1 text-lg font-light text-gray-900"
                >
                  <Italicizer word={val.title} search={search} />
                </span>
              </Link>
            ))
          ) : (
            <div>
              <h3>No Result ...</h3>
            </div>
          )}
        </div>
      </div>
      {showModal ? (
        <Modal image={image} showModal={showModal} closeModal={closeModal} />
      ) : null}
    </div>
  );
};

export default Photos;
