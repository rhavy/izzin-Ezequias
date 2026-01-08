import { Sidebar } from "@/components/shared/sidebar";
import { Search, Bell, UserCircle } from "lucide-react";

export default function AffiliateDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50/50">
            <Sidebar role="afiliado" />
            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-40">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar no meu site..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell size={20} className="text-slate-400" />
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-900 leading-none">Meus Leads</p>
                                <p className="text-[10px] text-emerald-600 font-bold uppercase">Plano Ativo</p>
                            </div>
                            <UserCircle size={32} className="text-slate-300" />
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
