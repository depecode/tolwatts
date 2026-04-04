import { ArrowRight, CheckCircle2, Zap, Shield, Leaf, Lightbulb, Users, MessageCircle } from "lucide-react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

export default function Home() {
  const stats = [
    { label: "Installations Completed", value: "500+" },
    { label: "kW Deployed", value: "2,500+" },
    { label: "Happy Clients", value: "100%" },
    { label: "Years Experience", value: "10+" },
  ];

  const services = [
    {
      title: "Premium Services",
      subtitle: "Solar Installation",
      description: "Professional installation of high-quality solar panels, inverters, and lithium battery systems. Guaranteed reliability and maximum efficiency for your home or business.",
      icon: <Zap className="w-12 h-12 text-green-500 mb-4" />,
      link: "/services",
      features: ["Tier-1 Solar Panels", "Smart Inverters", "Battery Storage", "10+ Year Warranty"]
    },
    {
      title: "Expert Training",
      subtitle: "Educational Programs",
      description: "Comprehensive training and certification programs for solar installation, maintenance, and system optimization. Empower your team with professional expertise.",
      icon: <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />,
      link: "/services",
      features: ["Hands-on Training", "Certification", "Technical Support", "Ongoing Education"]
    },
    {
      title: "Dedicated Support",
      subtitle: "24/7 Maintenance & Assistance",
      description: "Round-the-clock technical support and preventive maintenance to keep your system running at peak performance. Expert engineers ready to assist.",
      icon: <Users className="w-12 h-12 text-blue-500 mb-4" />,
      link: "/services",
      features: ["24/7 Hotline", "Rapid Response", "Preventive Care", "Performance Monitoring"]
    },
  ];

  const testimonials = [
    {
      name: "Chukwudi O.",
      role: "Homeowner, Lekki",
      text: "TolWatts completely transformed our power situation. We no longer rely on noisy generators, and the savings on diesel are incredible. Highly recommend their professional team!",
      rating: 5,
    },
    {
      name: "Amina Y.",
      role: "Business Owner, Abuja",
      text: "As a small business, power outages were killing our productivity. Since installing a 10kW system with TolWatts, we've had uninterrupted power for 6 months straight.",
      rating: 5,
    },
    {
      name: "Tunde B.",
      role: "Estate Manager, Ikeja",
      text: "We contracted them to outfit a new service apartment complex. Their pricing was transparent, and the installation was neat and timely. Outstanding service.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?auto=format&fit=crop&q=80"
            alt="Solar panels on a roof"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 font-medium text-sm mb-6 border border-green-500/30">
                <Zap size={16} /> <span>Premium Solar Solutions for Nigeria</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">Harness the Power</span> of Clean Energy
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
                Transform your home or business with guaranteed reliability and efficiency. Professional solar installation backed by expert training and lifetime support. Experience uninterrupted power today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/2347068952359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
                <NavLink
                  to="/services"
                  className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
                >
                  Explore Services
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Trusted by Homes & Businesses Across Nigeria
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Using text placeholders since we don't have real logos */}
            <div className="text-xl font-bold font-serif">Lagos Estates</div>
            <div className="text-xl font-bold font-mono">Abuja Tech Hub</div>
            <div className="text-xl font-bold">FirstBank SMEs</div>
            <div className="text-xl font-bold italic">Naija Retailers</div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Powering Nigeria's Future, One Rooftop at a Time
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At TolWatts, we understand the unique power challenges faced by Nigerians. Our mission is to provide premium, long-lasting solar solutions that ensure you never have to sit in the dark or endure the noise and cost of a generator again.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Tailored solutions for local energy demands",
                  "High-quality Tier-1 solar panels & lithium batteries",
                  "Expert installation by certified Nigerian engineers",
                  "Comprehensive warranty and after-sales support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <NavLink to="/about" className="text-green-700 font-bold hover:text-green-800 flex items-center gap-2">
                Learn more about us <ArrowRight size={18} />
              </NavLink>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1723177548474-b58ada59986b?auto=format&fit=crop&q=80"
                alt="Engineer installing solar panels"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Certified Experts</h4>
                  <p className="text-sm text-slate-600">Safe, compliant, and durable installations.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600">
              We provide end-to-end solar solutions tailored for different scales of energy needs across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-green-500 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/5 to-transparent"></div>
                {service.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-sm text-green-700 font-semibold mb-3">{service.subtitle}</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <NavLink
                  to={service.link}
                  className="inline-flex items-center text-green-700 font-semibold group-hover:text-green-800"
                >
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-green-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Nigerians Are Saying</h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. Hear from the families and businesses enjoying steady power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                <div className="mt-auto border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?auto=format&fit=crop&q=80"
                alt="Solar panels creating sustainable energy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="text-sm font-bold text-green-700 uppercase tracking-widest">Sustainable Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Reduce Your Carbon Footprint</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Every solar installation with TolWatts helps reduce Nigeria's dependence on diesel generators and fossil fuels. By choosing renewable energy, you're contributing to a cleaner environment for future generations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Leaf className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Eliminate Diesel Emissions</h4>
                    <p className="text-slate-600 text-sm">Stop using polluting generators and join the clean energy revolution.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Save Resources</h4>
                    <p className="text-slate-600 text-sm">Harness infinite solar energy and reduce dependence on finite resources.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Set an Example</h4>
                    <p className="text-slate-600 text-sm">Be part of Nigeria's sustainable future and inspire your community.</p>
                  </div>
                </div>
              </div>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800"
              >
                Learn About Our Mission <ArrowRight size={18} />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-700 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1623244736886-1108836855e9?auto=format&fit=crop&q=80"
            alt="Happy family with solar power"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Guaranteed Reliability & Efficiency
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Join thousands of Nigerians experiencing uninterrupted, affordable power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2347068952359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
            >
              <MessageCircle size={20} /> Contact Us on WhatsApp
            </a>
            <NavLink
              to="/contact"
              className="inline-flex justify-center items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
