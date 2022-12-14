import React, { useState } from "react";

export default function NewEvent({
  user_id,
  setEventForm,
  eventForm,
  editText,
  setToggleCreate,
  toggleCreate,
}) {
  const [error, setError] = useState();
  // console.log(eventForm.id);
  function handleChange(e) {
    // console.log(eventForm);
    let name = e.target.name;
    let value = e.target.value;

    setEventForm({
      ...eventForm,
      [name]: value,
    });
  }
  // console.log(user_id)

  const errormessage = error?.map((error) => {
    return (
      <>
        <li className="text-danger pt-3">{error}</li>
      </>
    );
  });

  function handleSubmitEvent(e) {
    e.preventDefault();

    // console.log(eventForm)

    if (editText) {
      fetch(`events/${eventForm.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventForm),
      }).then((r) => {
        if (r.ok) {
          r.json().then((event) => event);
          setEventForm({
            eventname: "",
            fee: "",
            location: "",
            date: "",
            slots: "",
            details: "",
          });
          setToggleCreate(!toggleCreate);
        } else {
          r.json().then((error) => setError(error.errors));
        }
      });
    } else {
      fetch("/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventForm),
      }).then((r) => {
        if (r.ok) {
          r.json().then((event) => event);
          setEventForm({
            eventname: "",
            fee: "",
            location: "",
            date: "",
            slots: "",
            details: "",
          });
          setToggleCreate(!toggleCreate);
        } else {
          r.json().then((error) => setError(error.errors));
        }
      });
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center  my-3">
        <div className="rounded" style={{ backgroundColor: "#0D7CAC" }}>
          <form className="col">
            <div className="container">
              <div className="row">
                <div className="form-group col-sm">
                  <label for="exampleFormControlInput1">Event name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    value={eventForm.eventname}
                    name="eventname"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="event name"
                  />
                </div>
                <div className="form-group col-sm">
                  <label for="exampleFormControlInput1">Fee</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="fee"
                    onChange={handleChange}
                    value={eventForm.fee}
                    name="fee"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm">
                  <label for="exampleFormControlInput1">Location</label>
                  <input
                    onChange={handleChange}
                    value={eventForm.location}
                    name="location"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Location"
                  />
                </div>
                <div className="form-group col-sm">
                  <label for="exampleFormControlInput1">Slots</label>
                  <input
                    value={eventForm.slots}
                    onChange={handleChange}
                    name="slots"
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="slots"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm">
                  <label for="exampleFormControlInput1">Date</label>
                  <input
                    onChange={handleChange}
                    value={eventForm.date}
                    name="date"
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="slots"
                  />
                </div>
              </div>
              <div className="form-group mt-2 col-sm">
                <label for="exampleFormControlTextarea1">Details</label>
                <textarea
                  onChange={handleChange}
                  value={eventForm.details}
                  name="details"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="text-center text-lg-start my-3 text-black">
                <button
                  type="button"
                  onClick={handleSubmitEvent}
                  Name="btn btn-lg text-white"
                  style={{
                    border: "none",
                    backgroundColor: "orange",
                    fontSize: "18px",
                    padding: "5px 40px",
                  }}
                >
                  {editText ? "Edit" : "Submit"}
                </button>
              </div>
              {errormessage}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
