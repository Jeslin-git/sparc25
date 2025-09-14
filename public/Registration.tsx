import React from "react";
import "./Registration.css";

const Registration: React.FC = () => {
  const tickets = [
    { id: 1, title: "Early Bird", price: "₹499" },
    { id: 2, title: "Regular", price: "₹699" },
    { id: 3, title: "On-Spot", price: "₹999" },
  ];

  return (
    <section className="registration-section py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Registration
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card relative">
            {/* Ticket Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {ticket.title}
            </h3>

            {/* Rupee Circle + Price */}
            <div className="flex items-center gap-2 mb-6">
              {/* Rupee Circle */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-800 to-green-400 flex items-center justify-center text-white font-bold shadow-md">
                ₹
              </div>

              {/* Price */}
              <p className="text-2xl font-bold text-green-700">
                {ticket.price}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  /regular price
                </span>
              </p>
            </div>

            {/* Register Button */}
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Registration;
