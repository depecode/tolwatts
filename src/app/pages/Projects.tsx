import { motion } from "motion/react";
import { MapPin, BatteryCharging, TrendingDown } from "lucide-react";

export default function Projects() {
  const caseStudies = [
    {
      id: "estate-lekki",
      title: "Luxury Service Apartments",
      location: "Lekki Phase 1, Lagos",
      systemSize: "50kW Hybrid System",
      savings: "₦850,000 / month on diesel",
      description: "A 12-unit luxury apartment complex struggling with 14-hour daily grid outages and noise complaints from tenants regarding diesel generators.",
      solution: "Installed a centralized 50kW hybrid inverter system with 120kWh Lithium battery storage, tied directly to individual unit meters for accurate billing.",
      image: "https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?auto=format&fit=crop&q=80",
    },
    {
      id: "home-abuja",
      title: "Private Residence",
      location: "Maitama, Abuja",
      systemSize: "15kW Residential System",
      savings: "₦300,000 / month on diesel",
      description: "A 5-bedroom duplex needing reliable power for ACs during the hot Abuja months and constant power for remote work.",
      solution: "A sleek rooftop installation of 40 Tier-1 monocrystalline panels paired with a 15kW smart inverter and 30kWh battery bank. App monitoring included.",
      image: "https://images.unsplash.com/photo-1623244736886-1108836855e9?auto=format&fit=crop&q=80",
    },
    {
      id: "office-ikeja",
      title: "Tech Startup HQ",
      location: "Ikeja GRA, Lagos",
      systemSize: "30kW Commercial Setup",
      savings: "Zero downtime achieved",
      description: "A growing tech company losing hours of productivity weekly due to power transition delays between grid and backup generators.",
      solution: "Deployed a 30kW UPS-grade solar solution ensuring seamless 0ms transfer time during grid failures. The roof was optimized for maximum sun exposure.",
      image: "https://images.unsplash.com/photo-1712473048798-dc71129c9a4d?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?auto=format&fit=crop&q=80"
            alt="Solar Panels"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real installations, real savings, and real impact across Nigeria. See how we're transforming the way Nigerians power their lives.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row"
            >
              <div className="w-full lg:w-1/2 h-80 lg:h-auto relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-green-700 font-semibold mb-4 text-sm uppercase tracking-wider">
                  <MapPin size={16} /> {study.location}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{study.title}</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 mb-1 text-sm">
                      <BatteryCharging size={16} /> System Size
                    </div>
                    <div className="font-bold text-slate-900">{study.systemSize}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 text-green-700 mb-1 text-sm">
                      <TrendingDown size={16} /> Est. Savings
                    </div>
                    <div className="font-bold text-green-900">{study.savings}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{study.description}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">The Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">More Installations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1626077641207-54883482bb0a?auto=format&fit=crop&q=80" alt="Inverter Installation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1723177548474-b58ada59986b?auto=format&fit=crop&q=80" alt="Engineer at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?auto=format&fit=crop&q=80" alt="Rooftop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?auto=format&fit=crop&q=80" alt="Commercial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
