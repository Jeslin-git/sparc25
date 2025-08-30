import React from 'react';
import './Registration.css';

const Registration = () => {
  const ticketTypes = [
    {
      id: 1,
      name: "IEEE Members",
      price: 299,
      image: "ticket.png"
    },
    {
      id: 2,
      name: "Non-IEEE Members", 
      price: 399,
      image: "ticket.png"
    },
    {
      id: 3,
      name: "NON-MACE Members",
      price: 499,
      image: "ticket.png"
    }
  ];

  const handleBuyTicket = (ticketId) => {
    console.log(`Purchasing ticket with ID: ${ticketId}`);
    // Add your purchase logic here
  };

  return (
     <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#e6f9e6",
        backgroundImage:
          "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Pill */}
       <div
  className="inline-block text-green-900 text-sm px-12 py-4 rounded-full font-bold mb-4 shadow-2xl shadow-black/60 "
  style={{ backgroundColor: "#8DC63F" }}
>
  Registration
</div>


      
      <div className="content-section">
        <h1 className="main-heading">Buy your tickets now<br/>for SPARC 2025</h1>
        <p className="description">
          SPARC is a 2-day event. There's a mix of short 45 minutes talks <br/>and longer keynotes,giving you insights in a wide range of<br/> topics.
        </p>
        
       </div>
        <div className="ticket-cards-container">
          {ticketTypes.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <img 
                src={ticket.image} 
                alt={`${ticket.name} ticket`}
                className="ticket-image"
              />
              <div className="ticket-info">
                <div className="price-section">
                  <div className="rupee-symbol">₹</div>
                  <span className="price">{ticket.price}</span>
                 <div class="price-box">
  <span class="price"></span><sub>/regular price</sub>
</div>
                </div>
                <div className="membership-type">{ticket.name}</div>
                <button 
                  className="buy-tickets-btn"
                  onClick={() => handleBuyTicket(ticket.id)}
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default Registration;


