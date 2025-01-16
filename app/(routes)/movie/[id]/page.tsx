"use client"
import MovieContent from './body';
import { useParams } from 'next/navigation';
import { MovieProvider } from '@/app/contexts/MovieContext';
const Movie: React.FC = () => {
    const params = useParams();
    const movieId = typeof params.id === 'string' ? params.id : undefined;

    if (!movieId) {
        return <p>Invalid movie ID</p>;
    }    return (
        <MovieProvider movieId={movieId}>
            <MovieContent/>
        </MovieProvider>
    );
};

export default Movie;
