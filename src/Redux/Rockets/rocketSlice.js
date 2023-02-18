import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';
const ROCKETS = 'ROCKETS';

export const fetchRockets = createAsyncThunk(ROCKETS, async () => {
  const response = await axios.get(URL);
  return response.data;
});
const rocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    rocketlist: [],
  },
  reducers: {
    reserveRocket: (state, actions) => {
      const newState = state.rocketlist.map((rocket) => {
        if (rocket.id === actions.payload) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return { ...rocket };
      });
      return {
        ...state,
        rocketlist: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      rocketlist: [
        ...action.payload.map((rocket) => ({
          id: rocket.id,
          rocketName: rocket.rocket_name,
          reserved: false,
          description: rocket.description,
          flickrImages: rocket.flickr_images,
        })),
      ],
    }));
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      loading: true,
    }));
  },
});
export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
