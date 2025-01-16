"use client"
import CustomBreadCrumb from '@/app/components/custom-bread-crumb';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import RootLayout from '@/app/layout';
import BasicPageProvider from '@/app/providers/basic-page-provider';
import BodyProvider from '@/app/providers/body-provider';
import React from 'react';
import SubMenubar from '../../components/submenubar';
import { movieMenu } from "@/lib/data";
import MovieContent from './content';

const Movie: React.FC = () => {
    return (
        <RootLayout 
            params={{ 
                title: "Explore Movies From Here", 
                description: "Discover Movie Marathon, the ultimate app for movie enthusiasts and binge-watchers!",
            }}
        >
            <BasicPageProvider header={<Header />} footer={<Footer />}>
                <CustomBreadCrumb params={{ link: "/movie/", name: "/Movies/" }} />

                {/* Passing the movieMenu as the `options` prop */}
                <BodyProvider
                    navbar={<SubMenubar options={movieMenu} />} 
                    title="Explore Movies from here" 
                    content={<MovieContent/>} 
                    additionalContent={<div>Additional movie-related information can go here.</div>} 
                />
            </BasicPageProvider>
        </RootLayout>
    );
};

export default Movie;
