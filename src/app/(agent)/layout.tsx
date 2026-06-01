
import AgentSidebar from '../_components/agentsidebar/agentsidebar';

export default function CollectorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* السايد بار الثابت على الشمال */}
      
      
      {/* المساحة اللي على اليمين اللي هيظهر فيها البروفايل أو المهام */}
      <main className="flex-1 ">
        <AgentSidebar/>
        {children}
      </main>
    </div>
  );
}