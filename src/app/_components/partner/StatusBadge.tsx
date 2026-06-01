// components/partner/StatusBadge.tsx

type Status = "Active" | "Expiring Soon" | "Inactive" | "Paused" | string;

const variants: Record<string, string> = {
  Active: "bg-[#E8F5E9] text-[#2E7D32]",
  "Expiring Soon": "bg-[#FFF8E1] text-[#F59E0B]",
  Inactive: "bg-gray-100 text-gray-500",
  Paused: "bg-gray-100 text-gray-500",
};

export default function StatusBadge({ status }: { status: Status }) {
  const cls = variants[status] ?? "bg-gray-100 text-gray-500";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}`}>
      {status}
    </span>
  );
}