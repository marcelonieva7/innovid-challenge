/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FC} from "react";

interface Props {
  isOn: boolean;
  error: any;
  handleClick: () => void;
}

const Error: FC<Props> = ({error, isOn, handleClick}) => (
  <div className="window-body">
    <p style={{color: isOn ? "blue" : "black", paddingBlock: "60px"}}>{error.message}</p>
    <button onClick={handleClick}>Retry</button>
  </div>
);

export default Error;
