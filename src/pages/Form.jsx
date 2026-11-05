import React, { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Flame,
  AlertCircle,
  RefreshCw,
  ShoppingBag
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const SimpleContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    product: 'Chandan Dhoop Stick (Natural Sandalwood - ₹94)',
    city: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const productOptions = [
    'Chandan Dhoop Stick (Natural Sandalwood - ₹94)',
    'Kailash Dhoop Stick (Natural Mountain Herbs - ₹47)',
    'Kapur Dhoop Stick (Premium Camphor - ₹94)',
    'Ponds Dhoop Stick (Calming Floral & Yoga - ₹47)',
    'Guggal Dhoop Stick (Sacred Guggal & Loban - ₹94)',
    'All 5 Nilkanth Dham Dhoop Sticks (Assorted Pack)',
    'General Inquiry / Temple Consultation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.mobile.trim() || !/^\+?\d{10,}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city or address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    const whatsappNumber = '918850011652';

    // Format clean, professional WhatsApp inquiry message
    const lines = [
      '✨ *New Inquiry - Nilkanth Dham Dhoop Sticks*',
      '',
      `*Full Name:* ${formData.name.trim()}`,
      `*Mobile / WhatsApp:* ${formData.mobile.trim()}`,
      formData.email.trim() ? `*Email:* ${formData.email.trim()}` : null,
      `*City / Location:* ${formData.city.trim()}`,
      `*Interested Product:* ${formData.product}`,
      formData.message.trim() ? `*Message / Requirement:* ${formData.message.trim()}` : null,
      '',
      'Sent directly from Nilkanth Dham Dhoop Sticks Website'
    ].filter(Boolean);

    const messageText = lines.join('\n');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;

    setLastWhatsAppUrl(whatsappUrl);

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      address1: formData.city,
      address2: '',
      preferredAttar: [formData.product],
      preferredFragrance: [formData.product],
      occasionUse: [formData.message || 'General Enquiry'],
      intensityLevel: ['Normal'],
      message: formData.message
    };

    // Send payload to backend in background for archiving/CRM
    try {
      fetch('https://adminmega.megascale.co.in/Attar_form_submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch((err) => console.log('Contact form CRM sync:', err));
    } catch (err) {
      console.log('Contact form CRM sync:', err);
    }

    // Open WhatsApp directly
    try {
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch {
      window.location.href = whatsappUrl;
    }

    setIsSuccess(true);
    setIsLoading(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      product: 'Chandan Dhoop Stick (Natural Sandalwood - ₹94)',
      city: '',
      message: ''
    });
  };

  return (
    <section
      id="contactForm"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fefcf8] via-[#faf5ec] to-[#f5ebdb] overflow-hidden"
    >
      {/* Decorative Subtle Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#fbf0f2]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
       
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a0b14] leading-tight mb-3">
          Get in Touch With Our Specialists
        </h2>
        <p className="text-[#785324] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have a question about our natural dhoop stick fragrances, daily pooja rituals, or bulk delivery? Send us a quick message below and our specialists will assist you promptly.
        </p>
      </div>

      {/* Main Container Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-[#d4af37]/40 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* ================= LEFT COLUMN: CONTACT DETAILS & HERITAGE ================= */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#4a0b14] via-[#5c101c] to-[#2b050b] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Corner Glows */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#d4af37]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#7d1524]/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Brand Logo inside a Luxury Capsule */}
              <div className="mb-6">
                <div className="inline-block bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#d4af37]/50 mb-3">
                  <img
                    src="/logo.png"
                    alt="Nilkanth Dham Dhoop Sticks Logo"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                  Direct Inquiries & Support
                </h3>
                <p className="text-[#f9edd8]/85 text-xs sm:text-sm leading-relaxed">
                  Authentic natural dhoop sticks handcrafted with pure Sandalwood, Himalayan herbs, Camphor crystals, and Guggal-Loban resins for holy home peace and pooja rituals.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#e5b85c] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/95">
                    100% Charcoal-Free Clean Burning
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                  <Flame className="w-4 h-4 text-[#e5b85c] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white/95">
                    Sacred Natural Botanicals & Pure Tree Resins
                  </span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-white/15">
                <a
                  href="tel:+918850011652"
                  className="flex items-center gap-3.5 text-white/90 hover:text-white group transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#e5b85c] group-hover:bg-[#7d1524] group-hover:text-white transition-all flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60">Call Us Directly</div>
                    <div className="text-sm font-semibold">+91 88500 11652</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918850011652?text=Hello%20Nilkanth%20Dham,%20I%20would%20like%20to%20inquire%20about%20your%20natural%20dhoop%20sticks."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-white/90 hover:text-white group transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all flex-shrink-0">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60">WhatsApp Support</div>
                    <div className="text-sm font-semibold">Instant Chat Assistance</div>
                  </div>
                </a>

                <a
                  href="mailto:support@nilkanthdham.in"
                  className="flex items-center gap-3.5 text-white/90 hover:text-white group transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#e5b85c] group-hover:bg-[#7d1524] group-hover:text-white transition-all flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60">Email Support</div>
                    <div className="text-sm font-semibold">support@nilkanthdham.in</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 text-white/90">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#e5b85c] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-white/80 leading-snug">
                      412, New Escon Plaza, Amroli, Surat, Gujarat 394107
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Business Hours */}
            <div className="mt-8 pt-4 border-t border-white/15 text-xs text-white/70 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#e5b85c]" />
                <span>Mon - Sat: 9 AM - 6 PM</span>
              </span>
              <span className="text-[#e5b85c] font-medium">Sunday: Closed</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SIMPLE CONTACT FORM ================= */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
            
            {/* Success State */}
            {isSuccess ? (
              <div className="py-8 px-4 text-center my-auto animate-fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#fbf0f2] border-2 border-[#7d1524] flex items-center justify-center text-[#7d1524] mb-5 shadow-lg shadow-[#7d1524]/15">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4a0b14] mb-2">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-[#5c4044] text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
                  Your inquiry details have been prepared and forwarded to WhatsApp. If WhatsApp did not open automatically, please tap the button below to send your message directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={lastWhatsAppUrl || "https://wa.me/918850011652"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold shadow-md hover:bg-[#20ba59] transition-all cursor-pointer text-sm"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#eadbca] text-[#4a0b14] font-semibold hover:bg-[#faf6ef] transition-all cursor-pointer text-sm"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#4a0b14]">
                    Send Us a Message
                  </h3>
                  <p className="text-[#785324] text-xs sm:text-sm mt-0.5">
                    Fill in your details below and we will get back to you right away.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#4a0b14] uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-[#7d1524]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5922c]" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rameshwar Sharma"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#eadbca] text-sm text-[#3b191d] focus:border-[#7d1524] focus:ring-4 focus:ring-[#7d1524]/15 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-xs text-[#7d1524] font-semibold mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Mobile & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-[#4a0b14] uppercase tracking-wider mb-1.5">
                      Mobile / WhatsApp <span className="text-[#7d1524]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5922c]" />
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#eadbca] text-sm text-[#3b191d] focus:border-[#7d1524] focus:ring-4 focus:ring-[#7d1524]/15 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                    {errors.mobile && (
                      <div className="flex items-center gap-1.5 text-xs text-[#7d1524] font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.mobile}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-[#4a0b14] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5922c]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#eadbca] text-sm text-[#3b191d] focus:border-[#7d1524] focus:ring-4 focus:ring-[#7d1524]/15 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                    {errors.email && (
                      <div className="flex items-center gap-1.5 text-xs text-[#7d1524] font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Dhoop Stick Selection & City Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Dhoop Stick Variant Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-[#4a0b14] uppercase tracking-wider mb-1.5">
                      Interested Product / Topic
                    </label>
                    <div className="relative">
                      <ShoppingBag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5922c] pointer-events-none" />
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#eadbca] text-xs sm:text-sm text-[#3b191d] focus:border-[#7d1524] focus:ring-4 focus:ring-[#7d1524]/15 outline-none transition-all bg-white cursor-pointer"
                      >
                        {productOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* City / Delivery Address */}
                  <div>
                    <label className="block text-xs font-bold text-[#4a0b14] uppercase tracking-wider mb-1.5">
                      City / Location <span className="text-[#7d1524]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5922c]" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai, Surat, Delhi"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#eadbca] text-sm text-[#3b191d] focus:border-[#7d1524] focus:ring-4 focus:ring-[#7d1524]/15 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                    {errors.city && (
                      <div className="flex items-center gap-1.5 text-xs text-[#7d1524] font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.city}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message / Requirement */}
                <div>
                  <label className="block text-xs font-bold text-[#4a0b14] uppercase tracking-wider mb-1.5">
                    Your Message / Requirement <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#c5922c]" />
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about fragrance notes, pack quantity, bulk rates, or custom needs..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#eadbca] text-sm text-[#3b191d] focus:border-[#7d1524] focus:ring-4 focus:ring-[#7d1524]/15 outline-none transition-all resize-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7d1524] via-[#8c1b2c] to-[#5c0f1c] hover:from-[#5c0f1c] hover:to-[#3e0710] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-[#7d1524]/30 border border-[#d4af37]/40 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Your Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#785324] mt-2">
                    🔒 We respect your privacy. No spam — only direct responses from our team.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContactForm;