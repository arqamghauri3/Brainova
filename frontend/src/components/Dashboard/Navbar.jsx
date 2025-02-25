import { DashboardContext } from "@/contexts/DashboardContext";
import { Menu } from "lucide-react";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const { setIsSidebarOpen } = useContext(DashboardContext);

  return (
    <div className="md:hidden border-b w-full h-16 flex items-center px-5 ">
      <Button onClick={() => setIsSidebarOpen(true)}>
        <Menu className="w-6 h-6" />
      </Button>
    </div>
  );
}

export default Navbar;
