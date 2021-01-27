import { createStore } from "redux";
import { user } from "../reducers/user";

export const store = createStore(user);