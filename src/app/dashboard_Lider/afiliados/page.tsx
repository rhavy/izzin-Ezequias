import { Button } from "@/components/ui/button";
import {
    Wallet,
    Link as LinkIcon,
    Users,
    ArrowUpRight,
    Settings2,
    Copy,
    CheckCircle2,
    PieChart,
    Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AffiliatesPage() {
    const commissions = [
        { name: "Plano Iniciante", price: "R$ 199", commission: "R$ 60,00", type: "Recorrente" },
        { name: "Plano Profissional", price: "R$ 297", commission: "R$ 90,00", type: "Recorrente" },
        { name: "Plano Vitalício", price: "R$ 997", commission: "R$ 400,00", type: "Única" },
    ];

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Programa de Afiliados</h1>
                    <p className="text-slate-500 text-sm">Configure comissões e acompanhe o crescimento da sua rede de revendedores.</p>
                </div>
                <Button className="bg-slate-900 hover:bg-black text-white rounded-xl px-6">
                    <Settings2 className="mr-2" size={18} /> Configurar Regras
                </Button>
            </div>

            {/* Cards de Métricas Financeiras */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-100 relative overflow-hidden">
                    <Wallet className="absolute right-[-10px] bottom-[-10px] w-24 h-24 opacity-10" />
                    <p className="text-blue-100 text-sm font-medium">Comissões Pagas (Mês)</p>
                    <h3 className="text-3xl font-black mt-2">R$ 12.450,00</h3>
                    <div className="mt-4 flex items-center gap-2 text-xs bg-blue-500/30 w-fit px-2 py-1 rounded-lg">
                        <ArrowUpRight size={14} /> +15% que o mês passado
                    </div>
                </div>

                <StatCard title="Afiliados Ativos" value="142" subValue="24 novos esta semana" icon={<Users className="text-slate-600" />} />
                <StatCard title="Vendas por Indicação" value="389" subValue="Ticket médio R$ 245,00" icon={<PieChart className="text-slate-600" />} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Configuração de Comissões */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                            <h3 className="font-bold text-lg">Gestão de Afiliados da Rede</h3>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="text-xs h-8 rounded-lg">Suspender Todos</Button>
                                <Button size="sm" variant="outline" className="text-xs h-8 rounded-lg">Exportar Lista</Button>
                            </div>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {[
                                { name: "Marcos Oliveira", sales: "12", plan: "Pro", status: "Ativo", domain: "marcos.izzin.com" },
                                { name: "Juliana Costa", sales: "04", plan: "Basic", status: "Inativo", domain: "juliatop.izzin.com" },
                            ].map((afiliado, i) => (
                                <div key={i} className="p-6 flex flex-col gap-4 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">{afiliado.name.charAt(0)}</div>
                                            <div>
                                                <p className="font-bold text-slate-900">{afiliado.name}</p>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{afiliado.domain}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${afiliado.status === 'Ativo' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                                {afiliado.status}
                                            </span>
                                            <span className="text-xs font-bold text-slate-500">{afiliado.plan}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        <Button size="sm" variant="outline" className="text-[10px] h-8 bg-white hover:bg-blue-50 hover:text-blue-600 border-slate-100">
                                            <Globe size={12} className="mr-1" /> Editar Site
                                        </Button>
                                        <Button size="sm" variant="outline" className="text-[10px] h-8 bg-white hover:bg-orange-50 hover:text-orange-600 border-slate-100">
                                            <Settings2 size={12} className="mr-1" /> Mudar Plano
                                        </Button>
                                        <Button size="sm" variant="outline" className="text-[10px] h-8 bg-white hover:bg-emerald-50 hover:text-emerald-600 border-slate-100">
                                            <ArrowUpRight size={12} className="mr-1" /> Reativar
                                        </Button>
                                        <Button size="sm" variant="outline" className="text-[10px] h-8 bg-white hover:bg-slate-100 border-slate-100">
                                            <LinkIcon size={12} className="mr-1" /> Domínio
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Link Global de Convite */}
                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                        <div className="flex items-center gap-2 text-emerald-700 mb-4">
                            <CheckCircle2 size={18} />
                            <span className="font-bold text-sm text-emerald-800">Seu Link de Recrutamento de Afiliados está ativo</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Input
                                    readOnly
                                    value="https://izzin.com.br/invite/top-leader-01"
                                    className="bg-white border-emerald-200 text-slate-600 text-sm h-12 pr-12 rounded-xl"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-700">
                                    <Copy size={18} />
                                </button>
                            </div>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 h-12 px-6 rounded-xl">
                                Divulgar
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Sidebar de Ranking */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                        <PieChart size={20} className="text-blue-600" /> Top Afiliados
                    </h3>
                    <div className="space-y-6">
                        {[
                            { name: "João Pedro", sales: "84 vendas", color: "bg-amber-100 text-amber-700" },
                            { name: "Carla Meirelles", sales: "62 vendas", color: "bg-slate-100 text-slate-700" },
                            { name: "Marcos Paulo", sales: "41 vendas", color: "bg-orange-100 text-orange-700" },
                        ].map((afiliado, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${afiliado.color}`}>
                                        {i + 1}º
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{afiliado.name}</p>
                                        <p className="text-[10px] text-slate-400">{afiliado.sales}</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={14} className="text-slate-300" />
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-8 rounded-xl text-slate-600 border-slate-200">
                        Ver Ranking Completo
                    </Button>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, subValue, icon }: { title: string, value: string, subValue: string, icon: React.ReactNode }) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="p-2 bg-slate-50 rounded-lg w-fit mb-4">
                {icon}
            </div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h3 className="text-2xl font-black text-slate-900 mb-1">{value}</h3>
            <p className="text-[11px] font-bold text-slate-400">{subValue}</p>
        </div>
    );
}