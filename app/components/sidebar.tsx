import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Info, MenuIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setActiveMenu } from '../redux/activeMenuSlice'; // Import setActiveMenu action
import Link from 'next/link';
import { MenuOption } from '@/types';
import { ModeToggle } from './mode-toggle-button';

const Sidebar: React.FC = () => {
    const dispatch = useDispatch();
    const activePath = useSelector((state: RootState) => state.activeMenu.activePath); // Get active path from state
    const menuOptions = useSelector((state: RootState) => state.menu.options); // Get menu options from state

    const handleMenuClick = (path: string) => {
        dispatch(setActiveMenu(path)); // Dispatch action to update active menu path
    };

    return (
        <div className="lg:hidden"> {/* Ensure this div is hidden on lg screens */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:scale-150">
                        <MenuIcon className="scale-150 text-cyan-950 dark:text-white h-24 w-24" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className="text-center">Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {menuOptions.map((option: MenuOption, index: number) => (
                        <DropdownMenuItem key={index} asChild>
                            <Link
                                href={option.path}
                                className={`block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-900 hover:font-extrabold ${activePath === option.path ? 'text-blue-500' : ''}`} // Highlight active menu item with blue
                                onClick={() => handleMenuClick(option.path)} // Update active menu path when clicked
                            >
                                {option.icon && <span className="mr-2">{option.icon}</span>}
                                {option.name}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                        <Link
                            href="/about"
                            className={`block hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-900 hover:font-extrabold ${activePath === '/about' ? 'text-blue-500' : ''}`} // Highlight About page with blue
                            onClick={() => handleMenuClick('/about')} // Update active menu path
                        >
                            <span className="mr-2 flex items-center gap-4">
                                <Info />
                                About
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <div className='flex justify-center'><ModeToggle /></div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Sidebar;
