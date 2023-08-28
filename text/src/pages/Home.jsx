import { useState } from "react";
import Counter from "../components/Counter";
import Modal from "../components/ui/Modal";


const Home = () => {
    const [ isOpen, setIsOpen ] =useState(false);
    return (
        <div>
            Home
            <Counter/>
            <button onClick={()=> setIsOpen(!isOpen)} className="btn btn-active btn-secondary">Secondary</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};

export default Home;