import { useBookmark } from "../context/BookmarkListContext";

function SingleBookmark() {
    const { bookmarks, isLoading, currentBookmark } = useBookmark();
  return <div>SingleBookmark</div>;
}

export default SingleBookmark;
