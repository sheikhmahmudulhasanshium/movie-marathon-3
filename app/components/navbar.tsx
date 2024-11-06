import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setActiveMenu } from '../redux/activeMenuSlice';
import { MenuOption } from '@/types';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const activePath = useSelector((state: RootState) => state.activeMenu.activePath); // Get active path from state
    const menuOptions: MenuOption[] = useSelector((state: RootState) => state.menu.options); // Access menu options from state

    const handleMenuClick = (path: string) => {
        dispatch(setActiveMenu(path)); // Dispatch action to update active menu path
    };

    return (
        <nav className="flex gap-4 justify-between w-full px-6">
            <div>Searchbar...</div>
            {menuOptions.map((option, index) => (
                <Link 
                    href={option.path}
                    key={index}
                    className={`menu-item ${activePath === option.path ? 'text-blue-500 border-b-4 border-blue-500' : ''}`} // Highlight active path with blue color
                    onClick={() => handleMenuClick(option.path)} // On click, update active menu path
                >
                    <div className="scale-150">{option.icon}</div>
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
