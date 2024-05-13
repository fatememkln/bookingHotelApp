import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

function LocationList() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");

  if (isLoading)
    return (
      <div className="location-list">
        <Loader />
      </div>
    );
  return (
    <div className="nearbyLocation">
      <h2>NearBy Location</h2>
      <div className="locationList">
        {data.map((item) => {
          return (
            <div className="locationItem" key={item.id}>
              <img src={item.thumbnail_url} alt={item.name} />
              <div className="locationItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.smart_name}</p>
                <p className="price"> {item.price} €</p>
                <span>night</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationList;
