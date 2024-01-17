import store from "..";
import { _setTheme } from ".";

export const setTheme = theme = store.dispatch(_setTheme(theme));