"use client";
import React from 'react';
import BasicPageProvider from '../providers/basic-page-provider';
import Footer from '../components/footer';
import RootLayout from '../layout';
import Header from '../components/header';
import Body from './components/body';
import CustomBreadCrumb from '../components/custom-bread-crumb';

const Welcome: React.FC = () => {

    return (
        <RootLayout 
            params={{ 
                title: "Welcome to Movie Marathon 3", 
                description: "Discover Movie Marathon, the ultimate app for movie enthusiasts and binge-watchers!",
            }}
        >
            <BasicPageProvider header={<Header />} footer={<Footer />}>
                <CustomBreadCrumb params={{ link: "/welcome", name: "/Welcome/" }} />
                    <Body/>
            </BasicPageProvider>
        </RootLayout>
    );
};

export default Welcome;
