import Navbar from "../_components/navbar/page";
import Footer from "../_components/footer/page";
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* النافبار فوق */}
      <main className="flex-grow">{children}</main> {/* محتوى الصفحة في النص */}
      <Footer /> {/* الفوتر تحت */}
    </div>
  );
}