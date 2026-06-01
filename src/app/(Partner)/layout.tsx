import PartnerSidebar from "../_components/partner/PartnerSidebar";

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F5F5F0]">
      
      <PartnerSidebar/>

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}