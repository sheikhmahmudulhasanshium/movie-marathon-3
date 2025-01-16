import { defaultMovieData } from '@/lib/data';
import { Movie } from '@/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface MovieState {
    movie: Movie | null;
    loading: boolean;
    error: string | null;
}

export const fetchMovieById = createAsyncThunk<Movie, string, { rejectValue: string }>(
    'movies/fetchMovieById',
    async (id, { rejectWithValue }) => {
        try {
            const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
            if (!response.ok) throw new Error('Failed to fetch movie');
            return await response.json();
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

const initialState: MovieState = {
    movie: defaultMovieData,
    loading: false,
    error: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<Movie>) => {
                state.loading = false;
                state.movie = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'An error occurred';
            });
    },
});

export default movieSlice.reducer;
