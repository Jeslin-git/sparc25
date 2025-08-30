import React from "react";

const About: React.FC = () => {
  return (
    <section 
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 50%, #8BC34A 100%)",
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 30px 30px, 20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div 
                className="w-80 h-96 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl"
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                <div className="w-64 h-80 rounded-2xl bg-white/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">👤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-8">
            <h2 className="font-chillax text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              The Student Professional<br />
              Awareness Regional Conclave
            </h2>
            
            <p className="text-lg leading-relaxed opacity-95 max-w-2xl">
              SPARC is hosted by IEEE MACE SB, is a dynamic event focused on bridging academic and corporate needs. It emphasises on developing communication and professional skills among students through expert talks and competitions refining non-technical abilities. SPARC addresses the crucial gap in communication and professional skills among students, aiming to equip them with the tools to succeed in the job market and make informed career decisions.
            </p>

            {/* Statistics */}
            <div className="flex gap-12 py-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  2017
                </div>
                <div className="text-sm opacity-80 font-medium">Started in</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  02
                </div>
                <div className="text-sm opacity-80 font-medium">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm opacity-80 font-medium">Speakers & Workshops</div>
              </div>
            </div>

            {/* Register Button */}
            <button 
              className="px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "rgba(255, 255, 255, 0.15)" }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;