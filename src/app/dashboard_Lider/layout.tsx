import { Sidebar } from "@/components/shared/sidebar";
import { Search, Bell, UserCircle } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50/50">
            {/* Sidebar Fixa */}
            <Sidebar />

            {/* Área de Conteúdo Principal */}
            <div className="flex-1 flex flex-col">
                {/* Topbar Superior */}
                <header className="h-16 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-40">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar leads ou domínios..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-600/20 outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-slate-900 relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 mx-2" />
                        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-slate-900 leading-none">Ezequias</p>
                                <p className="text-[10px] text-slate-500 font-medium">Administrador</p>
                            </div>
                            <UserCircle size={32} className="text-slate-300" />
                        </div>
                    </div>
                </header>

                {/* Renderiza a Página Atual */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}