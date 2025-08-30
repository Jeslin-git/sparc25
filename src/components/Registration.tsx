import React from "react";

const Registration = () => {
  const ticketTypes = [
    { id: 1, name: "IEEE Members", price: 299, image: "ticket.png" },
    { id: 2, name: "Non-IEEE Members", price: 399, image: "ticket.png" },
    { id: 3, name: "NON-MACE Members", price: 499, image: "ticket.png" },
  ];

  const handleBuyTicket = (ticketId) => {
    console.log(`Purchasing ticket with ID: ${ticketId}`);
  };

  return (
<section
  className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen"
  style={{
    backgroundColor: "#E5FFE6",
    backgroundImage:
      "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.04) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}
>
  <div className="max-w-6xl mx-auto text-center">
    {/* Section Pill */}
    <div
      className="inline-block text-green-900 text-sm px-12 py-4 rounded-full font-bold mb-8 shadow-2xl shadow-black/60 transition"
      style={{ backgroundColor: "#8DC63F" }}
    >
      Registration
    </div>


        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333] mb-6 leading-snug">
            Buy your tickets now <br /> for SPARC 2025
          </h1>
          <p className="text-lg text-[#666] mb-12">
            SPARC is a 2-day event. There's a mix of short 45 minutes talks <br />
            and longer keynotes, giving you insights in a wide range of <br /> topics.
          </p>
        </div>

        {/* Ticket Cards */}
        <div className="flex justify-center items-start flex-wrap gap-8">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[280px] max-w-[300px] relative"
            >
              {/* Ticket Image */}
              <img
                src={ticket.image}
                alt={`${ticket.name} ticket`}
                className="w-24 h-24 object-contain mx-auto mb-6 block rotate-[60deg] drop-shadow-lg"
              />

              {/* Price Section */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
                  ₹
                </div>
                <span className="text-3xl font-bold text-[#333] leading-none">
                  {ticket.price}
                </span>
                <div className="text-sm text-gray-500 font-semibold">
                  <sub>/regular price</sub>
                </div>
              </div>

              {/* Membership */}
              <div className="text-base text-[#555] mb-6 font-medium">
                {ticket.name}
              </div>

              {/* Button */}
              <button
                onClick={() => handleBuyTicket(ticket.id)}
                className="w-full max-w-[200px] mx-auto block bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Buy Tickets
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registration;
