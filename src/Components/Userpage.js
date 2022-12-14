import React, { useState } from "react";
import UserCardEvent from "./UserCardEvent";
import NewEvent from "./NewEvent";

export default function Userpage({ user }) {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [mine, setMine] = useState([]);
  const [mutated, setMutated] = useState([]);
  // const [notfound, setNotFound]=useState(FaBullseye)
 
  // console.log(user.id)
  const [eventForm, setEventForm] = useState({
    eventname: "",
    fee: "",
    location: "",
    date: "",
    slots: "",
    details: "",
    user_id: user.id,
  });

  // console.log(user.id)
  // console.log(eventForm)
  const [editText, setEditText] = useState(false);

  const colorTxt = {
    color: "#0D7CAC",
    fontSize: "30px",
    fontWeight: "300",
  };
  function searchHandle(value) {
    console.log(value);
    const searchedEvents = mutated.filter(
      (mem) =>
        mem.eventname.toLowerCase().includes(value.toLowerCase()) ||
        mem.location.toLowerCase().includes(value.toLowerCase()) ||
        mem.date.toLowerCase().includes(value.toLowerCase())
    );

    if (searchedEvents !== 0) {
      setMine(searchedEvents);
    }
  }

  function handleToggles() {
    setToggleCreate(!toggleCreate);
    setEditText(false);
    setEventForm({
      eventname: "",
      fee: "",
      location: "",
      date: "",
      slots: "",
      details: "",
      user_id: user.id
    });
  }
  return (
    <div>
      <h4 style={colorTxt} className=" px-5">
        Welcome {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
      </h4>
      <div className="mx-5 mt-4 d-flex justify-content-between ">
        <div>
          <li
            onClick={() => handleToggles()}
            type="button"
            className="btn btn-lg"
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#0D7CAC",
              fontSize: "15px",
              fontWeight: "300",
            }}
          >
            {toggleCreate ? "View Your New Events" : "Create Event"}
          </li>
        </div>

        <div className="w-25 ">
          <input
            onChange={(e) => searchHandle(e.target.value)}
            type="search"
            id="form1"
            className="form-control"
          />
          <label className="" for="form1">
            Search
          </label>
        </div>
      </div>
      {/* <p>{notfound? 'Record not found':''}</p> */}
      {/* {edit ? <EditForm setEventForm={setEventForm} eventForm={eventForm} setEdit={setEdit} edit={edit} /> : ""} */}
      {toggleCreate ? (
        <NewEvent
          setEventForm={setEventForm}
          eventForm={eventForm}
          editText={editText}
          setToggleCreate={setToggleCreate}
          toggleCreate={toggleCreate}
        />
      ) : (
        <UserCardEvent
          setMutated={setMutated}
          mine={mine}
          setMine={setMine}
          setEditText={setEditText}
          editText={editText}
          setEventForm={setEventForm}
          setToggleCreate={setToggleCreate}
          toggleCreate={toggleCreate}
        />
      )}
    </div>
  );
}
