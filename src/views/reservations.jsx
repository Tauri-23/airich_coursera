import { useOutletContext } from 'react-router-dom'
import '../assets/css/reservations.css'
import { useState } from 'react';
import { useModal } from '../contexts/ModalContext';

export default function GuestReservations() {
    const {showModal} = useModal();
    const {setActiveNavLink} = useOutletContext();

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [numberOfGuest, setNumberOfGuest] = useState(1);
    const [selectedOccasion, setSelectedOccasion] = useState("");



    useState(() => {
        setActiveNavLink("Reservations");
    }, []);



    /**
     * Handlers
     */
    const handleFormSubmit = (e) => {
        e.preventDefault();
        showModal("GeneralConfirmationModal1", {
            title: "Book Reservation", note: "Do you want to book this reservation", positiveBtnText: "Book", handlePositiveBtnClick: () => {
                showModal("GeneralInformationModal1", {note: "Reservation has been booked."});             
                setSelectedDate("");
                setSelectedTime("");
                setSelectedOccasion("");
            }
        })
    }



    /**
     * Render
     */
    return(
        <div className='reservation-content1'>
            <legend className="text-l3 ff-karla mar-bottom-1">Reservations</legend>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="reservation-form1 ff-karla">
                <fieldset style={{border: "none"}}>

                    <div className="d-flex flex-direction-y gap4 mar-bottom-3 w-100">
                        <label htmlFor='date' className='text-m2'>Choose Date:</label>
                        <input type='date' className='form-field-1' id='date' value={selectedDate} onInput={(e) => setSelectedDate(e.target.value)} required/>
                    </div>

                    <div className="d-flex flex-direction-y gap4 mar-bottom-3 w-100">
                        <label htmlFor='time' className='text-m2'>Choose Time:</label>
                        <input type='time' className='form-field-1' id='time' value={selectedTime} onInput={(e) => setSelectedTime(e.target.value)} required/>
                    </div>

                    <div className="d-flex flex-direction-y gap4 w-100 mar-bottom-3">
                        <label htmlFor='guests' className='text-m2'>Number of Guests:</label>
                        <input type='number' className='form-field-1' id='guests' value={numberOfGuest} min={1} onInput={(e) => setNumberOfGuest(e.target.value)} required/>
                    </div>

                    <div className="d-flex flex-direction-y gap4 w-100 mar-bottom-1">
                        <label htmlFor='occasion' className='text-m2'>Occasion:</label>
                        <select className='form-field-1'id="occasion" value={selectedOccasion} onInput={(e) => setSelectedOccasion(e.target.value)} required>
                            <option value="">Select Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>

                    <input type="submit" value="Reserve" className='primary-btn-yellow1' />
                </fieldset>
            </form>
        </div>
    )
}