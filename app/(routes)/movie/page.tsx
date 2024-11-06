"use client";
import CustomBreadCrumb from '@/app/components/custom-bread-crumb';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import RootLayout from '@/app/layout';
import BasicPageProvider from '@/app/providers/basic-page-provider';
import React from 'react';

const Movie: React.FC = () => {

    return (
        <RootLayout 
            params={{ 
                title: "Explore Movies From Here", 
                description: "Discover Movie Marathon, the ultimate app for movie enthusiasts and binge-watchers!",
            }}
        >
            <BasicPageProvider header={<Header />} footer={<Footer />}>
                <CustomBreadCrumb params={{ link: "/welcome", name: "/Welcome/" }} />
                    {/*<Body/>*/}
            </BasicPageProvider>
        </RootLayout>
    );
};

export default Movie;
