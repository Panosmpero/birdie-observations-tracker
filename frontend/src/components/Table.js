import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { observationsRequest } from "../store/actions/observationsActions";
import {raw} from "./raw";
import moment from "moment";

const Table = () => {
  // const { payload, error } = useSelector((state) => state.observations);
  // const dispatch = useDispatch();

  // const getObservations = () => {
  //   console.log("dispatch");
  //   dispatch(observationsRequest());
  // };

  // useEffect(() => {
  //   getObservations();
  //   // eslint-disable-next-line
  // }, []);
  let error;
  const payload = raw
  return (
    <div className="table-container">
      {error ? (
        <div>Error</div>
      ) : !payload ? (
        <div>Loading</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>timestamp</th>
              <th>mood</th>
              <th>note</th>
            </tr>
          </thead>
          <tbody>
            {payload.map((observation) => (
              <tr key={observation.id}>
                <td>{moment(observation.timestamp).format("LT DD MMM YYYY")}</td>
                <td>{observation.event_type}</td>
                <td>{observation.note && observation.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
