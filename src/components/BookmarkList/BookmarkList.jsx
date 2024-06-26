import ReactCountryFlag from "react-country-flag";
import Loader from "../Loader/Loader";
import { useBookmark } from "../context/BookmarkListContext";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/16/solid";

function BookmarkList() {
  const { bookmarks, isLoading, currentBookmark, deleteBookmark } =
    useBookmark();

  const handledelete = async (e, id) => {
    e.preventDefault();
    await deleteBookmark(id);
  };

  if (isLoading) return <Loader />;
  return (
    <div>
      <h2>Bookmark List</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link
              key={item.id}
              to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div
                className={`bookmarkItem ${
                  item.id === currentBookmark?.id ? "current-bookmark" : ""
                }`}
              >
                <div>
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  <strong> {item.cityName} </strong>
                  <span>{item.country}</span>
                </div>
                <button
                  onClick={(e) => handledelete(e, item.id)}
                  className="trash"
                >
                  <TrashIcon />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BookmarkList;
