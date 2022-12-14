import React, { Fragment, useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  // const [mutated,setMutated] =useState([])
  // const [success, setSuccess] = useState();
  // const [error, setError] = useState();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    event_id: "",
  });

  // const successmessage = error?.map((error) => {
  //   return (
  //     <>
  //       <p className="text-danger pt-3">{error}</p>
  //     </>
  //   );
  // });

  function updateList(updatedItem) {
    const updatedItems = events.map((eve) => {
      if (eve.id === updatedItem.id) {
        return updatedItem;
      } else {
        return eve;
      }
    });
    setEvents(updatedItems);
  }
  const view = events.map((eve) => {
    return (
      <EventCard
        eachEvent={eve}
        onBookingRequest={(event_id) => setFormData({ ...formData, event_id })}
      />
    );
  });

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((data) => {
        setEvents(data);
        // setMutated(data)
      });
  }, []);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function decreaseSlots(event) {
    const id = event.id;
    const obj = {
      slots: event.slots - 1,
    };
    fetch(`/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((event) => updateList(event));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let data = formData;

    const result = events.filter((event) => event.id ===  data.event_id);
    const theEvent = result[0];

    decreaseSlots(theEvent);

    fetch("/attendees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((r) => {
      if (r.ok) {
        r.json().then((event) => console.log(event.success));
        setFormData({ name: "", email: "", phonenumber: "", event_id: "" });
      } else {
        r.json().then((error) => console.log(Object.values(error)));
      }
    });
  }

  return (
    <Fragment>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Enter Information
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Enter Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="name"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Phone Number</label>
                  <input
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="telephone no"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            {/* <p className="text-success pl-3">{success}</p> */}

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="display-6 p-2" style={{ fontWeight: "400" }}>
          LETS CONNECT, LEARN AND SHARE IDEAS.
        </h1>
        <h5 className="" style={{ color: "#0D7CAC" }}>
          Don’t be left out reserve a ticket by booking an event
        </h5>
      </div>

      <div className="container">
        <div className="row m-4 ">{view}</div>
      </div>
    </Fragment>
  );
}
