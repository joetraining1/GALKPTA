import { useContext } from "react";
import { NotifContext } from "../contexts/NotifProvider";

const useNotif = () => {
    return useContext(NotifContext);
}

export default useNotif;