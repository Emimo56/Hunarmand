/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { Contractor, QuoteRequest } from "../types";

interface QuoteModalProps {
  contractor: Contractor;
  isOpen: boolean;
  onClose: () => void;
  onSubmitLead: (lead: QuoteRequest) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  contractor,
  isOpen,
  onClose,
  onSubmitLead,
}) => {
  const [clientName, setClientName] = React.useState("");
  const [clientEmail, setClientEmail] = React.useState("");
  const [clientPhone, setClientPhone] = React.useState("");
  const [projectDescription, setProjectDescription] = React.useState("");
  const [urgency, setUrgency] = React.useState<"emergency" | "this_week" | "planning">("planning");
  const [isSuccess, setIsSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !projectDescription) return;

    const newLead: QuoteRequest = {
      id: "lead_" + Date.now(),
      contractorId: contractor.id,
      contractorName: contractor.companyName,
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      clientPhone: clientPhone.trim(),
      projectDescription: projectDescription.trim(),
      urgency,
      submittedAt: new Date().toLocaleString(),
      status: "pending",
    };

    onSubmitLead(newLead);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setClientName("");
    setClientEmail("");
    setClientPhone("");
    setProjectDescription("");
    setUrgency("planning");
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-55 flex items-center justify-center p-4">
      <div
        id="quote-request-modal"
        className="bg-white rounded-3xl overflow-hidden max-w-lg w-full border border-neutral-100 shadow-2xl animate-scaleUp max-h-[90vh] flex flex-col"
      >
        {/* Header bar */}
        <div className="bg-pak-green px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Icons.Sparkles className="w-5 h-5 text-white animate-pulse" />
            <div>
              <h3 className="font-bold text-base">Request Professional Quote • قیمت کا تخمینہ حاصل کریں</h3>
              <p className="text-[10px] text-neutral-200">Forwarding direct to {contractor.companyName} / کاریگر کو ارسال کیا جا رہا ہے۔</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-pak-darkgreen transition text-neutral-200 hover:text-white cursor-pointer"
          >
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 overflow-y-auto">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-200">
              <Icons.Send className="w-7 h-7 text-emerald-600 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-lg text-neutral-900">Lead Transmitted with Pride • فارم کامیابی سے بھیج دیا گیا</h4>
              <p className="text-sm text-neutral-500 max-w-sm">
                Your specifications have been logged into the **Hunarmand System**. **{contractor.name}** and team will review and respond directly to your provided contact channels.
                <span className="font-urdu block mt-2 text-xs text-neutral-600">آپ کے کوائف ہنرمند سسٹم میں درج کر لیے گئے ہیں۔ ہمارے کاریگر جلد از جلد آپ کے فراہم کردہ نمبر یا ای میل پر رابطہ کریں گے۔</span>
              </p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-xl text-left border border-neutral-100 w-full text-xs space-y-2">
              <div className="font-semibold text-neutral-700">Lead Summary / خلاصہ:</div>
              <p className="text-neutral-500 italic">"{projectDescription}"</p>
              <div className="flex justify-between pt-1 border-t border-neutral-200/50 text-[10px] text-neutral-400">
                <span>Urgency: {urgency.replace("_", " ")}</span>
                <span>Contact: {clientEmail}</span>
              </div>
            </div>
            <button
               onClick={handleReset}
               className="w-full bg-pak-green text-white rounded-xl py-3 font-semibold text-xs cursor-pointer hover:bg-pak-darkgreen transition"
            >
              Return to Catalog • واپس جائیں
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
            <div className="flex items-center gap-3 bg-neutral-50 p-3 rounded-2xl border border-neutral-100 mb-2">
              <img
                src={contractor.avatar}
                alt={contractor.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 object-cover rounded-xl border border-white shadow-sm"
              />
              <div>
                <h5 className="font-bold text-xs text-neutral-800">{contractor.companyName}</h5>
                <p className="text-[10px] text-neutral-500">Hourly Reference: {contractor.hourlyRate}</p>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-600">Your Full Name / آپ کا نام <span className="text-red-500">*</span></label>
              <div className="relative">
                <Icons.User className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full text-sm border border-neutral-200 rounded-xl pl-9 pr-3 py-2 outline-none focus:border-neutral-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-600">Email Address / ای میل پتہ <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Icons.Mail className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full text-sm border border-neutral-200 rounded-xl pl-9 pr-3 py-2 outline-none focus:border-neutral-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-600">Phone Number / فون نمبر</label>
                <div className="relative">
                  <Icons.Phone className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="e.g. 0300 1234567"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full text-sm border border-neutral-200 rounded-xl pl-9 pr-3 py-2 outline-none focus:border-neutral-400"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-600">Project Urgency / کام شروع کرنے کے دن</label>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { key: "planning", labelEn: "Planning", labelUr: "پلاننگ" },
                  { key: "this_week", labelEn: "This Week", labelUr: "اسی ہفتے" },
                  { key: "emergency", labelEn: "Emergency", labelUr: "ہنگامی" }
                ] as const).map((urg) => (
                  <button
                    key={urg.key}
                    type="button"
                    onClick={() => setUrgency(urg.key)}
                    className={`py-2 px-1 text-[10px] font-bold border rounded-xl cursor-pointer text-center transition flex flex-col items-center justify-center ${
                      urgency === urg.key
                        ? "bg-pak-green border-pak-green text-white shadow-xs"
                        : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                    }`}
                  >
                    <span>{urg.labelEn}</span>
                    <span className="text-[9px] opacity-80">{urg.labelUr}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-600">Project Description & Scope / کام کی تفصیل اور حد <span className="text-red-500">*</span></label>
              <p className="text-[10px] text-neutral-400">Describe what you need detailed, sized, painted or scheduled • کیا کام کروانا چاہتے ہیں، تفصیل سے لکھیں</p>
              <textarea
                required
                rows={3}
                placeholder="Please outline the scope of works required... / براہِ کرم یہاں مطلوبہ کام کا خاکہ اور تفصیل لکھیں۔"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full text-sm border border-neutral-200 rounded-xl p-3 outline-none focus:border-neutral-400 resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2 text-xs shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-neutral-200 text-neutral-600 rounded-xl hover:bg-neutral-50 cursor-pointer"
              >
                Cancel • منسوخ
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-pak-green border border-pak-green text-white font-semibold rounded-xl hover:bg-pak-darkgreen transition cursor-pointer"
              >
                Submit Form • فارم جمع کروائیں
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
