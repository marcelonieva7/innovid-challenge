import React, {FC, useEffect, useReducer} from "react";

import fetchData from "../../App/api";
import Error from "../Error/Error";
import pcOn from "../../assets/pc-on.gif";
import pcOff from "../../assets/pc-off.png";

import reducer from "./reducer";
import styles from "./ServerCharge.module.scss";

interface Props {
  id: string;
}

const ServerCharge: FC<Props> = ({id}) => {
  const initialState = {
    charge: 0,
    isOn: true,
    isLoading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const {isOn, charge, isLoading, error} = state;

  const handleClick = () => {
    dispatch({type: "RETRY"});
  };

  useEffect(() => {
    if (isOn) {
      const getData = async () => {
        try {
          const data: number = await fetchData(id);

          dispatch({type: "GET_DATA_OK", payload: data});
        } catch (err) {
          dispatch({type: "GET_DATA_ERROR", payload: err});
        }
      };
      const interval = setInterval(getData, 5000);

      return () => clearInterval(interval);
    }
  }, [id, isOn]);

  return (
    <div className={`window ${styles.server_window}`}>
      <div className="title-bar">
        <div className="title-bar-text">{`Server #${id}`}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="window-body">
        {isLoading ? (
          <p className={styles.loader}>Loading...</p>
        ) : error ? (
          <Error error={error} handleClick={handleClick} isOn={isOn} />
        ) : (
          <>
            {isOn ? (
              <img className={styles.server_img} src={pcOn} />
            ) : (
              <img className={styles.server_img} src={pcOff} />
            )}
            <div className="status-bar">
              <p className={`status-bar-field ${styles.field}`}>{`Status: ${
                isOn ? "ON" : "OFF"
              }`}</p>
              <button
                className={`status-bar-field ${styles.switch}`}
                onClick={() => dispatch({type: isOn ? "PAUSE" : "RESUME"})}
              >
                {isOn ? "shut down" : "turn on"}
              </button>
              <p
                className={`status-bar-field ${styles.field} ${charge >= 80 && styles.charge}`}
              >{`CPU Usage: ${charge}%`}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServerCharge;
