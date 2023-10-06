import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { options } from "./constants";
import axios from "axios";

export const getFlightData = createAsyncThunk(
  "flights/getFlights",
  async () => {
    const res = await axios.request(options);
    const newData = res.data.aircraft.map((plane) => ({
      id: plane[0],
      code: plane[1],
      lat: plane[2],
      lng: plane[3],
    }));
    console.log(newData);

    return newData;
  }
);

const initialState = {
  flights: [],
  flightsLoading: true,
  isError: false,
};
export const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: {
    // api'den cevap beklerken:pending
    [getFlightData.pending]:(state,action)=>{
        state.flightsLoading = true
    },
    // api'den veri gelirse :fulfilled
    [getFlightData.fulfilled]:(state,action)=>{
        state.flights = action.payload
        state.flightsLoading =false
    },
    //api'den olumsuz cevap gelirse:rejected
    [getFlightData.rejected]:(state,action)=>{
        state.flightsLoading = false
        state.isError=true
    }

  }
});
