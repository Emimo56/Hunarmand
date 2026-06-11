/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { CategoryInfo } from "../types";

// Helper component to render Lucide icon by dynamic string name
export const DynamicIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className = "w-5 h-5",
}) => {
  // @ts-ignore - Dynamic key lookup on Lucide icon object
  const IconComponent = Icons[name];
  if (!IconComponent) {
    // Return a default toolbox/hammer icon if not found
    return <Icons.Hammer className={className} />;
  }
  return <IconComponent className={className} />;
};

interface CategoryFilterProps {
  categories: CategoryInfo[];
  selectedCategoryId: string | null;
  onSelectCategory: (id: string | null) => void;
  onAddNewCategory: (name: string, description: string, iconName: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onAddNewCategory,
}) => {
  const [isAdding, setIsAdding] = React.useState(false);
  const [newCatName, setNewCatName] = React.useState("");
  const [newCatDesc, setNewCatDesc] = React.useState("");
  const [newCatIcon, setNewCatIcon] = React.useState("Wrench"); // Default icon

  const getCategoryUrdu = (id: string) => {
    switch (id) {
      case "electrician": return " / الیکٹریشن";
      case "painter": return " / پینٹر";
      case "event_decorator": return " / ڈیکوریٹر";
      case "plumber": return " / پلمبر";
      case "ac_repair": return " / اے سی اور فریج";
      default: return "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    
    // Generate valid id from name
    onAddNewCategory(newCatName.trim(), newCatDesc.trim(), newCatIcon);
    setNewCatName("");
    setNewCatDesc("");
    setNewCatIcon("Wrench");
    setIsAdding(false);
  };

  const selectColorClasses = (theme: string, active: boolean) => {
    if (active) {
      return "bg-pak-green text-white shadow-md shadow-pak-green/20 border-transparent";
    } else {
      return "bg-white border-neutral-200 text-neutral-800 hover:bg-pak-lightgreen hover:text-pak-green hover:border-pak-green/20";
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Select Category / کیٹیگری منتخب کریں
          </h3>
          <p className="text-xs text-neutral-400">Filter specialists who trade on proud craftsmanship / اپنے مطلوبہ شعبے کے ماہر اور بااعتماد کاریگر تلاش کریں</p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          id="btn-trigger-add-category"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-300 bg-white px-3 py-1.5 rounded-full transition-all cursor-pointer"
        >
          <Icons.Plus className="w-3.5 h-3.5" />
          Add Custom Category / نئی کیٹیگری شامل کریں
        </button>
      </div>

      {isAdding && (
        <form
          id="add-category-form"
          onSubmit={handleSubmit}
          className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm max-w-xl space-y-4 animate-fadeIn"
        >
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <h4 className="text-sm font-semibold text-neutral-800 flex items-center gap-2">
              <Icons.Sparkles className="w-4 h-4 text-pak-green" />
              Scale Hunarmand's Category Architecture / کارِ ہنر میں نئی کیٹیگری شامل کریں
            </h4>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
            >
              <Icons.X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-neutral-600">Category Name / کیٹیگری کا نام</label>
              <input
                type="text"
                required
                placeholder="e.g. Carpenter, Welder / مثلاً ویلڈر، بڑھئی"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                className="w-full text-sm border border-neutral-200 rounded-lg px-3 py-2 outline-none focus:border-neutral-400"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-neutral-600">Representational Icon / آئیکن منتخب کریں</label>
              <select
                value={newCatIcon}
                onChange={(e) => setNewCatIcon(e.target.value)}
                className="w-full text-sm border border-neutral-200 rounded-lg px-2 py-2 outline-none focus:border-neutral-400"
              >
                <option value="Wrench">Wrench / پائپ پلمبنگ (رنچ)</option>
                <option value="Hammer">Hammer / لکڑی و تعمیرات (ہتھوڑا)</option>
                <option value="Sprout">Sprout / باغبانی و بیل بوٹے (پودا)</option>
                <option value="Plug">Plug / بجلی کا کام (پلگ)</option>
                <option value="Home">Home / گھر کی دیکھ بھال (گھر)</option>
                <option value="Brush">Brush / رنگ و روغن (برش)</option>
                <option value="Scissors">Scissors / سلائی یا سجاوٹ (قینچی)</option>
                <option value="Camera">Camera / میڈیا اور تصویر کشی (کیمرہ)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-neutral-600">Service Standards & Values / تفصیل اور خدمات کے معیار</label>
            <input
              type="text"
              required
              placeholder="e.g. Master level carpentry, cabinet making... / مثلاً لکڑی کا کام، الماری کی ڈیزائنگ"
              value={newCatDesc}
              onChange={(e) => setNewCatDesc(e.target.value)}
              className="w-full text-sm border border-neutral-200 rounded-lg px-3 py-2 outline-none focus:border-neutral-400"
            />
          </div>

          <div className="flex justify-end gap-2 text-xs pt-1">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-50 cursor-pointer"
            >
              Cancel / منسوخ کریں
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-pak-green border border-pak-green text-white rounded-lg hover:bg-pak-darkgreen transition shadow-sm cursor-pointer font-medium"
            >
              Create Category / نئی کیٹیگری بنائیں
            </button>
          </div>
        </form>
      )}

      {/* Category selection bar */}
      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={() => onSelectCategory(null)}
          id="btn-cat-all"
          className={`flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
            selectedCategoryId === null
              ? "bg-pak-green text-white border-transparent shadow shadow-pak-green/10"
              : "bg-white border-neutral-200 text-neutral-700 hover:bg-pak-lightgreen hover:text-pak-green hover:border-pak-green/20"
          }`}
        >
          <Icons.Layers className="w-3.5 h-3.5" />
          Show All / تمام شعبے
        </button>

        {categories.map((cat) => {
          const isActive = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              id={`btn-cat-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${selectColorClasses(
                cat.colorTheme || "neutral",
                isActive
              )}`}
            >
              <DynamicIcon name={cat.iconName} className="w-3.5 h-3.5" />
              {cat.name}
              {getCategoryUrdu(cat.id)}
            </button>
          );
        })}
      </div>
    </div>
  );
};
