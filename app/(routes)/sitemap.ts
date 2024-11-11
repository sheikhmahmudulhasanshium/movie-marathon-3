import { MetadataRoute } from 'next';


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `https://movie-marathon-3.vercel.app/home`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 1,
        },
        {
            url: `https://movie-marathon-3.vercel.app/`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.8,
        },
        {
            url: `https://movie-marathon-3.vercel.app/movie`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 1,
        },
        {
            url: `https://movie-marathon-3.vercel.app/tv`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 1,
        },
        {
            url: `https://movie-marathon-3.vercel.app/genre`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `https://movie-marathon-3.vercel.app/people`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `https://movie-marathon-3.vercel.app/top-contents`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `https://movie-marathon-3.vercel.app/company`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        {
            url: `https://movie-marathon-3.vercel.app/country`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.5,
        },
        
    ];
}