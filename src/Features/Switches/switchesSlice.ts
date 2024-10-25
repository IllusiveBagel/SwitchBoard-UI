import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Tables } from "../../Database/database.types";
import supabase from "../../supabaseClient";

export interface SwitchesState {
    data: Tables<"Switches">[];
    loading: boolean;
    error: any | null;
}

const initialState: SwitchesState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk(
    "supabase/fetchData",
    async (_, thunkAPI) => {
        console.log("I have been called");
        try {
            const { data, error } = await supabase.from("Switches").select();
            if (error) throw error;
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const switchesSlice = createSlice({
    name: "switches",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
    selectors: {
        selectSwitches: (switches) => switches.data,
        selectLoading: (switches) => switches.loading,
    },
});

export const { selectSwitches, selectLoading } = switchesSlice.selectors;
export default switchesSlice.reducer;
