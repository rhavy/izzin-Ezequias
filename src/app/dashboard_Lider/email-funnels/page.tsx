import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Play, Pause, Plus, Clock, Settings, ArrowRight } from "lucide-react";

export default function EmailFunnelsPage() {
    const funnels = [
        { name: "Boas-vindas MMN", leads: 1240, active: true, steps: 5 },
        { name: "Recuperação de Cadastro", leads: 450, active: true, steps: 3 },
        { name: "Upgrade para Diamante", leads: 89, active: false, steps: 7 },
    ];

    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Funis de E-mail</h1>
                    <p className="text-slate-500 text-sm">Automatize suas vendas com sequências inteligentes.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">
                    <Plus className="mr-2" size={18} /> Criar Novo Funil
                </Button>
            </div>

            <div className="grid gap-4">
                {funnels.map((funnel, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center justify-between hover:shadow-md transition-all group">
                        <div className="flex items-center gap-6">
                            <div className={`p-4 rounded-2xl ${funnel.active ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                    {funnel.name}
                                    {funnel.active ? (
                                        <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">Ativo</span>
                                    ) : (
                                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Pausado</span>
                                    )}
                                </h3>
                                <div className="flex items-center gap-4 mt-1 text-xs text-slate-400">
                                    <span className="flex items-center gap-1"><Clock size={12} /> {funnel.steps} etapas</span>
                                    <span className="flex items-center gap-1 font-bold text-slate-500">{funnel.leads} leads no funil</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-600">
                                <Settings size={18} />
                            </Button>
                            <Button variant="outline" size="sm" className="rounded-xl px-4 border-slate-200">
                                {funnel.active ? <Pause size={16} className="mr-2" /> : <Play size={16} className="mr-2" />}
                                {funnel.active ? "Pausar" : "Ativar"}
                            </Button>
                            <Button size="sm" className="bg-slate-900 text-white rounded-xl px-4">
                                Editar Etapas <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}