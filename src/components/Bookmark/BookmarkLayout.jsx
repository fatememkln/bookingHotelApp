import { Outlet } from "react-router-dom";
import Map from "../../Map/Map";
import { useBookmark } from "../context/BookmarkListContext";

function BookmarkLayout() {
  const { bookmarks, isLoading } = useBookmark();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLocations={bookmarks} isLoading={isLoading} />
    </div>
  );
}

export default BookmarkLayout;
