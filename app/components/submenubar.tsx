// SubMenubar.tsx
import { SubMenuOption } from "@/types";
import Link from "next/link";

const SubMenubar: React.FC<{ options: SubMenuOption[] }> = ({ options }) => {
    return ( 
        <div className="flex justify-center items-center w-full py-4 bg-secondary fixed z-30 top-20 border ">
            <div className="flex justify-between gap-6 overflow-y-hidden overflow-x-scroll px-12 w-full">
                {/* Using the `options` prop here */}
                {options.map((menu, index) => (
                    <Link href={menu.path} key={index} className=" flex-shrink-0">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl">{menu.name}</p>
                    </Link>
                ))}
            </div>
        </div>
     );
}

export default SubMenubar;
