
import { useState } from "react"
import { 
  Hospital, 
  Users, 
  Calendar, 
  UserCheck, 
  Building2, 
  FileText, 
  Settings,
  Home,
  Stethoscope
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Staff", url: "/staff", icon: UserCheck },
  { title: "Appointments", url: "/appointments", icon: Calendar },
  { title: "Departments", url: "/departments", icon: Building2 },
  { title: "Medical Records", url: "/records", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { collapsed } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const isExpanded = menuItems.some((item) => isActive(item.url))
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-blue-100 text-blue-700 font-medium border-r-2 border-blue-500" : "hover:bg-blue-50 text-gray-700"

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} bg-white border-r border-gray-200 transition-all duration-300`}
      collapsible
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Hospital className="h-6 w-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-gray-900">MediCare</h1>
              <p className="text-sm text-gray-500">Hospital System</p>
            </div>
          )}
        </div>
      </div>

      <SidebarTrigger className="absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1 shadow-md" />

      <SidebarContent className="p-4">
        <SidebarGroup open={isExpanded}>
          <SidebarGroupLabel className="text-gray-600 font-medium mb-2">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => `
                        flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200
                        ${getNavCls({ isActive })}
                      `}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
