import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Bredcumb = () => {
    return (
        <div>
             <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                        <li className="mr-6">
                            <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
                                <span>Home</span>
                                <IoIosArrowForward />
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
                                <span>Everyday Use Notebooks</span>
                                <IoIosArrowForward />
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
                                <span>MSI Prestige Series</span>
                                <IoIosArrowForward />
                            </Link>
                        </li>

                        <li><a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#">MSI WS Series</a></li>
                    </ul>
        </div>
    );
};

export default Bredcumb;