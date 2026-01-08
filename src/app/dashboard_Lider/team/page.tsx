import { Button } from "@/components/ui/button";
import { UserPlus, Shield, Mail, MoreVertical, Trash2 } from "lucide-react";

export default function AdminTeamPage() {
    const staff = [
        { name: "Ezequias (Você)", email: "contato@izzin.com", role: "Proprietário", status: "Proprietário" },
        { name: "João Silva", email: "joao@suporte.com", role: "Suporte", status: "Membro" },
        { name: "Mariana Gestora", email: "mari@trafego.com", role: "Gestor", status: "Membro" },
    ];

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Equipe Interna</h1>
                    <p className="text-slate-500 text-sm">Gerencie quem tem acesso ao painel administrativo da sua marca.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">
                    <UserPlus className="mr-2" size={18} /> Adicionar Colaborador
                </Button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-50">
                    {staff.map((member, i) => (
                        <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 border flex items-center justify-center font-bold text-slate-600">
                                    {member.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{member.name}</p>
                                    <p className="text-xs text-slate-400">{member.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex flex-col items-end">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${member.role === 'Proprietário' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        <span className="flex items-center gap-1">
                                            <Shield size={10} /> {member.role}
                                        </span>
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                                        <Mail size={18} />
                                    </button>
                                    {member.role !== 'Proprietário' && (
                                        <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    )}
                                    <button className="p-2 text-slate-300">
                                        <MoreVertical size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex gap-4 items-start">
                <Shield className="text-blue-600" size={24} />
                <div>
                    <h4 className="font-bold text-blue-900 text-sm">Segurança de Acesso</h4>
                    <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                        Membros com a função de **Gestor** não podem ver dados financeiros de afiliados.
                        Membros com função de **Suporte** apenas visualizam e editam leads.
                    </p>
                </div>
            </div>
        </div>
    );
}