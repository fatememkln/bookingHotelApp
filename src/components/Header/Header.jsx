import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div>Home</div>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            type="text"
            className="headerSearchInput"
            placeholder="Where to go?"
            name="destination"
            onChange={(e) => setDestination(e.target.value)}
          />
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown" onClick={() => setOpenDate(!openDate)}>
            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}
          </div>
          {openDate && (
            <DateRange
              ranges={date}
              className="date"
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              moveRangeOnFirstSelection={true}
            />
          )}
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <div id="optionDropDown" onClick={() => setOpenOption(!openOption)}>
            {options.adult} adult &bull; {options.children} children &bull;{" "}
            {options.room} room
          </div>
          {openOption && (
            <GuestOptionList
              options={options}
              handleOptions={handleOptions}
              setOpenOption={setOpenOption}
            />
          )}
        </div>

        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

function GuestOptionList({ options, handleOptions, setOpenOption }) {
  const optionsRef = useRef("");
  useOutsideClick(optionsRef, "optionDropDown", () => setOpenOption(false));
  return (
    <div className="guestOptions" ref={optionsRef}>
      <GuestOptionItem
        handleOptions={handleOptions}
        type="adult"
        options={options}
        minLimit={1}
      />
      <GuestOptionItem
        handleOptions={handleOptions}
        type="children"
        options={options}
        minLimit={0}
      />
      <GuestOptionItem
        handleOptions={handleOptions}
        type="room"
        options={options}
        minLimit={1}
      />
    </div>
  );
}

function GuestOptionItem({ options, type, minLimit, handleOptions }) {
  return (
    <div className="guestOptionItem">
      <p className="optionText">{type}</p>
      <div className="optionCounter">
        <button
          className="optionCounterBtn"
          disabled={options[type] <= minLimit}
          onClick={() => handleOptions(type, "dec")}
        >
          <HiMinus className="icon" />
        </button>
        <span className="optionCounterNumber">{options[type]}</span>
        <button
          className="optionCounterBtn"
          onClick={() => handleOptions(type, "inc")}
        >
          <HiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}
