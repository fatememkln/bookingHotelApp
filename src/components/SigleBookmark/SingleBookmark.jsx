import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useBookmark } from "../context/BookmarkListContext";
import { useNavigate, useParams } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentBookmark, isLoadingBookmark, getBookmark } = useBookmark();

  useEffect(() => {
    getBookmark(id);
  }, [id, getBookmark]);

  if (isLoadingBookmark || !currentBookmark) return <Loader />;
  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn btn--back">
        &larr; Back
      </button>
      <div className="singleBookmark">
        <h2>{currentBookmark.cityName}</h2>
        <div>
          <ReactCountryFlag svg countryCode="currentBookmark.countryCode" />
          <strong> {currentBookmark.cityName} </strong>
          <span>{currentBookmark.country}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleBookmark;
