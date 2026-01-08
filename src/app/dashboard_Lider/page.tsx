import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Globe, ArrowUpRight, TrendingUp } from "lucide-react";

export default function LeaderDashboardPage() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Bem-vindo, Ezequias!</h1>
                    <p className="text-slate-500">Aqui está o resumo da sua rede hoje.</p>
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-100">
                    <Zap size={16} fill="currentColor" /> Upgrade para Pro
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <SummaryCard title="Leads Totais" value="4.280" icon={<Users className="text-blue-600" />} trend="+12% este mês" />
                <SummaryCard title="Conversão" value="8.4%" icon={<TrendingUp className="text-emerald-600" />} trend="+2% este mês" />
                <SummaryCard title="Sites Ativos" value="124" icon={<Globe className="text-purple-600" />} trend="+5 novos" />
                <SummaryCard title="Afiliados" value="86" icon={<Zap className="text-orange-600" />} trend="+2 novos" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                    <CardHeader className="bg-slate-50/50">
                        <CardTitle className="text-lg font-bold">Atividade Recente da Rede</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-50 text-sm">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200" />
                                        <p className="font-bold text-slate-900">Novo lead capturado por <span className="text-blue-600">Marcos Afiliado</span></p>
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Há {i * 5} min</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-100 shadow-sm bg-slate-900 text-white p-6 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4 italic">Dica de Performance</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Líderes que personalizam o White Label têm 3x mais chance de reter afiliados na primeira semana.
                        </p>
                        <button className="w-full py-3 bg-blue-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all">
                            Configurar White Label
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

function SummaryCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
    return (
        <Card className="rounded-2xl border-slate-100 shadow-sm hover:border-blue-200 transition-all">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-50 rounded-xl">{icon}</div>
                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{trend}</span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
                <h3 className="text-2xl font-black text-slate-900">{value}</h3>
            </CardContent>
        </Card>
    );
}
