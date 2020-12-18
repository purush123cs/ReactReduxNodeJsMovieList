import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import axios from 'axios';

interface HomeState {
    movieArrObj: object;
    selectedMovie: object
}
  
const initialState: HomeState = {
    movieArrObj: {},
    selectedMovie: {},
};

export const homeSlice = createSlice({
name: 'home',
initialState,
reducers: {
    setMovieArray: (state, action: PayloadAction<object>) => {
        state.movieArrObj = action.payload;
    },
    saveSelectedMovieId: (state, action: PayloadAction<string>) => {
        const selectedMovieId = action.payload;
        const movieArrObj:any = state.movieArrObj;
        const selectedMoviesArr = (movieArrObj.data).filter((movie:any) => 
            movie.imdbID === selectedMovieId
        );
        state.selectedMovie = selectedMoviesArr[0];
    },
},
});
  
export const { setMovieArray, saveSelectedMovieId } = homeSlice.actions;

export const onSubmit = (): AppThunk => async dispatch => {
    const movieResponse = await axios.get('/movie');
    const movieArr = movieResponse.data;
    dispatch(setMovieArray(movieArr));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMovieDetails = (state: RootState) => state.home.movieArrObj;
export const selectMovieSelected = (state: RootState) => state.home.selectedMovie;

export default homeSlice.reducer;
