import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  vacancies: [],
  vacancyStatus: "idle",
  vacancyDetail: null,
  vacancyDetailStatus: "idle",
};

export const getVacancies = createAsyncThunk("vacancies", async () => {
  try {
    const response = await fetch(
      "https://6676bd0c145714a1bd72a309.mockapi.io/vacancies"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch vacancies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch vacancies");
  }
});

export const getDetailVacancy = createAsyncThunk("vacancy", async (id) => {
  try {
    const response = await fetch(
      `https://6676bd0c145714a1bd72a309.mockapi.io/vacancies/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch vacancy details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch vacancy details");
  }
});


const vacancySlice = createSlice({
    name: "vacancyState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getVacancies.pending, (state) => {
        state.vacancyStatus = "loading";
      });
      builder.addCase(getVacancies.fulfilled, (state, action) => {
        state.vacancyStatus = "success";
        state.vacancies = action.payload;
      });
      builder.addCase(getVacancies.rejected, (state) => {
        state.vacancyStatus = "fail";
      });
  
      builder.addCase(getDetailVacancy.pending, (state) => {
        state.vacancyDetailStatus = "loading";
      });
      builder.addCase(getDetailVacancy.fulfilled, (state, action) => {
        state.vacancyDetailStatus = "success";
        state.vacancyDetail = action.payload;
      });
      builder.addCase(getDetailVacancy.rejected, (state) => {
        state.vacancyDetailStatus = "fail";
      });
  
    },
  });
  
  export default vacancySlice.reducer;