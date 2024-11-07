const MovieContent = () => {
    return ( 
        <div className="flex flex-col items-center gap-12 justify-center w-full mt-4">
            <div className="flex flex-col justify-between w-10/12 min-h-screen bg-blue-800 rounded-lg" id="now-playing">
                <h2 className="p-4 text-2xl font-bold font-mono text-cyan-950  " >Now Playing</h2>
            </div>
            <div className="flex flex-col justify-between w-10/12 min-h-screen bg-green-800 rounded-lg" id="popular">
                <h2 className="p-4 text-2xl font-bold font-mono text-cyan-950  " >Popular</h2>
            </div>
            <div className="flex flex-col justify-between w-10/12 min-h-screen bg-red-800 rounded-lg" id="top-rated">
                <h2 className="p-4 text-2xl font-bold font-mono text-cyan-950  " >Top Rated</h2>
            </div>
            <div className="flex flex-col justify-between w-10/12 min-h-screen bg-yellow-800 rounded-lg" id="upcoming">
                <h2 className="p-4 text-2xl font-bold font-mono text-cyan-950  " >Upcoming</h2>
            </div>
        </div>
     );
}
 
export default MovieContent;