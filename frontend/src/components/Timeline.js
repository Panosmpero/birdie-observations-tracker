import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { observationsRequest } from "../store/actions/observationsActions";
import {raw} from "./raw";
import TimelineGraph from "react-time-line";

const Timeline = () => {
  // const { payload, error } = useSelector((state) => state.observations);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(observationsRequest());
  //   // eslint-disable-next-line
  // }, []);
  const payload = raw
  const lineData = () => {
    return payload.map((observation) => {
      return { ts: observation.timestamp, text: observation.event_type.replace(/_/g, " ") };
    });
  };

  const data = payload ? lineData() : [];
  // console.log(data)
  return (
    <div className="timeline-container">
      <TimelineGraph items={data} format="hh:mm a" />
    </div>
  );
};

export default Timeline;
