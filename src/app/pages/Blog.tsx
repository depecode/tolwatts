import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

export default function Blog() {
  const posts = [
    {
      id: "cost-of-solar",
      title: "Cost of Solar in Nigeria (2024 Update)",
      excerpt: "Understanding the true cost of solar installation in Nigeria, from panels and batteries to maintenance. Why is it an upfront investment that pays off quickly?",
      author: "Engr. Emmanuel",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1623244736886-1108836855e9?auto=format&fit=crop&q=80",
      category: "Pricing"
    },
    {
      id: "sizing-your-system",
      title: "How to Size Your Solar System for a Nigerian Home",
      excerpt: "Don't overpay for capacity you don't need, and don't under-size your system. Learn the simple math behind calculating your daily energy load.",
      author: "Sarah O.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1723177548474-b58ada59986b?auto=format&fit=crop&q=80",
      category: "Guides"
    },
    {
      id: "diesel-vs-solar",
      title: "Diesel Generators vs Solar: A Financial Comparison",
      excerpt: "With the recent hike in diesel and petrol prices, how much are you really losing to your generator every month? We break down the ROI of switching to solar.",
      author: "Chukwudi M.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?auto=format&fit=crop&q=80",
      category: "Comparisons"
    },
    {
      id: "maintenance-tips",
      title: "5 Tips to Make Your Solar Batteries Last Longer",
      excerpt: "Lithium batteries are expensive. Here are practical ways to ensure your battery bank serves you for over 10 years without degrading prematurely.",
      author: "Engr. Emmanuel",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1712473048798-dc71129c9a4d?auto=format&fit=crop&q=80",
      category: "Maintenance"
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Solar Resources & Insights</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Expert advice, industry updates, and practical guides to help you navigate your transition to renewable energy in Nigeria.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <NavLink
                    to="#"
                    className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors mt-auto"
                  >
                    Read Article <ArrowRight size={16} />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-green-700 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on solar technology, pricing trends, and maintenance tips directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
