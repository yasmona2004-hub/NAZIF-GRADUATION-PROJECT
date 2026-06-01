import CompanySidebar from "../_components/company/CompanySideBar";

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F5F0]">
      <CompanySidebar/>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}