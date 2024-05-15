import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";

function AddNewBookmark() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlLocation();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div>
      <h2>Bookmark New Location</h2>
      <form className="form">
        <div className="formControl">
          <label htmlFor="CityName">CityName</label>
          <input type="text" name="CityName" id="CityName" />
        </div>
        <div className="formControl">
          <label htmlFor="Country">Country</label>
          <input type="text" name="Country" id="Country" />
        </div>
        <div className="buttons">
          <button onClick={handleBack} className="btn btn--back">
            &larr; Back
          </button>
          <button className="btn btn--primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBookmark;
