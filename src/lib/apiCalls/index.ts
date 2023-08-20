/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/lib/axiosInstance";

interface CallProps {
  url: string;
  payload: any;
  headers: any;
}

export const makePostCall = async (config: CallProps) => {
  try {
    const res = await client.post(config.url, config.payload, config.headers);
    return { err: false, res: res };
  } catch (e) {
    console.log("API Error > ", e);
    return { err: true, res: null };
  }
};
