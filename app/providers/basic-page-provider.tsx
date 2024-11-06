import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from "./theme-provider";

import store from '../../app/redux/store'; 
const BasicPageProvider: React.FC<{ header: React.ReactNode; footer: React.ReactNode; children: React.ReactNode }> = ({ header, footer, children }) => {
    return (
        <Provider store={store}> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

            <div className='min-w-full max-w-full w-full flex flex-col items-center justify-between gap-4  relative min-h-screen overflow-y-hidden'>
                {header}
                {children}
                {footer}
            </div>
        </ThemeProvider>
        </Provider>
    );
};

export default BasicPageProvider;
