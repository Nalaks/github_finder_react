import { createContext } from "react";
import { Context } from "../interfaces/types";


const GithubContext = createContext<Context>({} as Context)

export default GithubContext