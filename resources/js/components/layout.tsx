import { AppSidebar } from "./app-sidebar"
import { SidebarInset, SidebarProvider } from "./ui/sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <AppSidebar />
        <SidebarInset>
          <main style={{ flex: 1, padding: "1rem", overflowY: "auto" }}>
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default Layout
