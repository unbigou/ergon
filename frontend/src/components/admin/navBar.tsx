"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronRight, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {  useState } from "react";
import { Button } from "../ui/button";
import useAuth from "@/context/useAuth";
const Navbar = () => {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar width="15rem" collapsed={collapsed}>
      <span
        onClick={() => setCollapsed(!collapsed)}
        className={`flex absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-500  rounded-full cursor-pointer transition duration-500 ease-in-out
      ${!collapsed ? "transform rotate-180" : "transform rotate-0"}
      `}
      >
        <ChevronRight size={20} color="#9ca3af" />
      </span>
      <Menu className="mt-24">
        <MenuItem
          component={<Link href={`/dashboard`} />}
          icon={<LayoutDashboard size={20} />}
          className={`${pathname === "/dashboard" ? "bg-gray-200" : ""}`}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          component={<Link href={`/admin`} />}
          icon={<Settings size={20} />}
          className={`${pathname === "/admin" ? "bg-gray-200" : ""}`}
        >
          Configurações
        </MenuItem>
      </Menu>
      <Button
        className="absolute bottom-5 w-full"
        variant="ghost"
        onClick={() => {
          logout();
          router.push("/");
        }}
      >
        Sair
      </Button>
    </Sidebar>
  );
};

export default Navbar;
