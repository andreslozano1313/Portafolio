import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function header(){
    return(
        <header className="w-100">
            
            <nav className="navbar container-fluid object-fit-contarin bg-primary px-4 text-white"> 
                <div className="d-flex flex-column ml-2 ">
                    <a className="nav-brand text-black link-underline 
                    link-underline-onpacity-0 link-onpacity-50 text-white fs-2" 
                    href="/">Andres F. Lozano</a>
                    <p className="mb-0 "><MdEmail /> andreslozano1313@hotmail.com</p>
                    <p> <FaPhoneSquareAlt />(+57) 3188636963</p>
                </div>

                <div>
                    <ul className="nav justify-content-between ">
                        <li className="nav-item">
                            <a className="nav-link text-black link-underline 
                            link-underline-opacity-0 link-opacity-50-hover text-white" 
                            href="/">Acerca de mi</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-black link-underline 
                            link-underline-opacity-0 link-opacity-50-hover text-white" 
                            href="/">Habilidades</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-black link-underline 
                            link-underline-opacity-0 link-opacity-50-hover text-white" 
                            href="/">Proyectos</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-black link-underline 
                            link-underline-opacity-0 link-opacity-50-hover text-white" 
                            href="/">Recomendaciones</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>)
}