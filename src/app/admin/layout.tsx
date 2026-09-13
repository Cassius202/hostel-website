import Loader from "@/components/loader/TenantLoader";
import SideBar from "./(components)/SideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id=''className="">
      <Loader>
        <div className="flex h-screen bg-[--background] text-[--foreground]">
          <SideBar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </Loader>
    </div>
  );
};

export default AdminLayout