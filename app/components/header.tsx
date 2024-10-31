import { ModeToggle } from "./mode-toggle-button";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Header = () => {
    return ( 
        <div className="shadow-xl dark:shadow-stone-500 min-w-max flex justify-center items-center max-w-full h-20 fixed top-0 left-0 right-0 z-20 bg-secondary">
            <div className="flex justify-center items-center my-4 text-2xl lg:text-3xl md:text-2xl sm:text-xl font-semi-bold w-full h-16">
                {/* Visible on small and medium screens */}
                <div className="block lg:hidden justify-between w-10/12">
                    {/* Content for small and medium screens */}
                    <div className="flex justify-between w-full gap-2 ">
                        <p>Logo</p>
                        <div className="flex justify-end gap-4 items-center ">
                            <p>Cart</p>
                            <Sidebar/>
                        </div>
                    </div>
                </div>
                {/* Visible on large screens only */}
                <div className="hidden lg:block justify-between w-10/12">
                    {/* Content for large screens */}
                    <div className="flex justify-between items-center w-full gap-2">
                        <p>Logo</p>
                        <Navbar/>
                        <div className="flex justify-end gap-4">
                            <p>Cart</p>
                            <ModeToggle/>

                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;