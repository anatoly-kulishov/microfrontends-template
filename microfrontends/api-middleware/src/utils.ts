import Auth from "@aws-amplify/auth";
import { fromUnixTime, getUnixTime } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

export const getAuthToken = async (): Promise<string> => {
  const session = await Auth.currentSession();
  return session.getAccessToken().getJwtToken();
};

export const fromZonedTimestampToUTCTimestamp = (timestamp: number): number => {
  const localDate = fromUnixTime(timestamp);
  return getUnixTime(zonedTimeToUtc(localDate, "UTC"));
};

export const getTimestamp = (date: Date): number => {
  return getUnixTime(date);
};