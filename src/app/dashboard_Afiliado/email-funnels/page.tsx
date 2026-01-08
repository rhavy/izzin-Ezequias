import { Button } from "@/components/ui/button";
import { Mail, Plus, Clock, Play } from "lucide-react";

export default function AffiliateEmailFunnels() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Meus Funis de E-mail</h1>
                    <p className="text-slate-500 text-sm">Automação personalizada para seus próprios leads.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">
                    <Plus className="mr-2" size={18} /> Novo Funil
                </Button>
            </div>

            <div className="grid gap-4">
                <div className="bg-white border p-6 rounded-2xl flex items-center justify-between hover:border-blue-200 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Sequência de Boas-vindas (Minha Rede)</h3>
                            <p className="text-xs text-slate-400">3 etapas • 42 leads ativos</p>
                        </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600 font-bold">
                        <Play size={16} className="mr-2" /> Gerenciar
                    </Button>
                </div>
            </div>
        </div>
    );
}
