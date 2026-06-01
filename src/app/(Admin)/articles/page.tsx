"use client";

import { useState } from "react";
import {
  HelpCircle, Bell, Search, Plus,
  Pencil, Trash2, ChevronLeft, ChevronRight,
  TrendingUp, FileStack, Send, FileMinus2, X, BookOpen, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminSidebar from "@/app/_components/AdminSidebar/AdminSidebar";


type Category = "Plastic" | "Paper" | "Metal" | "Glass";
type Status   = "Published" | "Draft";

interface Article {
  id:       number;
  title:    string;
  author:   string;
  category: Category;
  status:   Status;
  modified: string;
}

interface StatItem {
  icon:  React.ElementType;
  label: string;
  value: string;
  color: string;
  bg:    string;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { icon: FileStack,  label: "Total Articles", value: "124",  color: "text-[#4a7c59]",   bg: "bg-[#eaf3ed]"  },
  { icon: Send,       label: "Published",      value: "89",   color: "text-[#4a7c59]",   bg: "bg-[#eaf3ed]"  },
  { icon: FileMinus2, label: "Drafts",         value: "35",   color: "text-amber-600",   bg: "bg-amber-50"   },
  { icon: TrendingUp, label: "Growth",         value: "+12%", color: "text-emerald-600", bg: "bg-emerald-50" },
];

const CATEGORY_COLORS: Record<Category, string> = {
  Plastic: "bg-blue-100 text-blue-700",
  Paper:   "bg-orange-100 text-orange-700",
  Metal:   "bg-slate-100 text-slate-700",
  Glass:   "bg-cyan-100 text-cyan-700",
};

const ARTICLES: Article[] = [
  { id: 1, title: "Modern Plastic Upcycling 101",    author: "By Sarah Jenkins",  category: "Plastic", status: "Published", modified: "Oct 24, 2023" },
  { id: 2, title: "Paper Waste: A Hidden Resource",  author: "By Mark Henderson", category: "Paper",   status: "Draft",     modified: "Oct 22, 2023" },
  { id: 3, title: "Metals and the Circular Economy", author: "By Lisa Wong",      category: "Metal",   status: "Published", modified: "Oct 20, 2023" },
  { id: 4, title: "Infinite Recyclability: Glass",   author: "By Sarah Jenkins",  category: "Glass",   status: "Published", modified: "Oct 18, 2023" },
];

const CATEGORIES: Category[] = ["Plastic", "Paper", "Metal", "Glass"];

// ── Add Article Modal ──────────────────────────────────────────────────────────
function AddArticleModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("Published");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#f7f9f7] rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <X size={16} />
        </button>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-800">Article Details</h2>
          <p className="text-sm text-gray-500 mt-0.5">Create a new article for the Nazif community.</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Article Title</label>
            <Input placeholder="Enter article title..." className="bg-white border-gray-200 text-sm h-9" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Summary</label>
            <textarea
              rows={3}
              placeholder="Brief overview of the article's content and key takeaways..."
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/20 focus:border-[#2d5a3d] transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Category</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/20 focus:border-[#2d5a3d] transition-colors pr-8">
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Author</label>
              <Input placeholder="Author name" className="bg-white border-gray-200 text-sm h-9" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Status</label>
            <div className="flex rounded-lg overflow-hidden border border-gray-200 bg-white">
              <button
                onClick={() => setStatus("Published")}
                className={`flex-1 py-2 text-sm font-medium transition-colors ${status === "Published" ? "bg-[#2d5a3d] text-white" : "text-gray-500 hover:bg-gray-50"}`}
              >
                Published
              </button>
              <button
                onClick={() => setStatus("Draft")}
                className={`flex-1 py-2 text-sm font-medium transition-colors ${status === "Draft" ? "bg-[#2d5a3d] text-white" : "text-gray-500 hover:bg-gray-50"}`}
              >
                Draft
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Content</label>
            <textarea
              rows={4}
              placeholder="Write the full article content here..."
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#2d5a3d]/20 focus:border-[#2d5a3d] transition-colors"
            />
          </div>
        </div>
        <Button className="w-full mt-5 bg-[#2d5a3d] hover:bg-[#234830] text-white h-10 text-sm gap-2 rounded-xl">
          <BookOpen size={15} /> Save Article
        </Button>
      </div>
    </div>
  );
}
// ── Main Page ──────────────────────────────────────────────────────────────────
export default function ArticlesPage() {
  const [search, setSearch]       = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const filtered = ARTICLES.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#f7f9f7] font-sans overflow-hidden">
      {showModal && <AddArticleModal onClose={() => setShowModal(false)} />}

      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 shrink-0">
          <div className="flex-1 relative max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search articles, categories…"
              className="pl-8 h-8 text-sm bg-gray-50 border-gray-200"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative p-1.5 text-gray-400 hover:text-gray-600">
              <Bell size={18} />
              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600"><HelpCircle size={18} /></button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-7 h-7 rounded-full bg-[#2d5a3d] flex items-center justify-center text-white text-xs font-bold">A</div>
              <span className="text-sm text-gray-600 font-medium">Admin Panel</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Articles</h1>
              <p className="text-sm text-gray-500 mt-0.5">Manage educational resources and recycling guidelines for the Nazif community.</p>
            </div>
            <Button onClick={() => setShowModal(true)} className="bg-[#2d5a3d] hover:bg-[#234830] text-white h-9 text-sm gap-1.5">
              <Plus size={15} /> Add New Article
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {STATS.map(({ icon: Icon, label, value, color, bg }) => (
              <div key={label} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <div className={`${bg} p-2 rounded-lg`}>
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className={`text-xl font-bold ${color}`}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Article Title", "Category", "Status", "Modified", "Actions"].map((h) => (
                    <th key={h} className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((article) => (
                  <tr key={article.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                          <FileText size={14} className="text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{article.title}</p>
                          <p className="text-xs text-gray-400">{article.author}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[article.category]}`}>
                        {article.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${article.status === "Published" ? "bg-emerald-500" : "bg-amber-400"}`} />
                        <span className={`text-sm ${article.status === "Published" ? "text-emerald-600" : "text-amber-600"}`}>{article.status}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">{article.modified}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-[#2d5a3d] hover:bg-[#eaf3ed] transition-colors"><Pencil size={14} /></button>
                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between px-5 py-3.5">
              <p className="text-xs text-gray-400">Showing {filtered.length} of 124 articles</p>
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"><ChevronLeft size={14} /></button>
                {[1, 2, 3].map((p) => (
                  <button key={p} className={`w-7 h-7 text-xs rounded-lg ${p === 1 ? "bg-[#2d5a3d] text-white font-semibold" : "text-gray-500 hover:bg-gray-100"}`}>{p}</button>
                ))}
                <button className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"><ChevronRight size={14} /></button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}