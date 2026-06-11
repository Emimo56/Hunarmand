/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { INITIAL_CONTRACTORS, START_CATEGORIES } from "./data";
import { Contractor, CategoryInfo, QuoteRequest, VettingTier, Review } from "./types";
import { CategoryFilter } from "./components/CategoryFilter";
import { ContractorCard } from "./components/ContractorCard";
import { ContractorDetails } from "./components/ContractorDetails";
import { JoinGuildForm } from "./components/JoinGuildForm";

export default function App() {
  // 1. Core State with Local Storage Synchronization
  const [categories, setCategories] = React.useState<CategoryInfo[]>(() => {
    const saved = localStorage.getItem("craftmark_categories_v10_office");
    return saved ? JSON.parse(saved) : START_CATEGORIES;
  });

  const [contractors, setContractors] = React.useState<Contractor[]>(() => {
    const saved = localStorage.getItem("craftmark_contractors_v10_office");
    return saved ? JSON.parse(saved) : INITIAL_CONTRACTORS;
  });

  const [leads, setLeads] = React.useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem("craftmark_leads_v10_office");
    return saved ? JSON.parse(saved) : [];
  });

  // UI state
  const [selectedCity, setSelectedCity] = React.useState<string>("All");
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<string | null>(null);
  const [selectedContractorId, setSelectedContractorId] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [minRatingFilter, setMinRatingFilter] = React.useState<number>(0);
  const [vettingTierFilter, setVettingTierFilter] = React.useState<string>("All");
  
  // App primary segment mode (true: Contractor Portal; false: Client Directory Browser)
  const [isProviderOffice, setIsProviderOffice] = React.useState<boolean>(false);

  // Synchronizers of LocalStorage
  React.useEffect(() => {
    localStorage.setItem("craftmark_categories_v10_office", JSON.stringify(categories));
  }, [categories]);

  React.useEffect(() => {
    localStorage.setItem("craftmark_contractors_v10_office", JSON.stringify(contractors));
  }, [contractors]);

  React.useEffect(() => {
    localStorage.setItem("craftmark_leads_v10_office", JSON.stringify(leads));
  }, [leads]);

  // Derive selected contractor object to withstand state mutations safely
  const selectedContractor = contractors.find((c) => c.id === selectedContractorId) || null;

  // 2. State Mutation Handlers
  const handleAddNewCategory = (name: string, description: string, iconName: string) => {
    const newId = name.toLowerCase().trim().replace(/[^a-z0-9]/g, "_");
    
    // Prevent duplicated ids
    if (categories.some((c) => c.id === newId)) return;

    const newCategory: CategoryInfo = {
      id: newId,
      name,
      description,
      iconName,
      colorTheme: "neutral",
    };
    
    setCategories([...categories, newCategory]);
  };

  const handleAddContractor = (newContractor: Contractor) => {
    setContractors([newContractor, ...contractors]);
  };

  const handleAddReview = (contractorId: string, review: Review) => {
    setContractors((prevContractors) =>
      prevContractors.map((c) => {
        if (c.id !== contractorId) return c;
        
        const updatedReviews = [review, ...c.reviews];
        // Recalculate average rating
        const totalRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
        const newAverage = Math.round((totalRating / updatedReviews.length) * 10) / 10;

        return {
          ...c,
          reviews: updatedReviews,
          rating: newAverage,
          reviewCount: updatedReviews.length,
        };
      })
    );
  };

  const handleAddLead = (newLead: QuoteRequest) => {
    setLeads([newLead, ...leads]);
  };

  const handleUpdateLeadStatus = (leadId: string, status: "responded" | "declined") => {
    setLeads((prevLeads) =>
      prevLeads.map((l) => (l.id === leadId ? { ...l, status } : l))
    );
  };

  // 3. Search & Filter Resolution
  const filteredContractors = contractors.filter((c) => {
    // City Selection Filter
    if (selectedCity !== "All" && c.city !== selectedCity) return false;

    // A. Category Filter
    if (selectedCategoryId && c.category !== selectedCategoryId) return false;

    // B. Search input matches: Company Name, Principal name, specialty title, or bio keyword
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const inCompanyName = c.companyName.toLowerCase().includes(query);
      const inName = c.name.toLowerCase().includes(query);
      const inTitle = c.title.toLowerCase().includes(query);
      const inBio = c.bio.toLowerCase().includes(query);
      if (!inCompanyName && !inName && !inTitle && !inBio) return false;
    }

    // C. Stars Threshold Filter
    if (minRatingFilter > 0 && c.rating < minRatingFilter) return false;

    // D. Vetting Badge status
    if (vettingTierFilter !== "All") {
      if (vettingTierFilter === "Master" && c.vettedStatus !== VettingTier.MASTER_GUILD) return false;
      if (vettingTierFilter === "Elite" && c.vettedStatus !== VettingTier.ELITE) return false;
      if (vettingTierFilter === "Verified" && c.vettedStatus !== VettingTier.VERIFIED) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F4FCF8]">
      {/* 1. Header Bar styling - Custom "Hunarmand" branding */}
      <header className="bg-white border-b border-neutral-100 py-3.5 px-6 md:px-12 flex items-center justify-between sticky top-0 z-40 shadow-xs">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSelectedContractorId(null); setIsProviderOffice(false); }}>
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs border border-neutral-200/50 flex items-center justify-center shrink-0 bg-white p-1 transition-transform hover:scale-105 duration-200">
            <img
              src="/src/assets/images/hunarmand_pakistan_logo_1781124871123.png"
              alt="Hunarmand Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-xl text-neutral-900 tracking-tight flex items-center gap-2">
              <span className="tracking-tight text-pak-green">HUNARMAND</span>
              <span className="font-bold text-pak-green font-urdu text-lg leading-none select-none">ہنرمند</span>
              <span className="text-[9px] font-bold tracking-wider uppercase text-pak-green bg-pak-lightgreen border border-pak-green/20 px-1.5 py-0.5 rounded-full">Guild Vetted</span>
            </h1>
            <p className="text-[10px] text-neutral-500 font-medium leading-none mt-0.5">Verified Artisan & Contractor Network <span className="font-bold text-neutral-400">•</span> معزز اور بااعتماد ہنرکار سروسز</p>
          </div>
        </div>

        {/* Workspace mode selectors */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setIsProviderOffice(false); setSelectedContractorId(null); }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition cursor-pointer ${
              !isProviderOffice
                ? "bg-pak-green text-white shadow-xs hover:bg-pak-darkgreen"
                : "text-neutral-500 hover:text-pak-green hover:bg-pak-lightgreen"
            }`}
          >
            Hire a Specialist • کاریگر ملیں
          </button>
          
          <button
            onClick={() => setIsProviderOffice(true)}
            id="btn-trigger-provider-office"
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition cursor-pointer flex items-center gap-1.5 ${
              isProviderOffice
                ? "bg-pak-darkgreen text-white shadow-xs"
                : "text-neutral-600 border border-pak-green/20 hover:text-pak-green hover:border-pak-green/40 bg-white"
            }`}
          >
            <Icons.Briefcase className="w-3.5 h-3.5" />
            <span>Provider Office • کاریگروں کے لیے</span>
          </button>
        </div>
      </header>

      {/* 2. Primary Layout Workspace Wrap */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 space-y-8">
        <AnimatePresence mode="wait">
          {isProviderOffice ? (
            /* ========================================================
               A. CONTRACTOR / PROVIDER OFFICE DASHBOARD WORKSPACE
               ======================================================== */
            <motion.div
              key="provider-office"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Back CTA inside page */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsProviderOffice(false)}
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  <Icons.ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  Return to Homeowner Hiring Directory
                </button>
                <div className="text-[11px] font-mono text-neutral-400">
                  ACTIVE_OFFICE_PORTAL_STABLE
                </div>
              </div>

              {/* Central Join & Leads workspace dashboard */}
              <JoinGuildForm
                categories={categories}
                existingContractors={contractors}
                allLeads={leads}
                onAddContractor={handleAddContractor}
                onUpdateLeadStatus={handleUpdateLeadStatus}
              />
            </motion.div>
          ) : selectedContractor ? (
            /* ========================================================
               B. CONTRACTOR SPECIALLIST DETAIL PORTFOLIO & REVIEWS
               ======================================================== */
            <motion.div
              key="contractor-details"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <ContractorDetails
                contractor={selectedContractor}
                onBack={() => setSelectedContractorId(null)}
                onAddReview={handleAddReview}
                onSubmitLead={handleAddLead}
              />
            </motion.div>
          ) : (
            /* ========================================================
               C. HOMEOWNER BROWSE & VET DIRECTORY CATALOG
               ======================================================== */
            <motion.div
              key="hiring-directory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="space-y-6"
            >
              {/* Welcome Brand Intro with solid typography (No decoration clutters) */}
              <div className="max-w-3xl space-y-3 pt-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-pak-green bg-pak-lightgreen px-3 py-1 rounded-full border border-pak-green/25 inline-block">
                  Pakistan's Verified Artisans Hub • کاریگروں کا بااعتماد نیٹ ورک
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-none md:leading-tight">
                  Find Vetted Home & Office Services in <span className="text-pak-green">Pakistan</span>.
                </h2>
                <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-sans">
                  <strong>Hunarmand (ہنرمند)</strong> connects premium households and modern corporate offices in Pakistan with master-verified electricians (*بجلی کے ماہر*), commercial & residential painters (*پینٹ اور پالش کاریگر*), custom sanitary plumbers (*پلمبنگ کاریگر*), and workplace decorators. Contact providers directly via **WhatsApp** or phone call with zero middleman commissions. <span className="font-semibold text-neutral-700 block mt-1">ہنرمند پاکستان کے بہترین الیکٹریشن، پلمبر، پینٹر اور ڈیکوریٹر کو گھر اور دفاتر کی سروسز کے لیے براہِ راست جوڑتا ہے۔ کسی اضافی فیس یا کمیشن کے بغیر براہِ راست رابطہ کریں۔</span>
                </p>
              </div>

              {/* Direct Pakistan City Quick Filters */}
              <div className="bg-white border border-pak-green/10 rounded-3xl p-5 shadow-xs space-y-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                      <Icons.MapPin className="w-4 h-4 text-pak-green" />
                      <span>Filter by City / اپنا شہر تلاش کریں</span>
                    </h3>
                    <p className="text-[10px] text-neutral-400">Discover trusted, insured specialists working in your local area</p>
                  </div>
                  <span className="text-[10px] font-bold text-pak-green bg-pak-lightgreen px-2 py-0.5 rounded-full border border-pak-green/40">
                    Insured & Vetted
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All", "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar"].map((city) => {
                    const isSelected = selectedCity === city;
                    return (
                      <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer border ${
                          isSelected
                            ? "bg-pak-green text-white border-transparent shadow-sm"
                            : "bg-neutral-50/70 hover:bg-neutral-100 text-neutral-700 border-neutral-200/60 hover:border-neutral-300"
                        }`}
                      >
                        <Icons.Building2 className={`w-3.5 h-3.5 ${isSelected ? "text-pak-lightgreen" : "text-neutral-400"}`} />
                        <span>
                          {city === "All"
                            ? "All Pakistan (تمام شہر)"
                            : city === "Karachi"
                            ? "Karachi (کراچی)"
                            : city === "Lahore"
                            ? "Lahore (لاہور)"
                            : city === "Islamabad"
                            ? "Islamabad (اسلام آباد)"
                            : city === "Rawalpindi"
                            ? "Rawalpindi (راولپنڈی)"
                            : "Peshawar (پشاور)"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic search filters component */}
              <div className="bg-white border border-neutral-100 rounded-3xl p-6 shadow-xs space-y-6">
                {/* Search Bar Input */}
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                  <div className="relative flex-1">
                    <Icons.Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search company, specialized craftsman role, or custom profile keyword... / کاریگر یا ہنر تلاش کریں..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-sm border border-neutral-200 rounded-2xl pl-10.5 pr-4 py-3.5 outline-none focus:border-neutral-400 bg-neutral-50/50"
                    />
                  </div>

                  {/* Vetting tier selector dropdown */}
                  <div className="relative shrink-0 flex items-center bg-neutral-50/50 border border-neutral-200 rounded-2xl px-3.5 py-2.5">
                    <Icons.Award className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
                    <div className="text-left">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 block leading-none">Vetted Status / اہلیت کا درجہ</span>
                      <select
                        value={vettingTierFilter}
                        onChange={(e) => setVettingTierFilter(e.target.value)}
                        className="text-xs font-bold text-neutral-800 pr-4 outline-none bg-transparent cursor-pointer"
                      >
                        <option value="All">All Vetted Tiers / تمام درجے</option>
                        <option value="Master">Master Artisan Seal / استاد کاریگر</option>
                        <option value="Elite">Elite Pro Medal / خاص کاریگر</option>
                        <option value="Verified">Verified Crew / تصدیق شدہ</option>
                      </select>
                    </div>
                  </div>

                  {/* Rating selector dropdown */}
                  <div className="relative shrink-0 flex items-center bg-neutral-50/50 border border-neutral-200 rounded-2xl px-3.5 py-2.5">
                    <Icons.Star className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
                    <div className="text-left">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 block leading-none">Ratings Threshold / ریٹنگز</span>
                      <select
                        value={minRatingFilter}
                        onChange={(e) => setMinRatingFilter(Number(e.target.value))}
                        className="text-xs font-bold text-neutral-800 pr-4 outline-none bg-transparent cursor-pointer"
                      >
                        <option value="0">All Ratings / تمام ریٹنگز</option>
                        <option value="4.5">4.5+ Stars Rating / ۴.۵ سے اوپر</option>
                        <option value="4.8">4.8+ Stars Elite / ۴.۸ ممتاز</option>
                        <option value="5.0">5.0 Perfect Score / ۵.۰ مکمل</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Categories filters block including Add Category handler */}
                <CategoryFilter
                  categories={categories}
                  selectedCategoryId={selectedCategoryId}
                  onSelectCategory={setSelectedCategoryId}
                  onAddNewCategory={handleAddNewCategory}
                />
              </div>

              {/* Dynamic Contractors display listing */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-semibold px-1">
                  <span>SHOWING {filteredContractors.length} MASTER-VETTED MATCHES • تصدیق شدہ کاریگر</span>
                  {filteredContractors.length !== contractors.length && (
                    <button
                      onClick={() => {
                        setSelectedCategoryId(null);
                        setSearchQuery("");
                        setMinRatingFilter(0);
                        setVettingTierFilter("All");
                      }}
                      className="text-neutral-500 hover:text-neutral-800 underline cursor-pointer"
                    >
                      Clear All Filters • تمام فلٹر ختم کریں
                    </button>
                  )}
                </div>

                {filteredContractors.length > 0 ? (
                  /* Animated contractors list */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredContractors.map((contractor) => (
                      <motion.div
                        key={contractor.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="h-full"
                      >
                        <ContractorCard
                          contractor={contractor}
                          onSelect={(c) => setSelectedContractorId(c.id)}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  /* No results empty state */
                  <div className="bg-white border border-neutral-100 rounded-3xl p-16 text-center text-neutral-400 space-y-3 shadow-xs">
                    <Icons.SlidersHorizontal className="w-10 h-10 mx-auto text-neutral-300" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-neutral-800 text-sm">No Contractor Meets Selected Thresholds • کوئی ہنرمند نہیں ملا</h4>
                      <p className="text-xs max-w-md mx-auto leading-relaxed">
                        Try clearing active search queries or selecting different ratings or vetted badges to browse other registered specialists. <br />
                        <span className="font-semibold text-neutral-600 block mt-1">اضافی سرچ الفاظ صاف کریں یا ریٹنگز کی فلٹر تبدیل کر کے دوبارہ کوشش کریں۔</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Global footer */}
      <footer className="bg-white border-t border-neutral-100 py-8 px-6 mt-16 text-center text-neutral-400 text-xs shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md overflow-hidden bg-white border border-neutral-200/60 p-0.5 flex items-center justify-center shrink-0">
              <img
                src="/src/assets/images/hunarmand_pakistan_logo_1781124871123.png"
                alt="Hunarmand Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-neutral-800">HUNARMAND DIRECTORY • ہنرمند پورٹل</span>
          </div>
          <p className="opacity-90">All licenses dynamically vetted. Standard terms apply. • تصدیق شدہ ہنر مند افراد کا بااعتماد نیٹ ورک</p>
        </div>
      </footer>
    </div>
  );
}
