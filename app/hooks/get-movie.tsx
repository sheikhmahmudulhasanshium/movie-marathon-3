import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieById } from '../redux/movieSlice';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';

const useMovieById = (id: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const movie = useSelector((state: RootState) => state.movie.movie);
    const loading = useSelector((state: RootState) => state.movie.loading);
    const error = useSelector((state: RootState) => state.movie.error);

    useEffect(() => {
        if (id) dispatch(fetchMovieById(id));
    }, [dispatch, id]);

    return { movie, loading, error };
};

export default useMovieById;
