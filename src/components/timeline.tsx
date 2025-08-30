"use client";
import React, { useState } from "react";

const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Registration");

  const events = {
    Registration: [
      {
        name: "Registration Desk",
        date: "01 AUG 2025",
        time: "09:00 - 10:00",
        heading: "Participant Check-in",
        about: "Collect your passes and event kits.",
      },
    ],
    Day1: [
      {
        name: "Speaker Name",
        date: "01 AUG 2025",
        time: "10:00 - 11:00",
        heading: "Opening Keynote",
        about: "Kick-off the conference with inspiring talks.",
      },
      {
        name: "Workshop Host",
        date: "01 AUG 2025",
        time: "11:30 - 13:00",
        heading: "Innovation Workshop",
        about: "Hands-on session to brainstorm new ideas.",
      },
    ],
    Day2: [
      {
        name: "Panelists",
        date: "02 AUG 2025",
        time: "09:30 - 11:00",
        heading: "Panel Discussion",
        about: "Industry experts discuss future trends.",
      },
    ],
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
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
          className="inline-block text-green-900 text-sm px-12 py-4 rounded-full font-bold mb-4 shadow-2xl shadow-black/60"
          style={{ backgroundColor: "#8DC63F" }}
        >
          Timeline of SPARC 2024
        </div>

        {/* Heading */}
        <h2 className="font-chillax text-2xl sm:text-3xl md:text-4xl font-bold text-green-950 mb-10">
          An event to inspire, connect, and grow <br /> through talks and
          workshops
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 font-chillax font-medium text-green-900 mb-8">
          {["Registration", "Day1", "Day2"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition ${
                activeTab === tab ? "font-bold text-green-700" : "text-green-500"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Event Cards Container */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/30 p-10">
          <div className="space-y-8">
            {events[activeTab as keyof typeof events].map((event, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-6 rounded-2xl shadow-md"
                style={{ backgroundColor: "#E5FFE6" }}
              >
                {/* Placeholder Circle */}
                <div className="w-16 h-16 bg-white rounded-full shadow-inner"></div>

                {/* Event Info */}
                <div className="flex-1 text-left">
                  <p className="font-bold text-green-900">{event.name}</p>
                  <p className="text-sm text-green-700">
                    {event.date} | {event.time}
                  </p>
                  <p className="font-semibold text-green-800 mt-2">
                    {event.heading}
                  </p>
                  <p className="text-sm text-green-700">{event.about}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
