"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowBigLeft, HomeIcon } from 'lucide-react';
import RootLayout from './layout';
import Header from './components/header';
import Footer from './components/footer';
import CustomBreadCrumb from './components/custom-bread-crumb';
import BasicPageProvider from './providers/basic-page-provider';

const NotFound: React.FC = () => {
    const router = useRouter();

    return (
        <RootLayout 
            params={{ 
                title: "Page Not Found", 
                description: "Discover Movie Marathon, the ultimate app for movie enthusiasts and binge-watchers!",
            }}
        >
            <BasicPageProvider header={<Header />} footer={<Footer />}>
                <div className='flex flex-col justify-between lg:w-full  mt-24 '> 
                    <CustomBreadCrumb params={{ link: "/not-found", name: "/404 (Page Not Found) !!!" }} />
                    
                    {/**Body */}
                    <div className="flex flex-col items-center justify-center w-full relative z-0 my-12 min-h-screen"> 
                        <h2 className="mt-4 text-2xl">Oops! Page Not Found</h2>
                        <p className="mt-2">The page you are looking for does not exist.</p>
                        <div className="flex justify-center w-full gap-6 mt-8">
                            <Button onClick={() => router.back()}>
                                <ArrowBigLeft /> Go Back
                            </Button>
                            <Button onClick={() => router.push('/home')}>
                                <HomeIcon /> Go Home
                            </Button>
                        </div>
                    </div>
                </div>
            </BasicPageProvider>
        </RootLayout>
    );
};

export default NotFound;
