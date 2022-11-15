import React, { useState }  from 'react'
import { BookingSelectorRow } from './BookingSelectorRow'

export const BookingSelector = () => {

    const [ticketsOnOrder, setTicketsOnOrder] = useState({
        numAdultTickets: 0,
        numChildTickets: 0
    });

    const adjustTicketSelection = (ticketType, currentTicketCount, adjustment) => {

        let newTicketCount = 0;

        if((currentTicketCount === 0 && adjustment > 0) || (currentTicketCount > 0)) {

            newTicketCount = currentTicketCount + adjustment;

            if(ticketType === "Adult") {
                setTicketsOnOrder({
                    numAdultTickets: newTicketCount,
                    numChildTickets: ticketsOnOrder.numChildTickets
                })
            }
            else {
                setTicketsOnOrder({
                    numAdultTickets: ticketsOnOrder.numAdultTickets,
                    numChildTickets: newTicketCount
                })
            }
        }
    }

  return (
    <div>
        <div className="bookingSelector">
            <h2>Booking Selections</h2>
        </div>
        <BookingSelectorRow ticketType="Adult" numTicketsChanged={adjustTicketSelection} ticketsSelected={ticketsOnOrder.numAdultTickets} />
        <BookingSelectorRow ticketType="Child" numTicketsChanged={adjustTicketSelection} ticketsSelected={ticketsOnOrder.numChildTickets} />
    </div>
  )
}
