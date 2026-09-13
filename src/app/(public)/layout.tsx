import ChatHolder from "@/components/chat/ChatHolder";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navigation/Header";
import Loader from "@/components/loader/PreLoader";
import SideBar from "@/components/navigation/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-zinc-900 slate:bg-slate-950 bg-white">
      <Header />
      <ChatHolder />
      <SideBar />
      <Loader>
        <div className="w-screen min-h-screen relative">
          <main>{children}</main>
          <Footer />
        </div>
      </Loader>
    </div>
  );
};

export default layout;
