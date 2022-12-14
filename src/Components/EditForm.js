import React, { useEffect, useState } from "react";

export default function EditForm({ eventForm,setEventForm,setEdit,edit}) {

//   const [patched, setPatched] = useState({
//     eventname: "",
//     fee: "",
//     location: "",
//     date: "",
//     slots: "",
//     details: "",
//   });
  console.log(eventForm);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setEventForm({
      ...eventForm,
      [name]: value,
    });
  }

  function handleSubmit() {
    // setEdit(!edit)}
    fetch(`https:/events/${eventForm.id}}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((r) => r.json())
      .then((updatedItem) =>(console.log(updatedItem)));
  }
  return (
    <div>
      <button
        // onClick={() => setEdit(!edit)}
        type="button"
        class="btn-close ml-5"
        aria-label="Close"
      ></button>
      <form className="col-6">
        <div className="container">
          <div className="row">
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Event name</label>
              <input
                type="text"
                class="form-control"
                name='eventname'
                value={eventForm.eventname}
                onChange={handleChange}
                id="exampleFormControlInput1"
                placeholder="event name"
              />
            </div>
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Fee</label>
              <input
                type="number"
                class="form-control"
                value={eventForm.fee}
                onChange={handleChange}
                id="exampleFormControlInput1"
                placeholder="fee"
              />
            </div>
          </div>
          <div className="row">
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Location</label>
              <input
                type="location"
                class="form-control"
                id="exampleFormControlInput1"
                value={eventForm.location}
                onChange={handleChange}
                placeholder="Location"
              />
            </div>
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Slots</label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="slots"
                onChange={handleChange}
                value={eventForm.slots}
              />
            </div>
          </div>
          <div className="row">
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Date</label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="slots"
                onChange={handleChange}
                value={eventForm.date}
              />
            </div>
          </div>
          <div class="form-group mt-2 col-sm">
            <label for="exampleFormControlTextarea1">Details</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={eventForm.details}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-lg text-white mt-3"
            onClick={handleSubmit}
            style={{
              border: "none",
              paddingRight: "2.5rem",
              backgroundColor: "#0D7CAC",
              fontSize: "18px",
              padding: "5px 40px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
