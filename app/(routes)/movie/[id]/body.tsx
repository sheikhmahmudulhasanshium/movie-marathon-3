
import { useMovie } from '@/app/contexts/MovieContext';
import CustomBreadCrumb from '@/app/components/custom-bread-crumb';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import RootLayout from '@/app/layout';
import BasicPageProvider from '@/app/providers/basic-page-provider';
import BodyProvider from '@/app/providers/body-provider';
import Image from 'next/image';
import Link from 'next/link';
import FormatMoney from '@/lib/functions/format-money';
import FormatDate from '@/lib/functions/format-date';
import FormatTime from '@/lib/functions/format-time';
import { BanknoteIcon, CalendarIcon, ClockIcon, FlagIcon, ListIcon } from 'lucide-react';
const MovieContent: React.FC = () => {
    const { movie, loading, error } = useMovie();

    if (loading) return <div className="flex justify-center items-center w-11/12">Loading...</div>;
    if (error) return <div className="flex justify-center items-center w-11/12 text-red-500">{error}</div>;

    if (!movie) return <div className="flex justify-center items-center w-11/12">No movie data available</div>;
    const base_Image_Url=process.env.NEXT_PUBLIC_IMAGE_BASE_URL
    return (
        <RootLayout 
            params={{ 
                title: `${movie.title} | Movie`||"Explore Movies From Here", 
                description: `${movie.overview}`||"Discover Movie Marathon, the ultimate app for movie enthusiasts and binge-watchers!",
                image:movie.backdrop_path||movie.poster_path||''
            }}
        >
            <BasicPageProvider header={<Header />} footer={<Footer />}>
                <CustomBreadCrumb params={{ link: `/movie/${movie.id}`, name: `/Movie/${movie.title}` }} />

                {/* Passing the movieMenu as the `options` prop */}
                <BodyProvider
                    //navbar={<SubMenubar options={movieMenu} />} 
                    //title={id} 
                    content={
                        <div className='flex w-11/12 max-w-4xl min-w-2xl justify-center items-center'>
                            <div className='flex justify-between gap-2'>
                                <div className='w-5/12 flex flex-col gap-2 px-2'>
                                    <Image src={`${base_Image_Url}${movie.poster_path}`||`${base_Image_Url}${movie.backdrop_path}`} alt={'Not Found'} priority height={160} width={160}/> 
                                    <div className='flex gap-1'><ClockIcon className='scale-75'/><p className='font-semibold'>Duration: </p>{FormatTime(movie.runtime)}</div>                                   
                                    <div className='flex gap-1'><CalendarIcon className='scale-75'/><p className='font-semibold'>Release Date: </p>{FormatDate(movie.release_date)}</div>                                   
                                    <div className='flex gap-1'><BanknoteIcon  className='scale-75'/><p className='font-semibold'>Budget:</p>{FormatMoney(movie.budget)}</div>
                                    <div className='flex gap-1'><BanknoteIcon  className='scale-75'/><p className='font-semibold'>Revenue:</p>{FormatMoney(movie.revenue)}</div>
                                    <div className='flex gap-1 flex-wrap '>
                                        <ListIcon  className='scale-75'/>
                                        <p className='font-semibold'>Genres:</p>
                                        <div className='flex gap-1 flex-wrap px-2'>
                                            {movie.genres.map((genre, index) => (
                                                <div key={genre.id} className='flex gap-1 text-sm'>
                                                    <Link href={`/genre/${genre.id}`} className=' rounded  bg-green-300'>
                                                        <p className='p-1'>{genre.name}</p>
                                                    </Link>
                                                    {index < movie.genres.length - 1 ? ', ' : '.'}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex gap-1 '>
                                    <FlagIcon  className='scale-75'/>
                                        <p className='font-semibold'>Country: </p>
                                        <p>{movie.origin_country}</p>
                                    </div>

                                </div>
                                <div className='w-7/12 flex flex-col gap-2'>
                           
                                    <h2 className='text-xl font-bold'> {movie.title}</h2>
                                    <h5 className='text-sm text-slate-600 font-light'> - {movie.tagline}</h5>
                                    <p className='text-wrap text-base'>{movie.overview}</p>


                                </div>
                                
                            </div>
                        </div>
} 
                    additionalContent={
                    <div className='flex w-11/12 max-w-4xl min-w-2xl justify-center items-center '>
                        <div className='flex flex-col gap-4 justify-between w-full'>
                            <p className='text-xl font-semibold'>Recommendations</p>
                            <div className='flex w-full min-h-32 bg-gray-500'>

                            </div>
                        </div>
                    </div>} 
                    
                />
            </BasicPageProvider>
        </RootLayout>
    );
};

export default MovieContent;
