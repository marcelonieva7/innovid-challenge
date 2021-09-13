/* eslint-disable @typescript-eslint/no-explicit-any */
export type Action =
  | {type: "GET_DATA_OK"; payload: number}
  | {type: "GET_DATA_ERROR"; payload: any}
  | {type: "RETRY"}
  | {type: "PAUSE"}
  | {type: "RESUME"};

export interface State {
  charge: number;
  isOn: boolean;
  isLoading: boolean;
  error: any;
}
