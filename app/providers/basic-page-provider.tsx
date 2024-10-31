import React from 'react';

const BasicPageProvider: React.FC<{ header: React.ReactNode; footer: React.ReactNode; children: React.ReactNode }> = ({ header, footer, children }) => {
    return (
        <div className='min-w-full max-w-full w-full flex flex-col items-center justify-between gap-4  relative min-h-screen overflow-y-hidden'>
            {header}
            {children}
            {footer}
        </div>
    );
};

export default BasicPageProvider;
