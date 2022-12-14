import React, { Fragment } from "react";

export default function EventCard({ eachEvent, onBookingRequest }) {
  const yell = { color: "#FDFF00", fontWeight: "bold" };

  return (
    <Fragment>
      <div key={eachEvent.id} className="card mt-4 ml-1 rounded ">
        <h5 className="card-header pl-2 ">{eachEvent.eventname}</h5>
        <div className="card-body" style={{ backgroundColor: "#0D7CAC" }}>
          <div className="row  pb-2">
            <div className="">
              <h6 className="card-text text-white">{eachEvent.details}</h6>
              <div>
                <button
                  onClick={() => onBookingRequest(eachEvent.id)}
                  type="button"
                  disabled={eachEvent.slots===0}
                  style={{ backgroundColor: "#FF6D28" , border: 'none' }}
                  class="btn btn-primary text-black"
                  data-bs-toggle="modal"
                  
                  data-bs-target="#exampleModal"
                >
                  Book
                </button>
              </div>
            </div>
          </div>

          <div
            style={yell}
            className="d-flex justify-content-between col-md-8 col-xs-12 "
          >
            <p>Location: {eachEvent.location}</p>
            <p>Date: {eachEvent.date}</p>
            <p>Ksh {eachEvent.fee}/=</p>
            <p>Slots -- {eachEvent.slots}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
