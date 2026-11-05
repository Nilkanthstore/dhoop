import React from "react";
import WhatsAppButton from "./components/whatsapp";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/nav";
import ReturnPolicy from "./pages/Return_policy";
import PrivacyPolicy from "./pages/Privacy-policy";
import TermsAndConditions from "./pages/Terms&Condition";
import ShippingPolicy from "./pages/Shiping_policy";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetail";
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TermsAndConditions />} />
          <Route path="/shiping-policy" element={<ShippingPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </>
    </>
  );
}
