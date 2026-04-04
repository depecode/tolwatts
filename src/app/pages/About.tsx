import { motion } from "motion/react";
import { ShieldCheck, Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1712473048798-dc71129c9a4d?auto=format&fit=crop&q=80"
            alt="Office Team"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About TolWatts</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Lighting up Nigeria with reliable, affordable, and clean energy solutions since 2015.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">About the Brand</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">TolWatts Technology</h3>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  At <span className="font-semibold text-slate-900">TOLWATTS TECHNOLOGY</span>, we are pioneers in the renewable energy sector, driven by a profound commitment to a cleaner and brighter future. With a foundation built on expertise and a passion for excellence, we offer premium services that harness the power of renewable energy to transform lives and power homes across the globe.
                </p>
                <p>
                  What started as a small team of engineers installing basic setups in Lagos has grown into a nationwide operation providing solar for homes and businesses across Nigeria. Over the past decade, we have deployed thousands of kilowatts of solar power across residential homes, service apartments, and corporate organizations.
                </p>
                <p>
                  We understand the local terrain, the grid unreliability, and the heavy financial burden of running diesel and petrol generators. Today, we are proud to be a trusted name in the Nigerian renewable energy sector, known for our transparent pricing, expert installations, and unmatched after-sales support.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?auto=format&fit=crop&q=80"
                alt="Solar Panels on modern building"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-green-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To provide accessible, high-quality, and cost-effective solar energy solutions that empower Nigerian homes and businesses to thrive without the interruption of power outages.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-green-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the leading catalyst in Nigeria's transition to clean and sustainable energy, ensuring every household and business has access to uninterrupted power by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Choose TolWatts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6">
              <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Local Expertise</h4>
              <p className="text-slate-600">
                We design our systems specifically for the Nigerian climate and grid behavior, ensuring components can handle voltage fluctuations and intense heat.
              </p>
            </div>
            <div className="p-6">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Dedicated Support</h4>
              <p className="text-slate-600">
                Our relationship doesn't end after installation. Our technical team provides rapid response maintenance across major Nigerian cities.
              </p>
            </div>
            <div className="p-6">
              <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Solid Warranties</h4>
              <p className="text-slate-600">
                We use only Tier-1 panels and premium Lithium batteries, backed by comprehensive warranties of up to 10 years for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
