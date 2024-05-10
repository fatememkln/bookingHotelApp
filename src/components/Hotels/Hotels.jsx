import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";

function Hotels() {
  const { isLoading, hotels } = useHotels();

  if (isLoading) <Loader />;

  return (
    <div className="searchList">
      <h2>Search Results ({hotels.length})</h2>
      {hotels.map((item) => {
        return (
          <Link
            to={`/hotels/${item.id}&lat=${item.latitude}&lng=${item.longitude}`}
            key={item.id}
          >
            <div className="searchItem">
              <img src={item.picture_url.url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price"> {item.price} €</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Hotels;