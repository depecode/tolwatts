import { BrowserRouter, Routes, Route } from "react-router";
import { RootLayout } from "./app/layout/RootLayout";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Services from "./app/pages/Services";
import Projects from "./app/pages/Projects";
import Pricing from "./app/pages/Pricing";
import Blog from "./app/pages/Blog";
import Contact from "./app/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}