import React, { createContext, useContext } from 'react';
import useMovieById from '../hooks/get-movie';
import { Movie } from '@/types';

interface MovieContextType {
    movie: Movie | null;
    loading: boolean;
    error: string | null;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
    movieId: string;
    children: React.ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ movieId, children }) => {
    const { movie, loading, error } = useMovieById(movieId);
    return <MovieContext.Provider value={{ movie, loading, error }}>{children}</MovieContext.Provider>;
};

export const useMovie = () => {
    const context = useContext(MovieContext);
    if (!context) throw new Error('useMovie must be used within a MovieProvider');
    return context;
};
