import { createContext } from "react";
import { ContextAlert } from "../interfaces/types";


const AlertContext = createContext<ContextAlert>({} as ContextAlert)

export default AlertContext