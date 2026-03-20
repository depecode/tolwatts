import { motion } from "motion/react";
import { Check, Info, Calculator } from "lucide-react";
import { NavLink } from "react-router";
import { useState } from "react";

export default function Pricing() {
  const [applianceLoad, setApplianceLoad] = useState<number>(0);
  
  const packages = [
    {
      name: "Basic",
      target: "Small Homes / Essential Loads",
      capacity: "3kVA Inverter",
      battery: "5kWh Lithium Battery",
      panels: "4 x 450W Solar Panels",
      price: "₦1,850,000",
      supports: [
        "Lighting & Fans",
        "1 TV + Decoder",
        "1 Medium Fridge",
        "Laptops & Phones"
      ],
      notSupports: ["Air Conditioners", "Pumping Machines", "Electric Ovens"]
    },
    {
      name: "Standard",
      target: "Medium Homes (3-4 Bedrooms)",
      capacity: "5kVA Inverter",
      battery: "10kWh Lithium Battery",
      panels: "8 x 450W Solar Panels",
      price: "₦3,500,000",
      isPopular: true,
      supports: [
        "All Basic Load items",
        "1 Inverter AC (1HP)",
        "Water Pump (1HP)",
        "Deep Freezer"
      ],
      notSupports: ["Multiple ACs running simultaneously", "Industrial Machines"]
    },
    {
      name: "Premium",
      target: "Large Homes & Mini Estates",
      capacity: "10kVA Inverter",
      battery: "20kWh Lithium Battery",
      panels: "16 x 450W Solar Panels",
      price: "₦6,800,000",
      supports: [
        "All Standard Load items",
        "Up to 3 Inverter ACs (1.5HP)",
        "Microwave & Washing Machine",
        "Full Home Automation"
      ],
      notSupports: ["Central AC Systems"]
    }
  ];

  const faqs = [
    {
      q: "Can I pay in installments?",
      a: "Yes, we offer flexible payment plans of up to 6 months for our Standard and Premium packages through our financing partners."
    },
    {
      q: "How long do the batteries last?",
      a: "We use premium Lithium Iron Phosphate (LiFePO4) batteries which have a lifespan of 10-15 years (over 6000 cycles) with proper usage."
    },
    {
      q: "Do I still need my generator?",
      a: "Our systems are designed for 24/7 power, but during prolonged rainy days (several days of no sun), having a generator as a backup to charge the batteries is recommended."
    },
    {
      q: "Does the price cover installation?",
      a: "Yes, all prices are inclusive of site inspection, delivery within major cities, full installation, and 1-year free maintenance."
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-green-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Transparent Solar Pricing</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Choose a package that fits your home and budget. No hidden fees, just reliable power.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-3xl p-8 shadow-xl relative border-2 ${
                  pkg.isPopular ? "border-yellow-400 transform md:-translate-y-4" : "border-transparent"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{pkg.target}</p>
                  <div className="text-4xl font-extrabold text-green-700 mb-2">{pkg.price}</div>
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                    <Info size={14} /> Includes Installation & VAT
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 bg-slate-100 p-2 rounded">System Specs</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex justify-between border-b border-slate-50 pb-2">
                        <span>Inverter:</span> <span className="font-semibold text-slate-900">{pkg.capacity}</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-50 pb-2">
                        <span>Battery:</span> <span className="font-semibold text-slate-900">{pkg.battery}</span>
                      </li>
                      <li className="flex justify-between pb-2">
                        <span>Panels:</span> <span className="font-semibold text-slate-900">{pkg.panels}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 bg-green-50 text-green-800 p-2 rounded">What it Supports</h4>
                    <ul className="space-y-2">
                      {pkg.supports.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 bg-red-50 text-red-800 p-2 rounded">Limitations</h4>
                    <ul className="space-y-2 text-sm text-slate-500 italic">
                      {pkg.notSupports.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <NavLink
                  to="/contact"
                  className={`block text-center w-full py-4 rounded-xl font-bold transition-colors ${
                    pkg.isPopular 
                      ? "bg-yellow-500 text-slate-900 hover:bg-yellow-400" 
                      : "bg-green-700 text-white hover:bg-green-600"
                  }`}
                >
                  Get Started
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Calculator */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-yellow-400" />
            <Calculator className="w-16 h-16 text-yellow-400 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Quick Solar Calculator</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Not sure which package you need? Select the heavy appliances you plan to run simultaneously to estimate your load.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-left">
              {[
                { label: "AC (1HP)", watts: 1000 },
                { label: "AC (1.5HP)", watts: 1500 },
                { label: "Water Pump", watts: 800 },
                { label: "Deep Freezer", watts: 400 },
                { label: "Microwave", watts: 1200 },
                { label: "Washing Machine", watts: 800 },
                { label: "Electric Iron", watts: 1000 },
                { label: "TVs & Lighting", watts: 300 }
              ].map((appliance, idx) => (
                <label key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700 hover:bg-slate-600 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-green-500 rounded focus:ring-green-500"
                    onChange={(e) => {
                      if (e.target.checked) setApplianceLoad(prev => prev + appliance.watts);
                      else setApplianceLoad(prev => prev - appliance.watts);
                    }}
                  />
                  <div>
                    <div className="font-semibold text-sm">{appliance.label}</div>
                    <div className="text-xs text-slate-400">{appliance.watts}W</div>
                  </div>
                </label>
              ))}
            </div>

            <div className="bg-slate-900 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
              <div className="text-left">
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">Estimated Load</div>
                <div className="text-3xl font-bold text-yellow-400">{applianceLoad} Watts</div>
              </div>
              <div className="text-left">
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">Recommended Package</div>
                <div className="text-2xl font-bold text-white">
                  {applianceLoad === 0 ? "Select appliances" : 
                   applianceLoad <= 1500 ? "Basic Package" : 
                   applianceLoad <= 3000 ? "Standard Package" : 
                   "Premium Package"}
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 mt-6">
              *This is a rough estimate. For an accurate sizing, our engineers will conduct a physical load audit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <NavLink to="/contact" className="text-green-700 font-bold hover:text-green-800 underline">
              Contact our support team
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
