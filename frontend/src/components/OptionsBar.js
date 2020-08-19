import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { observationsRequest } from "../store/actions/observationsActions";

const OptionsBar = () => {
  
  const [client, setClient] = useState("df50cac5-293c-490d-a06c-ee26796f850d");
  const [eventType, setEventType] = useState("");
  const [fromDate, setFromDate] = useState("2019-05-10");
  const [toDate, setToDate] = useState("2019-05-12");
  
  const dispatch = useDispatch();
  const { payload, error } = useSelector((state) => state.observations);

  useEffect(() => {
    dispatch(observationsRequest({}));
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      observationsRequest({
        client,
        eventType,
        fromDate,
        toDate,
      })
    );
  };
  console.log(client, eventType, fromDate, toDate)
  return (
    <form className="options-bar" onSubmit={handleSubmit}>
      <label htmlFor="client">client (testing only)</label>

      <select
        name="client"
        id="client"
        onChange={(e) => setClient(e.target.value)}
      >
        <option value="df50cac5-293c-490d-a06c-ee26796f850d">Client A</option>
        <option value="2">Client B</option>
        <option value="3">Client C</option>
      </select>

      <select
        name="eventType"
        id="eventType"
        onChange={(e) => setEventType(e.target.value)}
        defaultValue={""}
        required
      >
        <option value="" disabled hidden>Event Type</option>
        {payload &&
          [...new Set(payload.map((x) => x.event_type))].map(
            (event_type, id) => (
              <option key={id} value={event_type}>
                {event_type}
              </option>
            )
          )}
      </select>

      <label htmlFor="fromDate">From</label>
      <input
        type="date"
        name="fromDate"
        id="fromDate"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />

      <label htmlFor="toDate">To</label>
      <input
        type="date"
        name="toDate"
        id="toDate"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default OptionsBar;
