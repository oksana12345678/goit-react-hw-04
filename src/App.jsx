import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import fetchImages from "./components/fetchImages/fetchImages";
import EndOfImages from "./components/EndOfImages/EndOfImages";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (searchTerm) => {
    try {
      setImages([]);
      setLoading(true);
      setError(false);
      setPage(1);
      setSearchTerm(searchTerm);
      const data = await fetchImages(searchTerm);
      setImages(data.results);
      console.log(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPageData = await fetchImages(searchTerm, page + 1);
      setPage((prevPage) => prevPage + 1);
      setImages((prevImages) => [...prevImages, ...nextPageData.results]);
      const total = nextPageData.total;
      if (images.length >= total) {
        return <EndOfImages />;
      }
      console.log(nextPageData);
    } catch (error) {
      console.error("Error loading more images:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <LoadMoreBtn onChange={handleLoadMore} />
    </>
  );
}

export default App;
