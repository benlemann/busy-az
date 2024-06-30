import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  vacancies: [],
  vacancyStatus: "idle",
  vacancyDetail: null,
  vacancyDetailStatus: "idle",
};

export const getVacancies = createAsyncThunk(
  "vacancies/getVacancies",
  async () => {
    try {
      const response = await fetch(
        "http://localhost:7999/api/vacancy"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch vacancies");
      }
      const data = await response.json();
      console.log(data);
      return data.vacancies;
    } catch (error) {
      throw new Error("Failed to fetch vacancies");
    }
  }
);

export const getDetailVacancy = createAsyncThunk(
  "vacancies/getDetailVacancy",
  async (_id) => {
    try {
      const response = await fetch(
        `http://localhost:7999/api/vacancy/${_id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch vacancy details");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch vacancy details");
    }
  }
);

export const deleteVacancy = createAsyncThunk(
  "vacancies/deleteVacancy",
  async (_id) => {
    try {
      const response = await fetch(
        `http://localhost:7999/api/vacancy/${_id}`,
        {
          method: "DELETE",
          credentials:"include"
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete vacancy");
      }
      return _id;
    } catch (error) {
      throw new Error("Failed to delete vacancy");
    }
  }
);

export const updateVacancy = createAsyncThunk(
  "vacancies/updateVacancy",
  async ({ _id, vacancy }) => {
    try {
      const response = await fetch(
        `https://6676bd0c145714a1bd72a309.mockapi.io/vacancies/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vacancy),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update vacancy");
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      throw new Error("Failed to update vacancy");
    }
  }
);


const vacancySlice = createSlice({
  name: "vacancyState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVacancies.pending, (state) => {
        state.vacancyStatus = "loading";
      })
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.vacancyStatus = "success";
        state.vacancies = action.payload;
      })
      .addCase(getVacancies.rejected, (state) => {
        state.vacancyStatus = "fail";
      })
      .addCase(getDetailVacancy.pending, (state) => {
        state.vacancyDetailStatus = "loading";
      })
      .addCase(getDetailVacancy.fulfilled, (state, action) => {
        state.vacancyDetailStatus = "success";
        state.vacancyDetail = action.payload;
      })
      .addCase(getDetailVacancy.rejected, (state) => {
        state.vacancyDetailStatus = "fail";
      })
      .addCase(deleteVacancy.pending, (state) => {
        state.vacancyStatus = "loading";
      })
      .addCase(deleteVacancy.fulfilled, (state, action) => {
        state.vacancyStatus = "success";
        state.vacancies = state.vacancies.filter(
          (vacancy) => vacancy.id !== action.payload
        );
      })
      .addCase(deleteVacancy.rejected, (state) => {
        state.vacancyStatus = "fail";
      })
      .addCase(updateVacancy.pending, (state) => {
        state.vacancyStatus = "loading";
      })
      .addCase(updateVacancy.fulfilled, (state, action) => {
        state.vacancyStatus = "success";
        state.vacancies = state.vacancies.map((vacancy) =>
          vacancy.id === action.payload.id ? action.payload : vacancy
        );
      })
      .addCase(updateVacancy.rejected, (state) => {
        state.vacancyStatus = "fail";
      });
  },
});


export default vacancySlice.reducer;
