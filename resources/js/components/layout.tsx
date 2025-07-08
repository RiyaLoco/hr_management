import { AppSidebar } from "./app-sidebar"
import { SidebarInset, SidebarProvider } from "./ui/sidebar"
import { ChartBarInteractive } from "@/components/chart-bar-interactive"
import { DataTable } from "@/components/data-table"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <AppSidebar />
        
        <SidebarInset>
            <main>
                <ChartBarInteractive/>
                <DataTable data={[]}/>
                {children}
            </main>
        </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
