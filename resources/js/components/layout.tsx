import { AppSidebar } from "./app-sidebar"
import { SidebarInset, SidebarProvider } from "./ui/sidebar"
import { ChartBarInteractive } from "@/components/chart-bar-interactive"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <AppSidebar />
        
        <SidebarInset>
            <main>
                <ChartBarInteractive/>
            </main>
        </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
