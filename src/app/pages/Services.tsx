import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Home, Building2, Wrench } from "lucide-react";
import { NavLink } from "react-router";

export default function Services() {
  const servicesList = [
    {
      id: "residential",
      title: "Residential Solar Installation",
      icon: <Home className="w-8 h-8 text-yellow-500" />,
      description: "Complete power freedom for your home. Say goodbye to the noisy generators and unpredictable grid supply.",
      benefits: [
        "Uninterrupted power for TVs, fridges, ACs, and lights",
        "Zero noise pollution in your neighborhood",
        "Significant reduction in monthly utility bills",
        "Increased property value"
      ],
      process: "We start with a home energy audit, design a system matching your load, install within 2-3 days, and provide user training.",
      costRange: "₦1.5M - ₦6.5M",
      image: "https://images.unsplash.com/photo-1623244736886-1108836855e9?auto=format&fit=crop&q=80"
    },
    {
      id: "commercial",
      title: "Corporate & Commercial Installations",
      icon: <Building2 className="w-8 h-8 text-yellow-500" />,
      description: "Scale your business without the crippling cost of diesel. Reliable power means zero downtime and higher productivity.",
      benefits: [
        "Slash operational costs by up to 70%",
        "100% uptime for servers and office equipment",
        "Tax benefits and green energy branding",
        "Scalable systems as your business grows"
      ],
      process: "Comprehensive load profiling, ROI analysis, professional installation matching building aesthetics, and continuous remote monitoring.",
      costRange: "Custom Pricing (Based on load)",
      image: "https://images.unsplash.com/photo-1712473048798-dc71129c9a4d?auto=format&fit=crop&q=80"
    },
    {
      id: "apartments",
      title: "Service Apartment Solutions",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      description: "Attract premium tenants in cities like Lagos and Abuja by offering 24/7 power as a standard amenity.",
      benefits: [
        "Higher rental yields and occupancy rates",
        "Eliminate tenant complaints about power",
        "Centralized or individual unit metering",
        "Lower maintenance than heavy-duty diesel generators"
      ],
      process: "Site evaluation, integration with existing grid/generators (hybrid setup), phased installation to minimize disruption.",
      costRange: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?auto=format&fit=crop&q=80"
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      description: "Keep your system running at peak efficiency. We service systems even if we didn't install them.",
      benefits: [
        "Extend battery lifespan",
        "Maintain maximum panel efficiency",
        "Preventive care avoids costly breakdowns",
        "Firmware updates for smart inverters"
      ],
      process: "Panel cleaning, battery health checks, inverter diagnostics, and connection tightening.",
      costRange: "Starting from ₦25,000/visit",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-green-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Solar Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            From single-family homes in Lagos to corporate offices in Abuja, we have a solar solution designed to meet your specific power needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-xl relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-4 py-2 rounded-lg font-bold">
                    {service.icon} Estimated Cost: {service.costRange}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg">Key Benefits:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h3 className="font-bold text-green-800 mb-2">Our Process:</h3>
                  <p className="text-green-700 text-sm">{service.process}</p>
                </div>

                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors mt-4"
                >
                  Request a Quote <ArrowRight size={20} />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Speak to one of our solar engineers for free. We'll help you audit your energy consumption and recommend the perfect setup.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Talk to an Expert
          </NavLink>
        </div>
      </section>
    </div>
  );
}
