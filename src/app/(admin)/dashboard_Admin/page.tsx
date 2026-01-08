import { Button } from "@/components/ui/button";
import { Users, CreditCard, ShieldAlert, BadgeCheck, Search, Filter } from "lucide-react";

export default function MasterAdminDashboard() {
    const subscribers = [
        { id: 1, name: "Empresa XPTO", type: "Líder/Empresa", plan: "Enterprise", status: "Ativo", billing: "R$ 2.490/mês" },
        { id: 2, name: "Consultor Master", type: "Afiliado", plan: "Pro", status: "Ativo", billing: "R$ 297/mês" },
        { id: 3, name: "Global MMN", type: "Líder/Empresa", plan: "Custom", status: "Past Due", billing: "R$ 5.000/mês" },
    ];

    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Painel Master Admin</h1>
                    <p className="text-slate-500 font-medium">Controle global da plataforma Izzin.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200">Exportar Relatórios</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg shadow-red-100">
                        <ShieldAlert size={18} className="mr-2" /> Logs do Sistema
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AdminStatCard title="Faturamento Total" value="R$ 142.500" color="text-emerald-600" />
                <AdminStatCard title="Total de Assinantes" value="1.240" color="text-blue-600" />
                <AdminStatCard title="Sites Ativos" value="8.420" color="text-purple-600" />
                <AdminStatCard title="Ticket Médio" value="R$ 450" color="text-orange-600" />
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                <div className="p-6 bg-slate-50/50 border-b flex justify-between items-center">
                    <h3 className="font-black text-slate-800 uppercase tracking-tighter">Gerenciamento de Assinantes</h3>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none" placeholder="Buscar por ID ou Nome..." />
                        </div>
                        <Button variant="ghost" size="sm"><Filter size={16} /></Button>
                    </div>
                </div>
                <div className="divide-y divide-slate-50">
                    {subscribers.map((sub) => (
                        <div key={sub.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black italic">
                                    {sub.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 flex items-center gap-2">
                                        {sub.name} <BadgeCheck size={14} className="text-blue-500 fill-blue-50" />
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{sub.type} • ID #{sub.id}092</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-12">
                                <div>
                                    <p className="text-sm font-black text-slate-900">{sub.billing}</p>
                                    <p className="text-[10px] text-slate-400 font-bold">{sub.plan}</p>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${sub.status === 'Ativo' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                                    }`}>
                                    {sub.status}
                                </div>
                                <Button size="sm" variant="ghost" className="text-slate-400">Gerenciar</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AdminStatCard({ title, value, color }: { title: string, value: string, color: string }) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
            <h3 className={`text-2xl font-black ${color}`}>{value}</h3>
        </div>
    );
}
