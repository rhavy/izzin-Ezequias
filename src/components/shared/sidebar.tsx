"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Globe,
    Mail,
    Settings,
    LogOut,
    Zap,
    TrendingUp,
    UserCircle2,
    Share2,
    BadgeCheck,
    ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

const subMenuItems = [
    { name: "Equipe Interna", icon: UserCircle2, href: "/dashboard_Lider/team" },
    { name: "White Label", icon: Settings, href: "/dashboard_Lider/configuracoes" },
];

const leaderMenu = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard_Lider" },
    { name: "Meus Leads (CRM)", icon: Users, href: "/dashboard_Lider/crm" },
    { name: "Gestão de Equipe", icon: TrendingUp, href: "/dashboard_Lider/equipes" },
    { name: "Construtor de Sites", icon: Globe, href: "/dashboard_Lider/editor" },
    { name: "Funis de E-mail", icon: Mail, href: "/dashboard_Lider/email-funnels" },
    { name: "Afiliados", icon: Share2, href: "/dashboard_Lider/afiliados" },
];

const affiliateMenu = [
    { name: "Meu Painel", icon: LayoutDashboard, href: "/dashboard_Afiliado" },
    { name: "Meu Site", icon: Globe, href: "/dashboard_Afiliado/editor" },
    { name: "Automações", icon: Mail, href: "/dashboard_Afiliado/email-funnels" },
    { name: "Minha Marca", icon: Settings, href: "/dashboard_Afiliado/White_Label" },
];

const adminMenu = [
    { name: "Painel Master", icon: BadgeCheck, href: "/dashboard_Admin" },
    { name: "Assinantes", icon: Users, href: "/assinantes" },
    { name: "Segurança", icon: ShieldAlert, href: "/seguranca" },
];

export function Sidebar({ role = "lider" }: { role?: "lider" | "afiliado" | "admin" }) {
    const pathname = usePathname();
    const menuItems = role === "admin" ? adminMenu : role === "afiliado" ? affiliateMenu : leaderMenu;

    return (
        <aside className="w-64 border-r bg-white h-screen flex flex-col sticky top-0">
            {/* Logo Area */}
            <div className="p-6 flex items-center gap-2">
                <div className="bg-blue-600 text-white p-1 rounded font-black text-sm px-1.5 shadow-sm shadow-blue-200">I</div>
                <span className="font-black tracking-tighter text-xl text-slate-900">IZZIN</span>
                {role === "admin" && <span className="text-[8px] bg-red-600 text-white px-1 rounded uppercase font-bold">Admin</span>}
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto scrollbar-hide">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
                    {role === "admin" ? "Master Management" : "Menu Principal"}
                </p>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all group",
                                isActive
                                    ? "bg-blue-50 text-blue-600 shadow-sm shadow-blue-50/50"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <item.icon size={18} className={cn(isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")} />
                            {item.name}
                        </Link>
                    );
                })}

                {role === "lider" && (
                    <div className="pt-6 pb-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Administração</p>
                        {subMenuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all",
                                        isActive
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <item.icon size={18} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </nav>

            {/* Footer Sidebar (User & Upgrade) */}
            <div className="p-4 border-t space-y-4">
                {role !== "admin" && (
                    <div className="bg-slate-900 rounded-2xl p-4 text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap size={14} className="text-blue-400" fill="currentColor" />
                                <span className="text-xs font-bold uppercase tracking-widest">Plano Pro</span>
                            </div>
                            <p className="text-[10px] text-slate-400 mb-3 leading-tight">Você tem 850 de 1000 leads este mês.</p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-[11px] font-bold transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                                Fazer Upgrade
                            </button>
                        </div>
                        <div className="absolute -right-4 -bottom-4 bg-blue-600/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-colors" />
                    </div>
                )}

                <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-red-600 w-full transition-colors group">
                    <LogOut size={18} className="text-slate-400 group-hover:text-red-600" />
                    Sair da Conta
                </button>
            </div>
        </aside>
    );
}
