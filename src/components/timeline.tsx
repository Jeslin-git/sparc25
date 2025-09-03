"use client";
import React, { useState } from "react";

const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Registration");

  const events = {
    Registration: [
      {
        name: "Registration",
        date: "04 SEP 2025",
        time: "09:00 - 09:30",
        heading: "Registration",
        about: "Start grabbing your tickets before it runs out.",
      },
    ],
    Day1: [
      {
        name: "Team SPARC",
        date: "04 SEP 2025",
        time: "09:30 - 10:00",
        heading: "Ice Breaking Session",
        about: "Interactive activities to get participants comfortable and engaged.",
      },
      {
        name: "Organizers",
        date: "04 SEP 2025",
        time: "10:00 - 14:00",
        heading: "IV / Field Trip with Lunch",
        about: "Explore and learn with an exciting field trip followed by lunch.",
      },
      {
        name: "Team SPARC",
        date: "04 SEP 2025",
        time: "14:00 - 14:30",
        heading: "Break",
        about: "Refresh yourself before the next session.",
      },
      {
        name: "Facilitators",
        date: "04 SEP 2025",
        time: "14:30 - 16:00",
        heading: "Team Building Session",
        about: "Activities to develop teamwork and collaboration skills.",
      },
      {
        name: "Organizers",
        date: "04 SEP 2025",
        time: "16:30 - 17:00",
        heading: "Tea Break",
        about: "Relax and network over tea.",
      },
      {
        name: "SPARC Volunteers",
        date: "04 SEP 2025",
        time: "17:00 - 18:00",
        heading: "Fun Games",
        about: "Engaging and fun activities for all participants.",
      },
      {
        name: "Participants",
        date: "04 SEP 2025",
        time: "18:00 - 19:00",
        heading: "Culturals",
        about: "Enjoy performances and cultural programs.",
      },
    ],
    Day2: [
      {
        name: "Experts",
        date: "05 SEP 2025",
        time: "09:00 - 10:30",
        heading: "Cracking Interviews & Excelling in Group Discussions",
        about: "Learn interview skills and GD strategies.",
      },
      {
        name: "Organizers",
        date: "05 SEP 2025",
        time: "10:30 - 11:00",
        heading: "Tea Break",
        about: "Take a short refreshment break.",
      },
      {
        name: "Finance Speaker",
        date: "05 SEP 2025",
        time: "11:00 - 12:30",
        heading: "Finance 101 - Understanding Money Basics",
        about: "Gain knowledge about financial fundamentals.",
      },
      {
        name: "Team SPARC",
        date: "05 SEP 2025",
        time: "12:30 - 13:30",
        heading: "Lunch",
        about: "Lunch break to relax and recharge.",
      },
      {
        name: "Leadership Coach",
        date: "05 SEP 2025",
        time: "13:30 - 15:00",
        heading: "Becoming a Leader: Decision Making & Critical Thinking",
        about: "Sharpen your leadership and problem-solving abilities.",
      },
      {
        name: "Career Mentor",
        date: "05 SEP 2025",
        time: "15:00 - 16:00",
        heading: "LinkedIn Lectures",
        about: "Learn to leverage LinkedIn for networking and opportunities.",
      },
      {
        name: "Organizers",
        date: "05 SEP 2025",
        time: "16:00 - 17:00",
        heading: "Closing Ceremony",
        about: "Wrap-up of SPARC 2025 with acknowledgments and reflections.",
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
          Timeline of SPARC 2025
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
