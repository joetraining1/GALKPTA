import { useContext } from "react";
import { ClockContext } from "../contexts/ClockProvider";

const useClock = () => {
  return useContext(ClockContext);
};

export default useClock;
