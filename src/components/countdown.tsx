import React, { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-01").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="flex justify-center items-center py-12 px-4 sm:px-6"
      style={{
        backgroundColor: "#e6f9e6",
        backgroundImage:
          "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="flex flex-row justify-between items-center w-full max-w-4xl px-6 py-6 rounded-full shadow-2xl shadow-black/80 bg-[#e6f9e6] border border-green-200 mx-auto">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
          <div key={label} className="text-center flex-1 min-w-[70px] sm:min-w-[100px]">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900">
              {Object.values(timeLeft)[idx]}
            </p>
            <span className="text-sm sm:text-base md:text-m text-green-800">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
