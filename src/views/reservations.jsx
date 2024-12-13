import { useOutletContext } from 'react-router-dom'
import '../assets/css/reservations.css'
import { useState } from 'react';

export default function GuestReservations() {
    const {setActiveNavLink} = useOutletContext();

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [numberOfGuest, setNumberOfGuest] = useState(1);
    const [selectedOccassion, setSelectedOccation] = useState("");



    useState(() => {
        setActiveNavLink("Reservations");
    }, []);



    /**
     * Handlers
     */
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Submitting");
    }



    /**
     * Render
     */
    return(
        <div className='reservation-content1'>
            <div className="text-l3 ff-karla mar-bottom-1">Reservations</div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="reservation-form1 ff-karla">
                <section className='d-flex gap1'>
                    <div className="d-flex flex-direction-y gap3 w-100">
                        <label htmlFor='date' className='text-m2'>Choose Date:</label>
                        <input type='date' className='form-field-1' id='date' value={selectedDate} onInput={(e) => setSelectedDate(e.target.value)}/>
                    </div>
                    <div className="d-flex flex-direction-y gap3 w-100">
                        <label htmlFor='date' className='text-m2'>Choose Time:</label>
                        <input type='date' className='form-field-1' id='date' value={selectedDate} onInput={(e) => setSelectedDate(e.target.value)}/>
                    </div>
                </section>
            </form>
        </div>
    )
}