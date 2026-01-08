import { Sidebar } from "@/components/shared/sidebar";
import { ShieldAlert, Activity } from "lucide-react";

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-900">
            <Sidebar role="admin" />
            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b border-white/5 bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-40">
                    <div className="flex items-center gap-4 text-white">
                        <Activity size={20} className="text-blue-500" />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">Status do Sistema: <span className="text-emerald-500">Operacional</span></span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 px-4 py-1.5 bg-red-600/10 text-red-500 rounded-lg text-xs font-bold border border-red-600/20 hover:bg-red-600/20 transition-all">
                            <ShieldAlert size={14} /> Modo de Emergência
                        </button>
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">M</div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto bg-slate-50 rounded-tl-[40px] shadow-[inset_10px_10px_20px_rgba(0,0,0,0.1)]">
                    {children}
                </main>
            </div>
        </div>
    );
}
