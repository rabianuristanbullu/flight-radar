import { configureStore } from "@reduxjs/toolkit";
import { flightSlice } from "./flightState";

export default configureStore({reducer: flightSlice})