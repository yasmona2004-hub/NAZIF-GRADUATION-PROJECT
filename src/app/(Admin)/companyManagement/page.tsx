// "use client";

// import { useState } from "react";
// import AdminSidebar from "@/app/_Components/AdminSidebar/AdminSidebar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
// import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
// import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogFooter,} from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
// import {Users,MapPin,Truck,Plus, Search,SlidersHorizontal,Download,Pencil,Trash2,ChevronLeft,ChevronRight,TrendingUp,} from "lucide-react";
// import Image from "next/image";

// // ─── Types ────────────────────────────────────────────────────────────────────

// type AgentStatus = "Active" | "On Leave" | "Inactive";

// interface Agent {
//   id: number;
//   name: string;
//   email: string;
//   area: string | null;
//   status: AgentStatus;
//   avatar: string;
// }

// // ─── Mock data ────────────────────────────────────────────────────────────────

// const INITIAL_AGENTS: Agent[] = [
//   {
//     id: 1,
//     name: "Marcus Thorne",
//     email: "marcus.t@nazif-eco.com",
//     area: "Downtown Zone",
//     status: "Active",
//     avatar: "https://i.pravatar.cc/40?img=11",
//   },
//   {
//     id: 2,
//     name: "Sarah Jenkins",
//     email: "s.jenkins@nazif-eco.com",
//     area: "Industrial Park",
//     status: "Active",
//     avatar: "https://i.pravatar.cc/40?img=5",
//   },
//   {
//     id: 3,
//     name: "David Chen",
//     email: "d.chen@nazif-eco.com",
//     area: null,
//     status: "On Leave",
//     avatar: "https://i.pravatar.cc/40?img=12",
//   },
//   {
//     id: 4,
//     name: "Elena Rodriguez",
//     email: "e.rodriguez@nazif-eco.com",
//     area: "Residential Heights",
//     status: "Active",
//     avatar: "https://i.pravatar.cc/40?img=9",
//   },
// ];

// const AREAS = [
//   "Downtown Zone",
//   "Industrial Park",
//   "Residential Heights",
//   "North District",
//   "South District",
//   "East Side",
// ];

// const PAGE_SIZE = 4;

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function StatCard({
//   icon,
//   label,
//   value,
//   sub,
//   subIcon,
//   subColor,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
//   sub: string;
//   subIcon?: React.ReactNode;
//   subColor?: string;
// }) {
//   return (
//     <div className="flex-1 bg-white rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm border border-gray-100">
//       <div className="w-14 h-14 rounded-xl bg-[#f0f5ee] flex items-center justify-center text-[#2d6a2d] shrink-0">
//         {icon}
//       </div>
//       <div>
//         <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
//           {label}
//         </p>
//         <p className="text-3xl font-bold text-gray-800 leading-none">{value}</p>
//         <p
//           className={`text-xs mt-1 flex items-center gap-1 font-medium ${
//             subColor ?? "text-gray-400"
//           }`}
//         >
//           {subIcon}
//           {sub}
//         </p>
//       </div>
//     </div>
//   );
// }

// function StatusBadge({ status }: { status: AgentStatus }) {
//   const map: Record<AgentStatus, string> = {
//     Active: "text-[#2d6a2d] bg-[#eaf4ea]",
//     "On Leave": "text-amber-700 bg-amber-50",
//     Inactive: "text-gray-500 bg-gray-100",
//   };
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${map[status]}`}
//     >
//       <span
//         className={`w-1.5 h-1.5 rounded-full ${
//           status === "Active"
//             ? "bg-[#2d6a2d]"
//             : status === "On Leave"
//             ? "bg-amber-500"
//             : "bg-gray-400"
//         }`}
//       />
//       {status}
//     </span>
//   );
// }

// function AreaBadge({ area }: { area: string | null }) {
//   if (!area)
//     return (
//       <span className="text-xs italic text-gray-400 border border-dashed border-gray-300 rounded-full px-3 py-1">
//         Unassigned
//       </span>
//     );
//   return (
//     <span className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
//       {area}
//     </span>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function AgentsManagementPage() {
//   const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);

//   // Dialog state
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [editTarget, setEditTarget] = useState<Agent | null>(null);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     area: "",
//     status: "Active" as AgentStatus,
//   });

//   // ── helpers
//   const filtered = agents.filter(
//     (a) =>
//       a.name.toLowerCase().includes(search.toLowerCase()) ||
//       a.email.toLowerCase().includes(search.toLowerCase())
//   );
//   const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//   const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

//   function openAdd() {
//     setEditTarget(null);
//     setForm({ name: "", email: "", area: "", status: "Active" });
//     setDialogOpen(true);
//   }

//   function openEdit(agent: Agent) {
//     setEditTarget(agent);
//     setForm({
//       name: agent.name,
//       email: agent.email,
//       area: agent.area ?? "",
//       status: agent.status,
//     });
//     setDialogOpen(true);
//   }

//   function handleDelete(id: number) {
//     setAgents((prev) => prev.filter((a) => a.id !== id));
//   }

//   function handleSave() {
//     if (editTarget) {
//       setAgents((prev) =>
//         prev.map((a) =>
//           a.id === editTarget.id
//             ? {
//                 ...a,
//                 name: form.name,
//                 email: form.email,
//                 area: form.area || null,
//                 status: form.status,
//               }
//             : a
//         )
//       );
//     } else {
//       const newAgent: Agent = {
//         id: Date.now(),
//         name: form.name,
//         email: form.email,
//         area: form.area || null,
//         status: form.status,
//         avatar: `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70)}`,
//       };
//       setAgents((prev) => [...prev, newAgent]);
//     }
//     setDialogOpen(false);
//   }

//   return (
//     <div className="flex h-screen bg-[#f4f6f3] font-sans overflow-hidden">
//       {/* Sidebar */}
//       <AdminSidebar />

//       {/* Main */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top bar */}
//         <header className="bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-between shrink-0">
//           <div className="relative w-64">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//             <Input
//               placeholder="Search agents..."
//               className="pl-9 h-9 text-sm bg-gray-50 border-gray-200 rounded-xl focus-visible:ring-[#3a7d3a]"
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setPage(1);
//               }}
//             />
//           </div>
//           <div className="flex items-center gap-3">
//             <button className="relative p-2 text-gray-500 hover:text-gray-700">
//               <span className="sr-only">Notifications</span>
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//                 <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//               </svg>
//               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
//             </button>
//             <button className="p-2 text-gray-500 hover:text-gray-700">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.35-4.35" />
//               </svg>
//             </button>
//             <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
//               <div className="text-right hidden sm:block">
//                 <p className="text-xs font-semibold text-gray-700">Admin User</p>
//                 <p className="text-[10px] text-gray-400">System Overseer</p>
//               </div>
//               <div className="w-9 h-9 rounded-full bg-[#2d6a2d] text-white text-sm font-bold flex items-center justify-center">
//                 AU
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 overflow-y-auto px-8 py-6">
//           {/* Breadcrumb */}
//           <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
//             <span className="text-[#3a7d3a] font-semibold">Operations</span>
//             {" › "}Logistics
//           </p>

//           {/* Page title + CTA */}
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
//               Agents Management
//             </h1>
//             <Button
//               onClick={openAdd}
//               className="bg-[#2d6a2d] hover:bg-[#245424] text-white rounded-xl gap-2 px-5 shadow-md shadow-green-900/20"
//             >
//               <Plus className="w-4 h-4" />
//               Add New Agent
//             </Button>
//           </div>

//           {/* Stat cards */}
//           <div className="flex gap-4 mb-6">
//             <StatCard
//               icon={<Users className="w-7 h-7" />}
//               label="Total Agents"
//               value={String(agents.length)}
//               sub="+12% this month"
//               subIcon={<TrendingUp className="w-3 h-3" />}
//               subColor="text-[#2d6a2d]"
//             />
//             <StatCard
//               icon={<MapPin className="w-7 h-7" />}
//               label="Active Service Areas"
//               value="18"
//               sub="Across 5 districts"
//             />
//             <StatCard
//               icon={<Truck className="w-7 h-7" />}
//               label="Completed Pickups"
//               value="8,942"
//               sub="98% success rate"
//               subIcon={<TrendingUp className="w-3 h-3" />}
//               subColor="text-[#2d6a2d]"
//             />
//           </div>

//           {/* Table card */}
//           <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
//             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
//               <h2 className="font-bold text-gray-800 text-lg">
//                 Agents Directory
//               </h2>
//               <div className="flex items-center gap-2">
//                 <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
//                   <SlidersHorizontal className="w-4 h-4" />
//                 </button>
//                 <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
//                   <Download className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             <Table>
//               <TableHeader>
//                 <TableRow className="hover:bg-transparent border-gray-100">
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold pl-6">
//                     Agent Name
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
//                     Email
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
//                     Assigned Area
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
//                     Status
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold pr-6">
//                     Actions
//                   </TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {paginated.map((agent) => (
//                   <TableRow
//                     key={agent.id}
//                     className="border-gray-50 hover:bg-[#f8faf7] transition-colors"
//                   >
//                     <TableCell className="pl-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <img
//                           src={agent.avatar}
//                           alt={agent.name}
//                           width={36}
//                           height={36}
//                           className="rounded-full object-cover ring-2 ring-[#e0ede0]"
//                         />
//                         <span className="font-semibold text-sm text-gray-800">
//                           {agent.name}
//                         </span>
//                       </div>
//                     </TableCell>
//                     <TableCell className="text-sm text-gray-500">
//                       {agent.email}
//                     </TableCell>
//                     <TableCell>
//                       <AreaBadge area={agent.area} />
//                     </TableCell>
//                     <TableCell>
//                       <StatusBadge status={agent.status} />
//                     </TableCell>
//                     <TableCell className="pr-6">
//                       <div className="flex items-center gap-1">
//                         <button
//                           onClick={() => openEdit(agent)}
//                           className="p-2 text-gray-400 hover:text-[#2d6a2d] hover:bg-[#f0f5ee] rounded-lg transition-colors"
//                         >
//                           <Pencil className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(agent.id)}
//                           className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>

//             {/* Pagination */}
//             <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
//               <p className="text-xs text-gray-400">
//                 Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–
//                 {Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
//                 {filtered.length} agents
//               </p>
//               <div className="flex items-center gap-1">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page === 1}
//                   className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </button>
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                   (n) => (
//                     <button
//                       key={n}
//                       onClick={() => setPage(n)}
//                       className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${
//                         n === page
//                           ? "bg-[#2d6a2d] text-white shadow-sm"
//                           : "text-gray-500 hover:bg-gray-100"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   )
//                 )}
//                 <button
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   disabled={page === totalPages}
//                   className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Add / Edit Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md rounded-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-lg font-bold text-gray-800">
//               {editTarget ? "Edit Agent" : "Add New Agent"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="space-y-4 py-2">
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Full Name
//               </Label>
//               <Input
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 placeholder="e.g. Marcus Thorne"
//                 className="rounded-xl focus-visible:ring-[#3a7d3a]"
//               />
//             </div>
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Email
//               </Label>
//               <Input
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 placeholder="e.g. name@nazif-eco.com"
//                 className="rounded-xl focus-visible:ring-[#3a7d3a]"
//               />
//             </div>
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Assigned Area
//               </Label>
//               <Select
//                 value={form.area}
//                 onValueChange={(v) => setForm({ ...form, area: v })}
//               >
//                 <SelectTrigger className="rounded-xl focus:ring-[#3a7d3a]">
//                   <SelectValue placeholder="Select area (optional)" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {AREAS.map((a) => (
//                     <SelectItem key={a} value={a}>
//                       {a}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Status
//               </Label>
//               <Select
//                 value={form.status}
//                 onValueChange={(v) =>
//                   setForm({ ...form, status: v as AgentStatus })
//                 }
//               >
//                 <SelectTrigger className="rounded-xl focus:ring-[#3a7d3a]">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="Active">Active</SelectItem>
//                   <SelectItem value="On Leave">On Leave</SelectItem>
//                   <SelectItem value="Inactive">Inactive</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <DialogFooter className="gap-2">
//             <Button
//               variant="outline"
//               onClick={() => setDialogOpen(false)}
//               className="rounded-xl border-gray-200"
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handleSave}
//               disabled={!form.name || !form.email}
//               className="bg-[#2d6a2d] hover:bg-[#245424] text-white rounded-xl"
//             >
//               {editTarget ? "Save Changes" : "Add Agent"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import AdminSidebar from "@/app/_Components/AdminSidebar/AdminSidebar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
// import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
// import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogFooter,} from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
// import {Users,MapPin,Truck,Plus, Search,SlidersHorizontal,Download,Pencil,Trash2,ChevronLeft,ChevronRight,TrendingUp,} from "lucide-react";
// import Image from "next/image";

// // ─── Types ────────────────────────────────────────────────────────────────────

// type AgentStatus = "Active" | "On Leave" | "Inactive";

// interface Agent {
//   id: number;
//   name: string;
//   email: string;
//   area: string | null;
//   status: AgentStatus;
//   avatar: string;
// }

// // ─── Mock data ────────────────────────────────────────────────────────────────

// const INITIAL_AGENTS: Agent[] = [
//   {
//     id: 1,
//     name: "Marcus Thorne",
//     email: "marcus.t@nazif-eco.com",
//     area: "Downtown Zone",
//     status: "Active",
//     avatar: "https://i.pravatar.cc/40?img=11",
//   },
//   {
//     id: 2,
//     name: "Sarah Jenkins",
//     email: "s.jenkins@nazif-eco.com",
//     area: "Industrial Park",
//     status: "Active",
//     avatar: "https://i.pravatar.cc/40?img=5",
//   },
//   {
//     id: 3,
//     name: "David Chen",
//     email: "d.chen@nazif-eco.com",
//     area: null,
//     status: "On Leave",
//     avatar: "https://i.pravatar.cc/40?img=12",
//   },
//   {
//     id: 4,
//     name: "Elena Rodriguez",
//     email: "e.rodriguez@nazif-eco.com",
//     area: "Residential Heights",
//     status: "Active",
//     avatar: "https://i.pravatar.cc/40?img=9",
//   },
// ];

// const AREAS = [
//   "Downtown Zone",
//   "Industrial Park",
//   "Residential Heights",
//   "North District",
//   "South District",
//   "East Side",
// ];

// const PAGE_SIZE = 4;

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function StatCard({
//   icon,
//   label,
//   value,
//   sub,
//   subIcon,
//   subColor,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
//   sub: string;
//   subIcon?: React.ReactNode;
//   subColor?: string;
// }) {
//   return (
//     <div className="flex-1 bg-white rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm border border-gray-100">
//       <div className="w-14 h-14 rounded-xl bg-[#f0f5ee] flex items-center justify-center text-[#2d6a2d] shrink-0">
//         {icon}
//       </div>
//       <div>
//         <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
//           {label}
//         </p>
//         <p className="text-3xl font-bold text-gray-800 leading-none">{value}</p>
//         <p
//           className={`text-xs mt-1 flex items-center gap-1 font-medium ${
//             subColor ?? "text-gray-400"
//           }`}
//         >
//           {subIcon}
//           {sub}
//         </p>
//       </div>
//     </div>
//   );
// }

// function StatusBadge({ status }: { status: AgentStatus }) {
//   const map: Record<AgentStatus, string> = {
//     Active: "text-[#2d6a2d] bg-[#eaf4ea]",
//     "On Leave": "text-amber-700 bg-amber-50",
//     Inactive: "text-gray-500 bg-gray-100",
//   };
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${map[status]}`}
//     >
//       <span
//         className={`w-1.5 h-1.5 rounded-full ${
//           status === "Active"
//             ? "bg-[#2d6a2d]"
//             : status === "On Leave"
//             ? "bg-amber-500"
//             : "bg-gray-400"
//         }`}
//       />
//       {status}
//     </span>
//   );
// }

// function AreaBadge({ area }: { area: string | null }) {
//   if (!area)
//     return (
//       <span className="text-xs italic text-gray-400 border border-dashed border-gray-300 rounded-full px-3 py-1">
//         Unassigned
//       </span>
//     );
//   return (
//     <span className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
//       {area}
//     </span>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function AgentsManagementPage() {
//   const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);

//   // Dialog state
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [editTarget, setEditTarget] = useState<Agent | null>(null);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     area: "",
//     status: "Active" as AgentStatus,
//   });

//   // ── helpers
//   const filtered = agents.filter(
//     (a) =>
//       a.name.toLowerCase().includes(search.toLowerCase()) ||
//       a.email.toLowerCase().includes(search.toLowerCase())
//   );
//   const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//   const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

//   function openAdd() {
//     setEditTarget(null);
//     setForm({ name: "", email: "", area: "", status: "Active" });
//     setDialogOpen(true);
//   }

//   function openEdit(agent: Agent) {
//     setEditTarget(agent);
//     setForm({
//       name: agent.name,
//       email: agent.email,
//       area: agent.area ?? "",
//       status: agent.status,
//     });
//     setDialogOpen(true);
//   }

//   function handleDelete(id: number) {
//     setAgents((prev) => prev.filter((a) => a.id !== id));
//   }

//   function handleSave() {
//     if (editTarget) {
//       setAgents((prev) =>
//         prev.map((a) =>
//           a.id === editTarget.id
//             ? {
//                 ...a,
//                 name: form.name,
//                 email: form.email,
//                 area: form.area || null,
//                 status: form.status,
//               }
//             : a
//         )
//       );
//     } else {
//       const newAgent: Agent = {
//         id: Date.now(),
//         name: form.name,
//         email: form.email,
//         area: form.area || null,
//         status: form.status,
//         avatar: `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70)}`,
//       };
//       setAgents((prev) => [...prev, newAgent]);
//     }
//     setDialogOpen(false);
//   }

//   return (
//     <div className="flex h-screen bg-[#f4f6f3] font-sans overflow-hidden">
//       {/* Sidebar */}
//       <AdminSidebar />

//       {/* Main */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top bar */}
//         <header className="bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-between shrink-0">
//           <div className="relative w-64">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//             <Input
//               placeholder="Search agents..."
//               className="pl-9 h-9 text-sm bg-gray-50 border-gray-200 rounded-xl focus-visible:ring-[#3a7d3a]"
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setPage(1);
//               }}
//             />
//           </div>
//           <div className="flex items-center gap-3">
//             <button className="relative p-2 text-gray-500 hover:text-gray-700">
//               <span className="sr-only">Notifications</span>
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//                 <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//               </svg>
//               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
//             </button>
//             <button className="p-2 text-gray-500 hover:text-gray-700">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.35-4.35" />
//               </svg>
//             </button>
//             <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
//               <div className="text-right hidden sm:block">
//                 <p className="text-xs font-semibold text-gray-700">Admin User</p>
//                 <p className="text-[10px] text-gray-400">System Overseer</p>
//               </div>
//               <div className="w-9 h-9 rounded-full bg-[#2d6a2d] text-white text-sm font-bold flex items-center justify-center">
//                 AU
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 overflow-y-auto px-8 py-6">
//           {/* Breadcrumb */}
//           <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
//             <span className="text-[#3a7d3a] font-semibold">Operations</span>
//             {" › "}Logistics
//           </p>

//           {/* Page title + CTA */}
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
//               Agents Management
//             </h1>
//             <Button
//               onClick={openAdd}
//               className="bg-[#2d6a2d] hover:bg-[#245424] text-white rounded-xl gap-2 px-5 shadow-md shadow-green-900/20"
//             >
//               <Plus className="w-4 h-4" />
//               Add New Agent
//             </Button>
//           </div>

//           {/* Stat cards */}
//           <div className="flex gap-4 mb-6">
//             <StatCard
//               icon={<Users className="w-7 h-7" />}
//               label="Total Agents"
//               value={String(agents.length)}
//               sub="+12% this month"
//               subIcon={<TrendingUp className="w-3 h-3" />}
//               subColor="text-[#2d6a2d]"
//             />
//             <StatCard
//               icon={<MapPin className="w-7 h-7" />}
//               label="Active Service Areas"
//               value="18"
//               sub="Across 5 districts"
//             />
//             <StatCard
//               icon={<Truck className="w-7 h-7" />}
//               label="Completed Pickups"
//               value="8,942"
//               sub="98% success rate"
//               subIcon={<TrendingUp className="w-3 h-3" />}
//               subColor="text-[#2d6a2d]"
//             />
//           </div>

//           {/* Table card */}
//           <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
//             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
//               <h2 className="font-bold text-gray-800 text-lg">
//                 Agents Directory
//               </h2>
//               <div className="flex items-center gap-2">
//                 <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
//                   <SlidersHorizontal className="w-4 h-4" />
//                 </button>
//                 <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
//                   <Download className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             <Table>
//               <TableHeader>
//                 <TableRow className="hover:bg-transparent border-gray-100">
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold pl-6">
//                     Agent Name
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
//                     Email
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
//                     Assigned Area
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
//                     Status
//                   </TableHead>
//                   <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold pr-6">
//                     Actions
//                   </TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {paginated.map((agent) => (
//                   <TableRow
//                     key={agent.id}
//                     className="border-gray-50 hover:bg-[#f8faf7] transition-colors"
//                   >
//                     <TableCell className="pl-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <img
//                           src={agent.avatar}
//                           alt={agent.name}
//                           width={36}
//                           height={36}
//                           className="rounded-full object-cover ring-2 ring-[#e0ede0]"
//                         />
//                         <span className="font-semibold text-sm text-gray-800">
//                           {agent.name}
//                         </span>
//                       </div>
//                     </TableCell>
//                     <TableCell className="text-sm text-gray-500">
//                       {agent.email}
//                     </TableCell>
//                     <TableCell>
//                       <AreaBadge area={agent.area} />
//                     </TableCell>
//                     <TableCell>
//                       <StatusBadge status={agent.status} />
//                     </TableCell>
//                     <TableCell className="pr-6">
//                       <div className="flex items-center gap-1">
//                         <button
//                           onClick={() => openEdit(agent)}
//                           className="p-2 text-gray-400 hover:text-[#2d6a2d] hover:bg-[#f0f5ee] rounded-lg transition-colors"
//                         >
//                           <Pencil className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(agent.id)}
//                           className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>

//             {/* Pagination */}
//             <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
//               <p className="text-xs text-gray-400">
//                 Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–
//                 {Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
//                 {filtered.length} agents
//               </p>
//               <div className="flex items-center gap-1">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page === 1}
//                   className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </button>
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                   (n) => (
//                     <button
//                       key={n}
//                       onClick={() => setPage(n)}
//                       className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${
//                         n === page
//                           ? "bg-[#2d6a2d] text-white shadow-sm"
//                           : "text-gray-500 hover:bg-gray-100"
//                       }`}
//                     >
//                       {n}
//                     </button>
//                   )
//                 )}
//                 <button
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   disabled={page === totalPages}
//                   className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Add / Edit Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md rounded-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-lg font-bold text-gray-800">
//               {editTarget ? "Edit Agent" : "Add New Agent"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="space-y-4 py-2">
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Full Name
//               </Label>
//               <Input
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 placeholder="e.g. Marcus Thorne"
//                 className="rounded-xl focus-visible:ring-[#3a7d3a]"
//               />
//             </div>
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Email
//               </Label>
//               <Input
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 placeholder="e.g. name@nazif-eco.com"
//                 className="rounded-xl focus-visible:ring-[#3a7d3a]"
//               />
//             </div>
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Assigned Area
//               </Label>
//               <Select
//                 value={form.area}
//                 onValueChange={(v) => setForm({ ...form, area: v })}
//               >
//                 <SelectTrigger className="rounded-xl focus:ring-[#3a7d3a]">
//                   <SelectValue placeholder="Select area (optional)" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {AREAS.map((a) => (
//                     <SelectItem key={a} value={a}>
//                       {a}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-1.5">
//               <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Status
//               </Label>
//               <Select
//                 value={form.status}
//                 onValueChange={(v) =>
//                   setForm({ ...form, status: v as AgentStatus })
//                 }
//               >
//                 <SelectTrigger className="rounded-xl focus:ring-[#3a7d3a]">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="Active">Active</SelectItem>
//                   <SelectItem value="On Leave">On Leave</SelectItem>
//                   <SelectItem value="Inactive">Inactive</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <DialogFooter className="gap-2">
//             <Button
//               variant="outline"
//               onClick={() => setDialogOpen(false)}
//               className="rounded-xl border-gray-200"
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handleSave}
//               disabled={!form.name || !form.email}
//               className="bg-[#2d6a2d] hover:bg-[#245424] text-white rounded-xl"
//             >
//               {editTarget ? "Save Changes" : "Add Agent"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import AdminSidebar from "@/app/_components/AdminSidebar/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Building2,
  MapPin,
  Truck,
  Plus,
  Search,
  SlidersHorizontal,
  Download,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Company {
  id: number;
  name: string;
  email: string;
  phone: string;
  registrationNum: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const INITIAL_COMPANIES: Company[] = [
  {
    id: 1,
    name: "Nazif Eco Solutions",
    email: "contact@nazif-eco.com",
    phone: "+1 555-0101",
    registrationNum: "REG-001-2024",
  },
  {
    id: 2,
    name: "GreenWave Corp",
    email: "info@greenwave.com",
    phone: "+1 555-0102",
    registrationNum: "REG-002-2024",
  },
  {
    id: 3,
    name: "EcoTech Industries",
    email: "hello@ecotech.com",
    phone: "+1 555-0103",
    registrationNum: "REG-003-2024",
  },
  {
    id: 4,
    name: "CleanCity Ltd",
    email: "ops@cleancity.com",
    phone: "+1 555-0104",
    registrationNum: "REG-004-2024",
  },
];

const PAGE_SIZE = 4;

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  icon,
  label,
  value,
  sub,
  subIcon,
  subColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  subIcon?: React.ReactNode;
  subColor?: string;
}) {
  return (
    <div className="flex-1 bg-white rounded-2xl px-6 py-5 flex items-center gap-5 shadow-sm border border-gray-100">
      <div className="w-14 h-14 rounded-xl bg-[#f0f5ee] flex items-center justify-center text-[#2d6a2d] shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
          {label}
        </p>
        <p className="text-3xl font-bold text-gray-800 leading-none">{value}</p>
        <p
          className={`text-xs mt-1 flex items-center gap-1 font-medium ${
            subColor ?? "text-gray-400"
          }`}
        >
          {subIcon}
          {sub}
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CompaniesManagementPage() {
  const [companies, setCompanies] = useState<Company[]>(INITIAL_COMPANIES);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    registrationNum: "",
  });

  // ── helpers
  const filtered = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.registrationNum.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function openAdd() {
    setEditTarget(null);
    setForm({ name: "", email: "", phone: "", registrationNum: "" });
    setError(null);
    setDialogOpen(true);
  }

  function openEdit(company: Company) {
    setEditTarget(company);
    setForm({
      name: company.name,
      email: company.email,
      phone: company.phone,
      registrationNum: company.registrationNum,
    });
    setError(null);
    setDialogOpen(true);
  }

  function handleDelete(id: number) {
    setCompanies((prev) => prev.filter((c) => c.id !== id));
  }

  async function handleSave() {
    setError(null);

    if (editTarget) {
      // Local edit only (no PUT endpoint provided)
      setCompanies((prev) =>
        prev.map((c) =>
          c.id === editTarget.id
            ? {
                ...c,
                name: form.name,
                email: form.email,
                phone: form.phone,
                registrationNum: form.registrationNum,
              }
            : c
        )
      );
      setDialogOpen(false);
    } else {
      // POST to API
      setIsLoading(true);
      try {
        const response = await fetch("https://nazif.tryasp.net/api/Admin/companies", {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            registrationNum: form.registrationNum,
          }),
        });

        if (!response.ok) {
          const errText = await response.text().catch(() => null);
          let errMsg: string | null = null;
          if (errText) {
            try {
              const parsed = JSON.parse(errText);
              errMsg = parsed?.message ?? parsed?.title ?? null;
            } catch {
              errMsg = errText;
            }
          }
          throw new Error(errMsg ?? `Request failed with status ${response.status}`);
        }

        // The API returns text/plain; try to parse as JSON for the created record,
        // otherwise fall back to constructing the company from the form data.
        const rawText = await response.text();
        let created: Company;
        try {
          const parsed = JSON.parse(rawText);
          created = {
            id: parsed.id ?? Date.now(),
            name: parsed.name ?? form.name,
            email: parsed.email ?? form.email,
            phone: parsed.phone ?? form.phone,
            registrationNum: parsed.registrationNum ?? form.registrationNum,
          };
        } catch {
          // Plain-text response — build the object from form data
          created = {
            id: Date.now(),
            name: form.name,
            email: form.email,
            phone: form.phone,
            registrationNum: form.registrationNum,
          };
        }

        setCompanies((prev) => [...prev, created]);
        setDialogOpen(false);
      } catch (err: any) {
        setError(err.message ?? "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="flex h-screen bg-[#f4f6f3] font-sans overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-between shrink-0">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search companies..."
              className="pl-9 h-9 text-sm bg-gray-50 border-gray-200 rounded-xl focus-visible:ring-[#3a7d3a]"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <span className="sr-only">Notifications</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-gray-700">Admin User</p>
                <p className="text-[10px] text-gray-400">System Overseer</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#2d6a2d] text-white text-sm font-bold flex items-center justify-center">
                AU
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-8 py-6">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            <span className="text-[#3a7d3a] font-semibold">Operations</span>
            {" › "}Companies
          </p>

          {/* Page title + CTA */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Companies Management
            </h1>
            <Button
              onClick={openAdd}
              className="bg-[#2d6a2d] hover:bg-[#245424] text-white rounded-xl gap-2 px-5 shadow-md shadow-green-900/20"
            >
              <Plus className="w-4 h-4" />
              Add New Company
            </Button>
          </div>

          {/* Stat cards */}
          <div className="flex gap-4 mb-6">
            <StatCard
              icon={<Building2 className="w-7 h-7" />}
              label="Total Companies"
              value={String(companies.length)}
              sub="+12% this month"
              subIcon={<TrendingUp className="w-3 h-3" />}
              subColor="text-[#2d6a2d]"
            />
            <StatCard
              icon={<MapPin className="w-7 h-7" />}
              label="Active Service Areas"
              value="18"
              sub="Across 5 districts"
            />
            <StatCard
              icon={<Truck className="w-7 h-7" />}
              label="Completed Pickups"
              value="8,942"
              sub="98% success rate"
              subIcon={<TrendingUp className="w-3 h-3" />}
              subColor="text-[#2d6a2d]"
            />
          </div>

          {/* Table card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-800 text-lg">
                Companies Directory
              </h2>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-gray-100">
                  <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold pl-6">
                    Company Name
                  </TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Email
                  </TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Phone
                  </TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Registration No.
                  </TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold pr-6">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginated.map((company) => (
                  <TableRow
                    key={company.id}
                    className="border-gray-50 hover:bg-[#f8faf7] transition-colors"
                  >
                    <TableCell className="pl-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#f0f5ee] text-[#2d6a2d] flex items-center justify-center font-bold text-sm ring-2 ring-[#e0ede0]">
                          {company.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-semibold text-sm text-gray-800">
                          {company.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {company.email}
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {company.phone}
                    </TableCell>
                    <TableCell>
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        {company.registrationNum}
                      </span>
                    </TableCell>
                    <TableCell className="pr-6">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openEdit(company)}
                          className="p-2 text-gray-400 hover:text-[#2d6a2d] hover:bg-[#f0f5ee] rounded-lg transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(company.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–
                {Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
                {filtered.length} companies
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${
                      n === page
                        ? "bg-[#2d6a2d] text-white shadow-sm"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-gray-800">
              {editTarget ? "Edit Company" : "Add New Company"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* API error */}
            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Company Name
              </Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Nazif Eco Solutions"
                className="rounded-xl focus-visible:ring-[#3a7d3a]"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </Label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="e.g. contact@company.com"
                className="rounded-xl focus-visible:ring-[#3a7d3a]"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Phone
              </Label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="e.g. +1 555-0100"
                className="rounded-xl focus-visible:ring-[#3a7d3a]"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Registration Number
              </Label>
              <Input
                value={form.registrationNum}
                onChange={(e) => setForm({ ...form, registrationNum: e.target.value })}
                placeholder="e.g. REG-001-2024"
                className="rounded-xl focus-visible:ring-[#3a7d3a]"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={isLoading}
              className="rounded-xl border-gray-200"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!form.name || !form.email || !form.phone || !form.registrationNum || isLoading}
              className="bg-[#2d6a2d] hover:bg-[#245424] text-white rounded-xl min-w-[110px]"
            >
              {isLoading ? "Saving…" : editTarget ? "Save Changes" : "Add Company"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}