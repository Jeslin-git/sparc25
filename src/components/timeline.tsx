"use client";
import React, { useState } from "react";

const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Registration");

  const events = {
  "Registration": [
    {
      "name": "Registration",
      "date": "04 SEP 2025",
      "time": "09:00 - 09:30",
      "heading": "Registration",
      "about": "Start grabbing your tickets before it runs out.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    }
  ],
  "Day1": [
    {
      "name": "Team SPARC",
      "date": "04 SEP 2025",
      "time": "09:30 - 10:00",
      "heading": "Ice Breaking Session",
      "about": "Interactive activities to get participants comfortable and engaged.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Workshop Facilitators",
      "date": "04 SEP 2025",
      "time": "10:00 - 11:00",
      "heading": "Workshop: Design Thinking: Solve, Create, Innovate",
      "about": "Engage in a hands-on workshop to apply design thinking principles.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Panelists",
      "date": "04 SEP 2025",
      "time": "11:00 - 12:00",
      "heading": "Panel Talk: Building Your Network: From Campus to Career",
      "about": "Experts share insights on building a strong professional network.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Team SPARC",
      "date": "04 SEP 2025",
      "time": "12:00 - 12:30",
      "heading": "Energizer Activity",
      "about": "Fun activities to re-energize participants.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Organizers",
      "date": "04 SEP 2025",
      "time": "12:30 - 13:30",
      "heading": "Lunch",
      "about": "Lunch break to relax and recharge.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Facilitators",
      "date": "04 SEP 2025",
      "time": "13:30 - 14:30",
      "heading": "Team Building Session",
      "about": "Activities to develop teamwork and collaboration skills.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Career Mentors",
      "date": "04 SEP 2025",
      "time": "14:30 - 15:30",
      "heading": "Roadmap for Students - Internships, Skills & Opportunities",
      "about": "Get insights into planning your career path effectively.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Organizers",
      "date": "04 SEP 2025",
      "time": "15:30 - 16:00",
      "heading": "Tea Break",
      "about": "Refresh and network over a cup of tea.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "SPARC Volunteers",
      "date": "04 SEP 2025",
      "time": "16:00 - 17:00",
      "heading": "Fun Games",
      "about": "Participate in fun and engaging games.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Participants",
      "date": "04 SEP 2025",
      "time": "17:00 - 18:00",
      "heading": "Cultural Performances and Networking",
      "about": "Enjoy vibrant performances and connect with peers.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    }
  ],
  "Day2": [
    {
      "name": "Experts",
      "date": "05 SEP 2025",
      "time": "09:00 - 10:30",
      "heading": "Cracking Interviews & Excelling in Group Discussions",
      "about": "Learn techniques to excel in interviews and GDs, plus LinkedIn hacks.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Organizers",
      "date": "05 SEP 2025",
      "time": "10:30 - 11:00",
      "heading": "Tea Break",
      "about": "Short break to recharge.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Finance Speaker",
      "date": "05 SEP 2025",
      "time": "11:00 - 12:00",
      "heading": "Finance 101 - Understanding Money Basics",
      "about": "Learn foundational financial knowledge for students.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Team SPARC",
      "date": "05 SEP 2025",
      "time": "12:00 - 12:30",
      "heading": "Fun Game/Energizer",
      "about": "Get recharged through interactive games.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Organizers",
      "date": "05 SEP 2025",
      "time": "12:30 - 13:30",
      "heading": "Lunch",
      "about": "Lunch break for all participants.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Leadership Coach",
      "date": "05 SEP 2025",
      "time": "13:30 - 14:30",
      "heading": "MD Session",
      "about": "Session focused on management and decision-making skills.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Career Mentor",
      "date": "05 SEP 2025",
      "time": "14:30 - 15:30",
      "heading": "Session: Negotiate and Navigate",
      "about": "Learn how to negotiate opportunities and navigate career paths.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    },
    {
      "name": "Organizers",
      "date": "05 SEP 2025",
      "time": "15:30 - 17:00",
      "heading": "Closing Ceremony",
      "about": "Wrap-up of SPARC 2025 with acknowledgments and reflections.",
      "img": "3a89269d-e9ff-49ba-a0da-79b6bedbd4a8.png"
    }
  ]
}


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
