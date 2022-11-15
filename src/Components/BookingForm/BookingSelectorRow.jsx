import React from 'react'

export const BookingSelectorRow = (props) => {

    const { ticketType, ticketsSelected } = props;

  return (
    <div className="bookingSelectorRow">    
            <span className="numTickets">Number of {ticketType} tickets :</span>
            <img
                className="selectorImage" 
                src={process.env.PUBLIC_URL + `/Assets/minus.png`} 
                alt="Add person"
                onClick={() => props.numTicketsChanged(ticketType, ticketsSelected, -1)}>
            </img>
            <span className="numTicketsSelected">{ticketsSelected}</span>
            <img 
                className="selectorImage" 
                src={process.env.PUBLIC_URL + `/Assets/plus.png`} 
                alt="Remove person"
                onClick={() => props.numTicketsChanged(ticketType, ticketsSelected, 1)}>
            </img>            
    </div>
  )
}
