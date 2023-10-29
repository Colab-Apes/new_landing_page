import { combineComponents } from "../utilities/CombineComponents";
import { CreateProjectProvider } from './CreateProject';
const providers = [
  CreateProjectProvider
]
export const AppContextProvider = combineComponents(...providers);