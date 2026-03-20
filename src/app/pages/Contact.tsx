import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "residential",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", inquiryType: "residential", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1626077641207-54883482bb0a?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact TolWatts</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to switch to solar? Have questions about our packages? We're here to help you get started on your journey to energy independence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3 space-y-8"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full text-green-700 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Office Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    1 CAC Street off Shiaba Street,<br />
                    Agege, Ikeja, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full text-green-700 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Phone</h4>
                  <p className="text-slate-600 mb-1">+234 706 895 2359</p>
                  <p className="text-slate-500 text-sm">Mon – Fri, 8am – 6pm</p>
                  <p className="text-slate-500 text-sm">Sat, 10am – 3pm</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-green-100 p-4 rounded-full text-green-700 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Email</h4>
                  <p className="text-slate-600">hello@tolwatts.com</p>
                </div>
              </div>

              <div className="pt-4">
                
                <a
                  href="https://wa.me/2347068952359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg"
                >
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-700 mb-6">
                      Thank you for reaching out. One of our solar experts will contact you shortly to discuss your power needs.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-green-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow bg-slate-50"
                          placeholder="Chinedu Okafor"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow bg-slate-50"
                          placeholder="chinedu@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow bg-slate-50"
                          placeholder="0801 234 5678"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-bold text-slate-700 mb-2">I am interested in</label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow bg-slate-50 appearance-none"
                        >
                          <option value="residential">Residential Solar Setup</option>
                          <option value="commercial">Commercial / Office Installation</option>
                          <option value="apartment">Service Apartment Solution</option>
                          <option value="maintenance">Maintenance Service</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow bg-slate-50 resize-none"
                        placeholder="Tell us about your current power situation and what you're looking to power (e.g. 3 ACs, fridge, TVs)..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-bold text-lg text-slate-900 transition-all ${
                        isSubmitting ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-400 shadow-lg"
                      }`}
                    >
                      {isSubmitting ? "Sending Request..." : "Request Free Consultation"}
                    </button>

                    <p className="text-xs text-slate-500 text-center mt-4">
                      Your information is secure. We will never share your details with third parties.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full relative">
        <iframe
          title="Tolwatts Technology Location"
          src="https://maps.google.com/maps?q=6.6182123,3.3276147&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 z-10 flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full text-green-700">
            <MapPin size={20} />
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm">Tolwatts Technology</p>
            <p className="text-slate-500 text-xs">1 CAC Street, Agege, Lagos</p>
          </div>
        </div>
      </section>

    </div>
  );
}