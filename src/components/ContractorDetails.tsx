/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { Contractor, Review, VettingTier, QuoteRequest } from "../types";
import { QuoteModal } from "./QuoteModal";

interface ContractorDetailsProps {
  contractor: Contractor;
  onBack: () => void;
  onAddReview: (contractorId: string, review: Review) => void;
  onSubmitLead: (lead: QuoteRequest) => void;
}

export const ContractorDetails: React.FC<ContractorDetailsProps> = ({
  contractor,
  onBack,
  onAddReview,
  onSubmitLead,
}) => {
  const [activeTab, setActiveTab] = React.useState<"portfolio" | "reviews" | "credentials">("portfolio");
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);

  // Review Form States
  const [author, setAuthor] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState("");
  const [projectCompleted, setProjectCompleted] = React.useState("");
  const [reviewSuccess, setReviewSuccess] = React.useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim() || !projectCompleted.trim()) return;

    const newReview: Review = {
      id: "rev_" + Date.now(),
      author: author.trim(),
      rating,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      comment: comment.trim(),
      projectCompleted: projectCompleted.trim(),
      verifiedHired: true,
    };

    onAddReview(contractor.id, newReview);
    setReviewSuccess(true);
    setAuthor("");
    setRating(5);
    setComment("");
    setProjectCompleted("");

    // Automatically transition to Reviews tab to inspect the submit
    setActiveTab("reviews");
    setTimeout(() => {
      setReviewSuccess(false);
    }, 5000);
  };

  const getTierDetails = (tier: VettingTier) => {
    switch (tier) {
      case VettingTier.MASTER_GUILD:
        return {
          bg: "bg-pak-lightgreen text-pak-green border-pak-green/25",
          icon: <Icons.Award className="w-5 h-5 text-pak-green shrink-0" />,
          label: "Master Artisan / استاد کاریگر",
          desc: "This provider represents the absolute peak of local trade execution. Fully clean licensure directories, minimum 5+ years background checks cleared, and pristine client-vetted feedback scores. • یہ سفارشی استاد کاریگر کا درجہ رکھتے ہیں جن کے مکمل کوائف، لائسنس اور تجرباتی تاریخ کی تصدیق ہوچکی ہے۔",
        };
      case VettingTier.ELITE:
        return {
          bg: "bg-emerald-50 text-emerald-950 border-emerald-300",
          icon: <Icons.ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />,
          label: "Elite Pro / ماہر کاریگر",
          desc: "Vetted background check, confirmed business insurance lines, active licensing directories current, and excellent rating index averages over 4.5. • تصدیق شدہ پس منظر، فعال کاروباری انشورنس ضمانت، اور بہترین ریٹنگ کے حامل ہنر مند۔",
        };
      default:
        return {
          bg: "bg-neutral-50 text-neutral-950 border-neutral-300",
          icon: <Icons.CheckCircle2 className="w-5 h-5 text-neutral-600 shrink-0" />,
          label: "Verified Specialist / تصدیق شدہ کاریگر",
          desc: "Verified local operations including current business liability policies, client reference audits, and general identity safety screening. • مقامی طور پر مکمل تصدیق شدہ کاریگر، جس کی شناخت اور بنیادی کام کا درجہ جانچا جا چکا ہے۔",
        };
    }
  };

  const tier = getTierDetails(contractor.vettedStatus);

  return (
    <div className="w-full space-y-6">
      {/* Return Navigation */}
      <button
        onClick={onBack}
        id="btn-back-to-catalog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200 px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-xs"
      >
        <Icons.ArrowLeft className="w-3.5 h-3.5" />
        Return to Contractor Directory • واپس جائیں
      </button>

      {/* Hero Header Card */}
      <div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-xs relative">
        <div className="h-44 bg-neutral-900 relative">
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
          {contractor.portfolio && contractor.portfolio[0] && (
            <img
              src={contractor.portfolio[0].imageUrl}
              alt="Artistic background"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-30"
            />
          )}
          <div className="absolute bottom-5 left-6 right-6 z-20 text-white flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] bg-white/20 backdrop-blur-md text-white font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                {contractor.category.replace("_", " ")}
              </span>
              <h2 className="text-xl md:text-3xl font-extrabold tracking-tight">
                {contractor.companyName}
              </h2>
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <span>By / کاریگر: {contractor.name}</span>
                <span>•</span>
                <span>Established {contractor.yearsInBusiness} years ago • قائم کردہ {contractor.yearsInBusiness} سال</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`https://wa.me/${(contractor.whatsapp || contractor.phone).replace(/[\s\+]/g, "")}?text=Salam%20${encodeURIComponent(contractor.name)}%2C%20saw%20your%20profile%20on%20Hunarmand%20Pakistan.%20Are%20you%20available%20for%20work%3F`}
                target="_blank"
                rel="noreferrer"
                className="px-4.5 py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-500 transition cursor-pointer flex items-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <Icons.MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Chat • واٹس ایپ</span>
              </a>

              <button
                id="btn-trigger-quote-top"
                onClick={() => setIsQuoteOpen(true)}
                className="px-5 py-3 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-50 transition cursor-pointer shadow-md"
              >
                Request Direct Quote • قیمت کا تخمینہ حاصل کریں
              </button>
            </div>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Context */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio & Craft Presentation */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-2">
                Our Craft Philosophy & History • ہمارا عزم اور تاریخ
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {contractor.bio}
              </p>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100/50">
              <div className="text-center">
                <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">
                  Hourly Guide / گھنٹہ وار شرح
                </span>
                <span className="text-xs font-extrabold text-neutral-800">
                  {contractor.hourlyRate}
                </span>
              </div>
              <div className="text-center border-l border-neutral-200/50">
                <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">
                  Vetted Tier / کاریگر کا درجہ
                </span>
                <span className="text-xs font-extrabold text-amber-700">
                  {contractor.vettedStatus}
                </span>
              </div>
              <div className="text-center border-l border-neutral-200/50">
                <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">
                  Rating Average / اوسط ریٹنگ
                </span>
                <span className="text-xs font-extrabold text-neutral-800 flex items-center justify-center gap-0.5">
                  <Icons.Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  {contractor.rating.toFixed(1)}
                </span>
              </div>
              <div className="text-center border-l border-neutral-200/50">
                <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">
                  Reviews Total / کل جائزے
                </span>
                <span className="text-xs font-extrabold text-neutral-800">
                  {contractor.reviewCount} reviews / جائزے
                </span>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="space-y-4">
              <div className="flex border-b border-neutral-200">
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border-b-2 transition -mb-[2px] cursor-pointer ${
                    activeTab === "portfolio"
                      ? "border-pak-green text-pak-green"
                      : "border-transparent text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  Work Showcase ({contractor.portfolio ? contractor.portfolio.length : 0}) / نمونہ کار
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border-b-2 transition -mb-[2px] cursor-pointer ${
                    activeTab === "reviews"
                      ? "border-pak-green text-pak-green"
                      : "border-transparent text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  Direct Client Reviews ({contractor.reviews.length}) / جائزے
                </button>
                <button
                  onClick={() => setActiveTab("credentials")}
                  className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border-b-2 transition -mb-[2px] cursor-pointer ${
                    activeTab === "credentials"
                      ? "border-pak-green text-pak-green"
                      : "border-transparent text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  Vetting & Licensure / لائسنس اور تصدیق
                </button>
              </div>

              {/* TAB CONTENT: Portfolio Showcase */}
              {activeTab === "portfolio" && (
                <div className="space-y-6">
                  {contractor.portfolio && contractor.portfolio.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {contractor.portfolio.map((item) => (
                        <div
                          key={item.id}
                          className="border border-neutral-100 rounded-2xl overflow-hidden hover:border-neutral-300 transition bg-neutral-50 group hover:shadow-xs"
                        >
                          <div className="h-44 bg-neutral-900 overflow-hidden relative">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                            />
                            <span className="absolute bottom-3 right-3 text-[9px] bg-neutral-900/85 text-white px-2 py-0.5 rounded-md font-bold">
                              {item.completedDate}
                            </span>
                          </div>
                          <div className="p-4 space-y-1">
                            <h4 className="font-bold text-sm text-neutral-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center border-2 border-dashed border-neutral-200 rounded-3xl text-neutral-400 space-y-1 text-sm bg-neutral-50">
                      <Icons.Image className="w-8 h-8 mx-auto text-neutral-300 mb-1" />
                      <p className="font-semibold">No Portfolio Images Added Yet / گیلری میں کوئی تصویر موجود نہیں</p>
                      <p className="text-xs">This provider is currently uploading their latest craft records. / یہ ہنرمند ابھی اپنے کام کے نمونے اپلوڈ کر رہا ہے۔</p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB CONTENT: Reviews Thread & Submit Form */}
              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {/* Reviews Thread */}
                  <div className="space-y-4 pt-2">
                    {contractor.reviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="bg-white border border-neutral-100/80 rounded-2xl p-5 space-y-3 shadow-xs hover:border-neutral-200 transition"
                      >
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5 font-bold text-sm text-neutral-800">
                              <span>{rev.author}</span>
                              {rev.verifiedHired && (
                                <span className="inline-flex items-center gap-0.5 text-[9px] bg-emerald-50 text-emerald-800 border border-emerald-100 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0">
                                  <Icons.Check className="w-2.5 h-2.5" />
                                  Hired / ہائر کیا گیا
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-neutral-400">
                              Completed / پروجیکٹ: <span className="font-semibold text-neutral-500">{rev.projectCompleted}</span>
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-amber-500">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Icons.Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < rev.rating
                                      ? "fill-amber-500 text-amber-500"
                                      : "text-neutral-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-[10px] text-neutral-400">{rev.date}</span>
                          </div>
                        </div>

                        <p className="text-xs text-neutral-600 leading-relaxed italic">
                          "{rev.comment}"
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Create Review Form */}
                  <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-800 flex items-center gap-1.5">
                        <Icons.MessageSquare className="w-4 h-4 text-neutral-500" />
                        Write an Honest Review of this Specialist / کاریگر کے لیے جائزہ تحریر کریں
                      </h4>
                      <p className="text-xs text-neutral-500">Provide local community transparency on their performance • اپنے تجربے کے بارے میں لکھیں تاکہ دوسروں کو رہنمائی ملے</p>
                    </div>

                    {reviewSuccess && (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl flex items-center gap-2 text-xs">
                        <Icons.CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <p className="font-semibold">Review recorded successfully! Thank you for vetting the artisan work. • جائزہ کامیابی سے درج ہو چکا ہے، شکریہ!</p>
                      </div>
                    )}

                    <form onSubmit={handleReviewSubmit} id="write-contractor-review" className="space-y-3 text-xs">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-neutral-600">Your Full Name / آپ کا نام</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rachel Miller / مثلاً علی خان"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 outline-none focus:border-neutral-400"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-neutral-600">Specific Project Completed / مکمل ہونے والا لائحہ عمل</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Master Bedroom Ceiling repainted / مثلاً مین بورڈ کی تبدیلی"
                            value={projectCompleted}
                            onChange={(e) => setProjectCompleted(e.target.value)}
                            className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 outline-none focus:border-neutral-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-neutral-600 block">Performance Grade / Stars • کارکردگی / سٹارز</label>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: 5 }).map((_, idx) => {
                            const starValue = idx + 1;
                            const isSelected = starValue <= rating;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setRating(starValue)}
                                className="cursor-pointer hover:scale-110 transition duration-150 p-0.5"
                              >
                                <Icons.Star
                                  className={`w-5 h-5 ${
                                    isSelected
                                      ? "fill-amber-500 text-amber-500"
                                      : "text-neutral-300"
                                  }`}
                                />
                              </button>
                            );
                          })}
                          <span className="font-bold text-neutral-700 ml-1">
                            {rating} Star{rating > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-neutral-600">Review Feedback Comment / تاثرات کی تفصیل</label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Please detail your experience, promptness, billing clarity, cleanliness, and pride of delivery... / براہِ کرم اپنے تجربے، وقت کی پابندی، صفائی اور بجٹ کے متعلق تفصیل سے لکھیے۔"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="w-full bg-white border border-neutral-200 rounded-lg p-3 outline-none focus:border-neutral-400 resize-none"
                        />
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-pak-green border border-pak-green text-white font-semibold rounded-lg hover:bg-pak-darkgreen transition cursor-pointer"
                        >
                          Submit Verified Review / جائزہ فارم بھیجیں
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* TAB CONTENT: Credentials & Licensing */}
              {activeTab === "credentials" && (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-neutral-100 rounded-2xl p-5 space-y-1 bg-white">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 animate-pulse">
                        Operational Safety / آپریشنل سیفٹی
                      </span>
                      <h5 className="font-bold text-sm text-neutral-800">
                        Commercial Liability Insurance / کمرشل لائبیلٹی انشورنس
                      </h5>
                      <p className="text-xs text-neutral-600 leading-relaxed font-semibold mt-1">
                        Amount logged / درج شدہ انشورنس: <span className="text-neutral-900 font-extrabold">{contractor.insuranceAmount}</span>
                      </p>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        Safeguards both technician safety and your physical premises across any incidental property claims. • کام کے دوران کسی بھی حادثے کی صورت میں نقصان کی تلافی۔
                      </p>
                    </div>

                    <div className="border border-neutral-100 rounded-2xl p-5 space-y-1 bg-white">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 animate-pulse">
                        Government Validation / حکومتی تصدیق
                      </span>
                      <h5 className="font-bold text-sm text-neutral-800">
                        Active Trade Licensure / منظور شدہ ٹریڈ لائسنس
                      </h5>
                      <p className="text-xs text-neutral-600 leading-relaxed font-semibold mt-1">
                        ID / رجسٹریشن نمبر: <span className="text-neutral-900 font-extrabold">{contractor.licenseNumber}</span>
                      </p>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        Validated and cross-checked against municipal state registers. Verified date current as of {contractor.verifiedDate}. • بلدیہ اور متعلقہ ریاستی رجسٹرز سے مکمل تصدیق شدہ۔ آخری معائنہ: {contractor.verifiedDate}۔
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-pak-lightgreen/40 border border-pak-green/20 rounded-2xl text-xs text-neutral-800 leading-relaxed space-y-1">
                    <h6 className="font-bold flex items-center gap-1.5 text-pak-green">
                      <Icons.ShieldCheck className="w-4 h-4 text-pak-green" />
                      About the Hunarmand Security Seal • ہنرمند سیکیورٹی مہر کے بارے میں
                    </h6>
                    <p className="opacity-90">
                      <strong>Hunarmand (ہنرمند)</strong> operates a zero-tolerance policy for licensing fraud or unsafe trade delivery. We audit public criminal listings and verify direct reference contacts before allocating the **{contractor.vettedStatus}** seal to any trade provider. <span className="font-urdu block mt-1">ہنرمند کسی بھی قسم کے فراڈ یا غیر موزوں سلوک کے خلاف سخت پالیسی پر عمل پیرا ہے۔ ہم کاریگر کے کوائف اور مجرمانہ ریکارڈ کی مکمل جانچ کے بعد ہی تصدیق شدہ مہر جاری کرتے ہیں۔</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Vetting Verification Badge Card */}
          <div className="space-y-6">
            {/* Vetting summary card */}
            <div className={`border p-6 rounded-3xl space-y-4 ${tier.bg}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-xl shadow-xs">
                  {tier.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">
                    Vetted Seal Certified / مصدقہ کاریگر سرٹیفکیٹ
                  </h4>
                  <span className="text-[11px] font-extrabold tracking-wider bg-white px-2 py-0.5 rounded-full border border-neutral-200">
                    {tier.label}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed opacity-90">{tier.desc}</p>

              <div className="border-t border-neutral-200/60 pt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="opacity-85">Audit Verified Date / آڈٹ کی تاریخ</span>
                  <span className="font-bold text-neutral-900">{contractor.verifiedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-85">Licensing ID / لائسنس نمبر</span>
                  <span className="font-bold text-neutral-900">{contractor.licenseNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-85">Years Placed / تجربہ کار سال</span>
                  <span className="font-bold text-neutral-900">{contractor.yearsInBusiness} Yrs / سال</span>
                </div>
              </div>
            </div>

            {/* Direct contact dispatch details */}
            <div className="border border-neutral-100 bg-white rounded-3xl p-6 space-y-4 shadow-sm">
              <h4 className="font-bold text-sm text-neutral-800 flex items-center gap-1.5">
                <Icons.PhoneCall className="w-4 h-4 text-pak-green" />
                <span>Instant Connect / رابطہ کریں</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                {/* Highlighted WhatsApp CTA */}
                <a
                  href={`https://wa.me/${(contractor.whatsapp || contractor.phone).replace(/[\s\+]/g, "")}?text=Salam%20${encodeURIComponent(contractor.name)}%2C%20saw%20your%20profile%20on%20Hunarmand%20Pakistan.%20Are%20you%20available%20for%20work%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100/80 transition cursor-pointer border border-emerald-200/50"
                >
                  <Icons.MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-100 shrink-0" />
                  <div>
                    <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider block leading-none mb-0.5">WhatsApp Chat (مفت رابطہ)</span>
                    <span className="font-bold text-xs">{contractor.whatsapp || contractor.phone}</span>
                  </div>
                </a>

                {/* Direct Telephone calling with active highlight */}
                <a
                  href={`tel:${contractor.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100/80 transition cursor-pointer border border-neutral-200/50"
                >
                  <Icons.Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 block leading-none uppercase tracking-wider">Mobile Call (موبائل فون)</span>
                    <span className="font-bold text-neutral-800">{contractor.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${contractor.email}`}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-neutral-50 transition cursor-pointer"
                >
                  <Icons.Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 block leading-none">Email Address</span>
                    <span className="font-semibold text-neutral-700 break-all">{contractor.email}</span>
                  </div>
                </a>

                <a
                  href={contractor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-neutral-50 transition cursor-pointer"
                >
                  <Icons.Globe className="w-4 h-4 text-neutral-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-neutral-400 block leading-none">Website URL</span>
                    <span className="font-semibold text-neutral-700 break-all">{contractor.website.replace("https://", "")}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Dialog Trigger Modal */}
      <QuoteModal
        contractor={contractor}
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        onSubmitLead={onSubmitLead}
      />
    </div>
  );
};
