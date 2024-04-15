import './Header.css'
import {useState, useEffect} from 'react';
import { format } from 'date-fns';
import control from '../assets/images/control.png';


export default function Header() {

    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setDateState(new Date()), 30000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId)
    }, []);

    const formattedDate = format(dateState, 'eeee, dd MMMM yyyy \xa0\xa0 h:mm a');

    return(
        <>
            <div className="header-container flex items-center justify-center">
                <p className="date-text text-center text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold italic">
                    {formattedDate}
                </p>
            </div>
        </>
    )
}