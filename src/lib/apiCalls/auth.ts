/* eslint-disable @typescript-eslint/no-explicit-any */
import { makePostCall } from ".";
import { AUTH_LOGIN } from "./endpoints.var";

interface Params {
  payload: any;
  headers?: any;
}

export const login = async ({ payload, headers = {} }: Params) => {
  return await makePostCall({
    url: AUTH_LOGIN,
    payload: payload,
    headers: headers,
  });
};
