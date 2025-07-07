import { AppSidebar } from "./app-sidebar"
import { SidebarInset, SidebarProvider } from "./ui/sidebar"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
           <main>
            {children}
           </main>
        </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
