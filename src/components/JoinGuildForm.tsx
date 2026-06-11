/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { Contractor, PortfolioItem, VettingTier, CategoryInfo, QuoteRequest } from "../types";

// Helpful mock portfolio photo presets so they can easily build gorgeous portfolios with matching aesthetics
const PORTFOLIO_PHOTO_PRESETS = [
  {
    name: "Architectural Smart Electrical System",
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    cat: "electrician"
  },
  {
    name: "Ambient Custom Living Room Lighting",
    url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    cat: "electrician"
  },
  {
    name: "Venetian Burnished Plaster Accent",
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    cat: "painter"
  },
  {
    name: "Full Exterior Siding Coating Spray",
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    cat: "painter"
  },
  {
    name: "Bespoke Evening Wedding Layout",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
    cat: "event_planner"
  },
  {
    name: "Eco-Conscious Stage Setup",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    cat: "event_planner"
  },
  {
    name: "Premium Bathroom Tile Renovation",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    cat: "custom"
  },
  {
    name: "Lawn & Hardscape Design",
    url: "https://images.unsplash.com/photo-1558904541-efa8c1a68f6f?w=800&q=80",
    cat: "custom"
  }
];

interface JoinGuildFormProps {
  categories: CategoryInfo[];
  existingContractors: Contractor[];
  allLeads: QuoteRequest[];
  onAddContractor: (contractor: Contractor) => void;
  onUpdateLeadStatus: (leadId: string, status: "responded" | "declined") => void;
}

export const JoinGuildForm: React.FC<JoinGuildFormProps> = ({
  categories,
  existingContractors,
  allLeads,
  onAddContractor,
  onUpdateLeadStatus
}) => {
  const [activeSegment, setActiveSegment] = React.useState<"register" | "leads">("register");

  // Selection state for Simulated Provider Login (to view their lead inbox)
  const [loggedProviderId, setLoggedProviderId] = React.useState<string>(existingContractors[0]?.id || "");

  // Registration Form States
  const [name, setName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [category, setCategory] = React.useState(categories[0]?.id || "electrician");
  const [title, setTitle] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [city, setCity] = React.useState("Lahore");
  const [location, setLocation] = React.useState("DHA Phase 5");
  const [hourlyRate, setHourlyRate] = React.useState("Rs. 1,000 / visit");
  const [licenseNumber, setLicenseNumber] = React.useState("");
  const [insuranceAmount, setInsuranceAmount] = React.useState("$1,000,000 Liability Cover");
  const [vettedStatus, setVettedStatus] = React.useState<VettingTier>(VettingTier.VERIFIED);
  const [yearsInBusiness, setYearsInBusiness] = React.useState(3);

  // New Portfolio Item entry state
  const [portfolios, setPortfolios] = React.useState<PortfolioItem[]>([]);
  const [portTitle, setPortTitle] = React.useState("");
  const [portDesc, setPortDesc] = React.useState("");
  const [portImgUrl, setPortImgUrl] = React.useState(PORTFOLIO_PHOTO_PRESETS[0].url);

  const [registerSuccess, setRegisterSuccess] = React.useState(false);

  // Handle adding current portfolio builder entry to list
  const addPortfolioItem = () => {
    if (!portTitle.trim()) return;

    const newItem: PortfolioItem = {
      id: "port_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      title: portTitle.trim(),
      description: portDesc.trim(),
      imageUrl: portImgUrl,
      completedDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })
    };

    setPortfolios([...portfolios, newItem]);
    setPortTitle("");
    setPortDesc("");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !companyName.trim() || !title.trim() || !bio.trim() || !email.trim()) return;

    // Default portfolio item in case they added nothing
    const currentPortfolios = portfolios.length > 0 ? portfolios : [
      {
        id: "port_default",
        title: "Initial Specialized Project Service",
        description: "Comprehensive home architectural completion conforming with state construction guidelines.",
        imageUrl: PORTFOLIO_PHOTO_PRESETS.find(p => p.cat === category)?.url || PORTFOLIO_PHOTO_PRESETS[6].url,
        completedDate: "May 2026"
      }
    ];

    const newContractor: Contractor = {
      id: "custom_c_" + Date.now(),
      name: name.trim(),
      companyName: companyName.trim(),
      category,
      title: title.trim(),
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", // Premium universal default face
      bio: bio.trim(),
      phone: phone.trim() || "+92 300 1122334",
      whatsapp: whatsapp.trim() || phone.trim() || "+923001122334",
      email: email.trim(),
      website: website.trim() || `https://www.${companyName.toLowerCase().replace(/[^a-z0-9]/g, "")}.com.pk`,
      location: location.trim() || "DHA Phase 5",
      city: city,
      rating: 5.0, // New listing stars
      reviewCount: 1, // Start with 1 default mock review or 0
      yearsInBusiness,
      vettedStatus,
      verifiedDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      licenseNumber: licenseNumber.trim() || `PK-TRD-${Math.floor(10000 + Math.random() * 90000)}`,
      insuranceAmount,
      hourlyRate,
      portfolio: currentPortfolios,
      reviews: [
        {
          id: "r_init_" + Date.now(),
          author: "Guild Board of Overseers",
          rating: 5,
          date: "Verification Day",
          comment: "This trade participant has submitted verifiable licensing files, commercial insurance policies, and has pledged to deliver excellent custom outcomes.",
          projectCompleted: "Guild Vetted Verification Audit",
          verifiedHired: true
        }
      ],
      isCustom: true
    };

    onAddContractor(newContractor);
    setRegisterSuccess(true);
    setLoggedProviderId(newContractor.id); // Dynamic sign-in

    // Reset Form
    setName("");
    setCompanyName("");
    setTitle("");
    setBio("");
    setPhone("");
    setWhatsapp("");
    setEmail("");
    setWebsite("");
    setPortfolios([]);
  };

  // Filter leads matches to logged provider
  const matchingLeads = allLeads.filter(l => l.contractorId === loggedProviderId);
  const selectedProviderObj = existingContractors.find(c => c.id === loggedProviderId);

  return (
    <div className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
      {/* Tab Selectors */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4 flex-wrap gap-4">
        <div>
          <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-1.5">
            <Icons.Building2 className="w-5 h-5 text-neutral-600" />
            Hunarmand Provider Office • کاریگر پورٹل
          </h3>
          <p className="text-xs text-neutral-500">
            For professional contractors to register work, display portfolios, and monitor client leads • اپنا پیشہ ورانہ اکاؤنٹ بنائیں، اپنا بہترین کام دکھائیں اور گاہکوں سے آرڈرز حاصل کریں۔
          </p>
        </div>

        <div className="inline-flex bg-pak-lightgreen rounded-xl p-1 shrink-0 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveSegment("register")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition ${
              activeSegment === "register"
                ? "bg-pak-green text-white shadow-sm"
                : "text-pak-green hover:text-pak-darkgreen"
            }`}
          >
            Register Profile / رجسٹریشن
          </button>
          <button
            onClick={() => setActiveSegment("leads")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition flex items-center gap-1 ${
              activeSegment === "leads"
                ? "bg-pak-green text-white shadow-sm"
                : "text-pak-green hover:text-pak-darkgreen"
            }`}
          >
            Leads Desk / گاہکوں کی لسٹ
            {allLeads.filter(l => l.status === "pending").length > 0 && (
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            )}
          </button>
        </div>
      </div>

      {/* 1. SECTION: Register & Showcase Custom Work */}
      {activeSegment === "register" && (
        <div className="space-y-6">
          {registerSuccess ? (
            <div className="p-8 text-center bg-neutral-50 rounded-2xl border border-neutral-200/50 space-y-4 max-w-lg mx-auto">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <Icons.Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-900 text-lg">Your Profile Has Joined the Guild! • آپ کا اکاؤنٹ کامیابی سے بن گیا ہے</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Incredible work. Your business represents the premium values of **Hunarmand**. Your live card is now active in the client directory!
                  <span className="font-urdu block mt-1 text-xs text-neutral-600">انتہائی اعلیٰ مہارت! اب آپ کا ہنر پورے پاکستان کے گاہکوں کے لیے لائیو اور فعال ہے۔</span>
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-neutral-100 text-xs text-neutral-600 space-y-1.5 text-left">
                <p className="font-bold text-neutral-800">Quick Portal Account Access / پورٹل تک فوری رسائی:</p>
                <p>We have automatically signed you into the **Leads Desk** tab so you can monitor your incoming customer project bids instantly. / ہم نے آپ کو خود بخود **گاہکوں کی لسٹ** پر منتقل کردیا ہے جہاں آپ فورا آرڈرز دیکھ سکتے ہیں۔</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setRegisterSuccess(false)}
                  className="flex-1 px-4 py-2 border border-neutral-200 text-xs font-semibold rounded-lg text-neutral-600 hover:bg-neutral-50 cursor-pointer"
                >
                  Register Another Business / دوسرا ہنر شامل کریں
                </button>
                <button
                  onClick={() => {
                    setRegisterSuccess(false);
                    setActiveSegment("leads");
                  }}
                  className="flex-1 px-4 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-neutral-800 cursor-pointer"
                >
                  Go to Leads Inbox / آرڈر لسٹ میں جائیں
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-6">
              {/* Core Business Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-600">Lead Artisan Full Name / کاریگر کا پورا نام <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Richard Hendricks / مثلاً عاصم علی"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm border border-neutral-200 rounded-xl px-3.5 py-2 outline-none focus:border-neutral-400 bg-neutral-50/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-600">Company / Trade Brand Name / دکان یا کمپنی کا نام <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aviato Construction / مثلاً داتا الیکٹرک اینڈ پلمبنگ ورکز"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-sm border border-neutral-200 rounded-xl px-3.5 py-2 outline-none focus:border-neutral-400 bg-neutral-50/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-600">Service Category / کام یا ہنر کا زمرہ <span className="text-red-500">*</span></label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-sm border border-neutral-200 rounded-xl px-2.5 py-2 outline-none focus:border-neutral-400 bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-semibold text-neutral-600">Artisan Catchy Title / Specialty / خاص مہارت اور عنوان <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Master Cabinet Sprayer & Architectural Finisher / مثلاً ہوم وائرنگ اور اوور ہالنگ کے ماہر"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-sm border border-neutral-200 rounded-xl px-3.5 py-2 outline-none focus:border-neutral-400 bg-neutral-50/30"
                  />
                </div>
              </div>

              {/* Bio block */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-neutral-600">Our Pride Statement / Bio / اپنے کام کا پختہ تعارف <span className="text-red-500">*</span></label>
                <p className="text-[10px] text-neutral-400">Give users insights into your techniques, attention to details, and core trade licensing • اپنے کام، تجربے، دکان کے کھلنے کے اوقات اور خاص سروسز کا ذکر کریں۔</p>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Founded on a lineage of European-grade woodworking, we focus on detailed kitchen millwork... / مثلاً ہم پچھلے دس سال سے لاہور میں الیکٹرک وائرنگ اور مرمت کا کام کر رہے ہیں۔ ہر گاہک کو پائیدار اور معیاری کام کی مکمل تسلی دی جاتی ہے۔"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full text-sm border border-neutral-200 rounded-xl p-3 outline-none focus:border-neutral-400 bg-neutral-50/30 resize-none"
                />
              </div>

              {/* Contact Information & Licensing credentials */}
              <div className="border border-neutral-100 p-5 rounded-2xl bg-neutral-50/30 space-y-4">
                <h4 className="text-xs font-bold text-neutral-800 border-b border-neutral-100 pb-2 flex items-center gap-1.5">
                  <Icons.KeyRound className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Trade Verification, Location & Dispatch Contacts / لائسنس، ابلاغ اور پتہ کی تفصیل</span>
                </h4>

                {/* Contact Coordinates */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase block">Operating City / شہر منتخب کریں</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full text-xs border border-neutral-200 rounded-lg px-2 py-1.5 outline-none bg-white font-semibold text-neutral-800"
                    >
                      <option value="Lahore">Lahore (لاہور)</option>
                      <option value="Karachi">Karachi (کراچی)</option>
                      <option value="Islamabad">Islamabad (اسلام آباد)</option>
                      <option value="Rawalpindi">Rawalpindi (راولپنڈی)</option>
                      <option value="Peshawar">Peshawar (پشاور)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase block">Operating Area / Block / کام کا قریبی علاقہ</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. DHA Phase 5 / مثلاً ڈی ایچ اے فیز ۵"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase block">Operational Call Phone / فون نمبر نمبر</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-emerald-700 uppercase block">WhatsApp Number / واٹس ایپ نمبر</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +923001234567"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full text-xs border border-emerald-200 rounded-lg px-2.5 py-1.5 outline-none bg-emerald-50/20 text-emerald-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-500 uppercase">Artisan Email / ای میل پتہ *</label>
                    <input
                      type="email"
                      required
                      placeholder="info@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-500 uppercase">Business Website / ویب سائٹ لنک</label>
                    <input
                      type="text"
                      placeholder="https://yourcompany.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-500 uppercase">Hourly/Visit Rate Range / ہینڈ وزٹ فیس</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rs. 800 - 1500 / visit"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none bg-white"
                    />
                  </div>
                </div>

                {/* Other spec indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-1">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-500 uppercase">Trade License Identifier / لائسنس رجسٹریشن نمبر</label>
                    <input
                      type="text"
                      placeholder="e.g. PK-LHR-ELEC-4402"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      className="w-full border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-500 uppercase">Business General Liability Cover / کارپوریٹ انشورنس (نقصان کا تحفظ)</label>
                    <input
                      type="text"
                      value={insuranceAmount}
                      onChange={(e) => setInsuranceAmount(e.target.value)}
                      className="w-full border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-neutral-500 uppercase">Vetting Badge Target / گلڈ سرٹیفکیٹ کا ہدف</label>
                    <select
                      value={vettedStatus}
                      onChange={(e) => setVettedStatus(e.target.value as VettingTier)}
                      className="w-full border border-neutral-200 rounded-lg px-1 py-1.5 outline-none bg-white font-bold text-neutral-800"
                    >
                      <option value={VettingTier.VERIFIED}>Verified Specialist (تصدیق شدہ)</option>
                      <option value={VettingTier.ELITE}>Elite Pro Medal (خاص کاریگر)</option>
                      <option value={VettingTier.MASTER_GUILD}>Ustad Artisan Level (استاد کاریگر)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* DYNAMIC PORTFOLIO WORK ITEM BUILDER */}
              <div className="border border-neutral-100 p-5 rounded-2xl bg-neutral-50/20 space-y-4 text-left">
                <div>
                  <h4 className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                    <Icons.Image className="w-4 h-4 text-pak-green" />
                    Show Off Your Craft: Build Portfolio Showcase / اپنے کام کے نمونے شامل کریں
                  </h4>
                  <p className="text-[10px] text-neutral-400">Include concrete images describing past project successes and details • تصویر اور مختصر تفصیل منسلک کریں۔</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-neutral-200/50 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-neutral-500 uppercase">Project Title / پروجیکٹ کا عنوان</label>
                      <input
                        type="text"
                        placeholder="e.g. Geometric Accent Wall / مثلاً کمرے کی پینٹنگ"
                        value={portTitle}
                        onChange={(e) => setPortTitle(e.target.value)}
                        className="w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 outline-none focus:border-neutral-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-neutral-500 uppercase">Brief Work Description / کام کی تفصیل</label>
                      <textarea
                        rows={2}
                        placeholder="Detail the materials used, specific challenges met... / استعمال کیا گیا مٹیریل اور تفصیل لکھیں..."
                        value={portDesc}
                        onChange={(e) => setPortDesc(e.target.value)}
                        className="w-full text-xs border border-neutral-200 rounded-lg p-2 outline-none focus:border-neutral-400 resize-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-neutral-500 uppercase block">Select Craft Illustration Presets / پہلے سے درج تصاویر</label>
                    <div className="grid grid-cols-4 gap-2">
                      {PORTFOLIO_PHOTO_PRESETS.map((preset, index) => {
                        const isChosen = portImgUrl === preset.url;
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setPortImgUrl(preset.url)}
                            title={preset.name}
                            className={`h-11 rounded-md overflow-hidden relative border-2 ${
                              isChosen ? "border-pak-green shadow-sm" : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img src={preset.url} alt={preset.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="space-y-1 pt-1">
                      <label className="text-[9px] font-semibold text-neutral-400 block uppercase">Or custom Image URL / یا اپنی تصویر کا لنک</label>
                      <input
                        type="text"
                        value={portImgUrl}
                        onChange={(e) => setPortImgUrl(e.target.value)}
                        className="w-full text-[10px] border border-neutral-200 rounded px-2 py-1 outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 flex justify-end">
                    <button
                      type="button"
                      id="btn-add-portfolio-item"
                      onClick={addPortfolioItem}
                      className="px-4 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-lg hover:bg-neutral-200 transition cursor-pointer"
                    >
                      Attach Portfolio Entry / شامل کریں
                    </button>
                  </div>
                </div>

                {/* Portfolios currently attached display */}
                {portfolios.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-neutral-500 uppercase">Attached Showcase Works / شامل کردہ پورٹ فولیو ({portfolios.length})</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {portfolios.map((p, index) => (
                        <div key={p.id} className="bg-white rounded-lg overflow-hidden border border-neutral-200/50 p-2 flex items-center gap-2 relative">
                          <img src={p.imageUrl} className="w-9 h-9 object-cover rounded" referrerPolicy="no-referrer" />
                          <div className="min-w-0">
                            <p className="text-[10px] font-bold truncate text-neutral-800">{p.title}</p>
                            <p className="text-[8px] text-neutral-400">Attached / منسلک ہے</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setPortfolios(portfolios.filter((_, i) => i !== index))}
                            className="absolute -top-1 -right-1 bg-neutral-900 text-white rounded-full p-0.5 w-4 h-4 flex items-center justify-center text-[8px] cursor-pointer"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Listing */}
              <div className="pt-2 border-t border-neutral-100 flex justify-end">
                <button
                  type="submit"
                  id="btn-register-craftmark-provider"
                  className="px-8 py-3 bg-pak-green border border-pak-green text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-pak-darkgreen transition shadow-md shadow-pak-green/10 cursor-pointer"
                >
                  Join the Guild & Publish Profile / ہنرمند پورٹل پر اکاؤنٹ لائیو کریں
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* 2. SECTION: Leads Desk - Interactive Customer lead notification center */}
      {activeSegment === "leads" && (
        <div className="space-y-6">
          {/* Provider Selector Simulation */}
          <div className="bg-neutral-50 border border-neutral-100 p-4 rounded-2xl flex items-center justify-between flex-wrap gap-4 text-left">
            <div className="space-y-0.5">
              <label className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-wide block">Simulated Active Login / اکاؤنٹ پورٹل لاگ ان</label>
              <p className="text-xs text-neutral-600">Select which contractor's lead desk you'd like to inspect • وہ ہنرمند منتخب کریں جس کی موصول آرڈر لسٹ دیکھنا چاہتے ہیں:</p>
            </div>

            <select
              value={loggedProviderId}
              onChange={(e) => setLoggedProviderId(e.target.value)}
              className="text-xs font-bold border border-neutral-200 bg-white rounded-lg px-3 py-2 outline-none focus:border-neutral-400"
            >
              {existingContractors.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.companyName} ({c.name})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-neutral-800 flex items-center gap-1.5">
                <Icons.Layers className="w-4 h-4 text-pak-green" />
                Customer Bids & Lead Stream / موصول ہونے والے آرڈرز
              </h4>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-pak-lightgreen text-pak-green border border-pak-green/10 px-2 py-0.5 rounded-full">
                {matchingLeads.length} Total Leads / کل آرڈرز
              </span>
            </div>

            {/* Leads List */}
            {matchingLeads.length > 0 ? (
              <div className="space-y-4">
                {matchingLeads.map((lead) => {
                  const getUrgencyBadge = (urg: string) => {
                     if (urg === "emergency") return "bg-red-50 text-red-800 border-red-200 font-bold";
                     if (urg === "this_week") return "bg-pak-lightgreen text-pak-green border-pak-green/25 font-bold";
                     return "bg-neutral-50 text-neutral-700 border-neutral-200";
                  };

                  const getUrgencyUrdu = (urg: string) => {
                     if (urg === "emergency") return "ہنگامی / Emergency";
                     if (urg === "this_week") return "اسی ہفتے / This Week";
                     return "پلاننگ / Planning";
                  };

                  return (
                    <div
                      key={lead.id}
                      className={`border rounded-2xl p-5 space-y-4 bg-white transition hover:border-neutral-300 text-left ${
                        lead.status === "pending" ? "border-l-4 border-l-pak-green border-neutral-200" : "border-neutral-100"
                      }`}
                    >
                      {/* Lead header details */}
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="space-y-0.5">
                          <h5 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                            <span>Project request of / گاہک کا نام: {lead.clientName}</span>
                            <span className="text-[10px] text-neutral-400">•</span>
                            <span className="text-[10px] text-neutral-500">{lead.submittedAt}</span>
                          </h5>
                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500 font-medium">
                            <span className="inline-flex items-center gap-1">
                              <Icons.Mail className="w-3.5 h-3.5" />
                              <a href={`mailto:${lead.clientEmail}`} className="underline hover:text-neutral-800">{lead.clientEmail}</a>
                            </span>
                            {lead.clientPhone && (
                              <span className="inline-flex items-center gap-1">
                                <Icons.Phone className="w-3.5 h-3.5" />
                                <a href={`tel:${lead.clientPhone}`} className="underline hover:text-neutral-800">{lead.clientPhone}</a>
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs">
                          <span className={`text-[9px] uppercase px-2 py-0.5 border rounded-full ${getUrgencyBadge(lead.urgency)}`}>
                            {getUrgencyUrdu(lead.urgency)}
                          </span>

                          <span className={`text-[9px] uppercase px-2 py-0.5 font-bold rounded-full ${
                            lead.status === "responded" ? "bg-pak-lightgreen text-pak-green border border-pak-green/20" :
                            lead.status === "declined" ? "bg-neutral-100 text-neutral-500 border border-neutral-200" :
                            "bg-amber-100 text-amber-850"
                          }`}>
                            {lead.status === "pending" ? "Awaiting Quote / منتظر جواب" : 
                             lead.status === "responded" ? "Responded / جواب دے دیا" : "Declined / منسوخ شدہ"}
                          </span>
                        </div>
                      </div>

                      {/* Lead description */}
                      <div className="bg-neutral-50/50 p-4 rounded-xl border border-neutral-100 text-xs text-neutral-600 leading-relaxed italic">
                        "{lead.projectDescription}"
                      </div>

                      {/* Response Actions */}
                      {lead.status === "pending" && (
                        <div className="flex justify-end gap-2 text-xs pt-1 border-t border-neutral-100">
                          <button
                            type="button"
                            onClick={() => onUpdateLeadStatus(lead.id, "declined")}
                            className="px-3.5 py-1.5 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-50 cursor-pointer"
                          >
                            Decline Bid / مسترد کریں
                          </button>
                          <button
                            type="button"
                            onClick={() => onUpdateLeadStatus(lead.id, "responded")}
                            className="px-4.5 py-1.5 bg-pak-green text-white rounded-lg text-xs font-semibold hover:bg-pak-darkgreen cursor-pointer flex items-center gap-1"
                          >
                            <Icons.Check className="w-3.5 h-3.5" />
                            Dispatch Response Quote / ابھی جواب دیں
                          </button>
                        </div>
                      )}

                      {lead.status === "responded" && (
                        <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 justify-end animate-pulse">
                          <Icons.CheckCircle2 className="w-3.5 h-3.5" />
                          Response sent to client via {lead.clientEmail} • گاہک کو جواب موصول ہو چکا ہے۔
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-12 text-center border-2 border-dashed border-neutral-200 rounded-3xl text-neutral-400 space-y-1 bg-neutral-50/50">
                <Icons.Layers className="w-8 h-8 mx-auto text-neutral-300 mb-1" />
                <p className="font-semibold text-sm">No Active Quotes Requested Yet / ابھی تک کوئی نیا آرڈر نہیں آیا</p>
                <p className="text-xs max-w-sm mx-auto">
                  When homeowners browse the directory and request a quote from {selectedProviderObj?.companyName || "your account"}, their secure project briefs will stream right here. • جب گاہک آپ سے رابطہ کریں گے انکا آرڈر فورا یہاں لائیو نظر آئے گا۔
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
