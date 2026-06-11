/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { Contractor, VettingTier } from "../types";

interface ContractorCardProps {
  contractor: Contractor;
  onSelect: (contractor: Contractor) => void;
}

export const ContractorCard: React.FC<ContractorCardProps> = ({
  contractor,
  onSelect,
}) => {
  const getTierDetails = (tier: VettingTier) => {
    switch (tier) {
      case VettingTier.MASTER_GUILD:
        return {
          bg: "bg-pak-lightgreen text-pak-green border-pak-green/30",
          icon: <Icons.Award className="w-3.5 h-3.5 text-pak-green shrink-0" />,
          label: "Master Artisan / استاد کاریگر",
          desc: "Elite guild-verified master trade specialist / گلڈ سے تصدیق شدہ استاد کاریگر"
        };
      case VettingTier.ELITE:
        return {
          bg: "bg-emerald-50 text-emerald-800 border-emerald-200/60",
          icon: <Icons.ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />,
          label: "Elite Pro / ماہر کاریگر",
          desc: "Full license verified + exemplary feedback / تصدیق شدہ لائسنس اور بہترین فیڈبیک"
        };
      default:
        return {
          bg: "bg-neutral-50 text-neutral-800 border-neutral-200",
          icon: <Icons.CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />,
          label: "Verified Crew / تصدیق شدہ ٹیم",
          desc: "Insured and background-screened / انشورڈ اور مکمل تفتیش شدہ کوائف"
        };
    }
  };

  const tier = getTierDetails(contractor.vettedStatus);

  return (
    <div
      id={`contractor-card-${contractor.id}`}
      className="bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:border-neutral-300 transition-all duration-300 flex flex-col h-full hover:shadow-lg group"
    >
      {/* Visual Header / Avatar Banner */}
      <div className="relative h-28 bg-neutral-900 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />
        {/* If the contractor has a portfolio image, use that as background banner, else generic neat pattern */}
        {contractor.portfolio && contractor.portfolio[0] ? (
          <img
            src={contractor.portfolio[0].imageUrl}
            alt="Work preview banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-xs text-neutral-500 pattern-grid" />
        )}
        
        {/* Category Floating Pill */}
        <span className="absolute top-3 left-3 z-20 text-[10px] font-bold tracking-wider uppercase bg-white/95 text-neutral-800 px-2.5 py-1 rounded-full shadow-sm">
          {contractor.category === "electrician" ? "Electrician / الیکٹریشن" :
           contractor.category === "painter" ? "Painter / پینٹر" :
           contractor.category === "event_decorator" ? "Event Decorator / ڈیکوریٹر" :
           contractor.category === "plumber" ? "Plumber / پلمبر" :
           contractor.category === "ac_repair" ? "AC & Fridge Tech / اے سی اور فریج" :
           contractor.category.replace("_", " ")}
        </span>
      </div>

      {/* Main Card Content */}
      <div className="p-5 flex-1 flex flex-col -mt-10 relative z-20">
        {/* Portrait & Core Title Grid */}
        <div className="flex items-end gap-3 mb-3 shrink-0">
          <img
            src={contractor.avatar}
            alt={contractor.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-xl object-cover border-4 border-white bg-white shadow-md shadow-neutral-200/50"
          />
          <div className="min-w-0 pb-1">
            <h4 className="font-bold text-neutral-800 text-base truncate group-hover:text-neutral-950 transition-colors">
              {contractor.companyName}
            </h4>
            <p className="text-xs text-neutral-500 font-medium truncate">
              Lead / کاریگر: {contractor.name}
            </p>
          </div>
        </div>

        {/* Trade Classification */}
        <p className="text-xs font-medium text-neutral-700 mb-3 line-clamp-1">
          {contractor.title}
        </p>

        {/* Stars and Performance Ratings */}
        <div className="flex items-center gap-1 text-xs text-neutral-600 mb-4 shrink-0">
          <div className="flex items-center text-amber-500">
            <Icons.Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span className="ml-1 font-bold text-neutral-900">{contractor.rating.toFixed(1)}</span>
          </div>
          <span className="text-neutral-300">•</span>
          <span className="font-medium text-neutral-500">{contractor.reviewCount} reviews / جائزے</span>
        </div>

        {/* Bio / Summary of craftsmanship */}
        <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-4 grow">
          {contractor.bio}
        </p>

        {/* Guild Verification Seal */}
        <div className={`border p-2.5 rounded-xl flex items-start gap-2.5 mb-4 shrink-0 transition-colors ${tier.bg}`}>
          {tier.icon}
          <div>
            <h5 className="text-[11.5px] font-bold leading-tight">{tier.label} Vetted Status / تصدیق کا درجہ</h5>
            <p className="text-[10px] opacity-80 leading-tight">{tier.desc}</p>
          </div>
        </div>

        {/* Divider and Footer Details */}
        <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-xs text-neutral-600 shrink-0">
          <div className="flex items-center gap-1 font-medium">
            <Icons.MapPin className="w-3.5 h-3.5 text-pak-green shrink-0" />
            <span className="truncate"><strong>{contractor.city}</strong> • {contractor.location}</span>
          </div>
          <div className="font-extrabold text-neutral-900 shrink-0 pl-1">
            {contractor.hourlyRate}
          </div>
        </div>
      </div>

      {/* Localized Pakistani Peer-to-Peer Actions Bar */}
      <div className="grid grid-cols-2 bg-neutral-50 border-t border-neutral-100 divide-x divide-neutral-100 shrink-0">
        <a
          href={`https://wa.me/${(contractor.whatsapp || contractor.phone).replace(/[\s\+]/g, "")}?text=Salam%20${encodeURIComponent(contractor.name)}%2C%20saw%20your%20profile%2520on%2520Hunarmand%2520Pakistan.%2520Are%2520you%2520available%2520for%2520work%253F`}
          target="_blank"
          rel="noreferrer"
          className="py-3 bg-white text-center text-xs font-bold text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 transition flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Icons.MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
          <span>WhatsApp • واٹس ایپ</span>
        </a>

        <button
          onClick={() => onSelect(contractor)}
          id={`btn-view-profile-${contractor.id}`}
          className="bg-pak-green hover:bg-pak-darkgreen text-white py-3 text-xs font-bold tracking-wide uppercase transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>View Profile • معلومات</span>
          <Icons.ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
