import { Button } from "@/components/ui/button";
import {
    Users,
    UserPlus,
    Search,
    Filter,
    MoreVertical,
    Award,
    TrendingUp,
    Mail
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

export default function TeamsPage() {
    const teamMembers = [
        { id: 1, name: "Lucas Silva", level: "Diamante", leads: 142, conversion: "12%", status: "Ativo", lastActivity: "Há 2 min" },
        { id: 2, name: "Mariana Rocha", level: "Ouro", leads: 85, conversion: "9%", status: "Ativo", lastActivity: "Há 1h" },
        { id: 3, name: "Bruno Gomes", level: "Prata", leads: 32, conversion: "5%", status: "Inativo", lastActivity: "Há 3 dias" },
        { id: 4, name: "Carla Souza", level: "Elite", leads: 210, conversion: "15%", status: "Ativo", lastActivity: "Online" },
        { id: 5, name: "Felipe Nunes", level: "Consultor", leads: 12, conversion: "2%", status: "Ativo", lastActivity: "Há 5h" },
    ];

    return (
        <div className="p-8 space-y-8">
            {/* Header com Estatísticas Rápidas */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Gestão de Equipe</h1>
                    <p className="text-slate-500 text-sm">Acompanhe o desempenho dos seus consultores em tempo real.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 font-bold shadow-lg shadow-blue-100">
                    <UserPlus className="mr-2" size={18} /> Convidar Novo Líder
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total da Rede" value="1,284" subValue="+12 novos este mês" icon={<Users className="text-blue-600" />} />
                <StatCard title="Membros Ativos" value="856" subValue="66% da rede total" icon={<Award className="text-emerald-600" />} />
                <StatCard title="Média de Conversão" value="8.4%" subValue="+1.2% desde o último mês" icon={<TrendingUp className="text-purple-600" />} />
            </div>

            {/* Tabela de Membros */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between gap-4">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Buscar consultor pelo nome ou nível..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                    </div>
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        <Filter className="mr-2" size={16} /> Filtrar Nível
                    </Button>
                </div>

                <Table>
                    <TableHeader className="bg-slate-50/50">
                        <TableRow>
                            <TableHead className="font-bold">Consultor</TableHead>
                            <TableHead className="font-bold">Nível</TableHead>
                            <TableHead className="font-bold text-center">Leads Gerados</TableHead>
                            <TableHead className="font-bold text-center">Conversão</TableHead>
                            <TableHead className="font-bold">Status</TableHead>
                            <TableHead className="font-bold text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {teamMembers.map((member) => (
                            <TableRow key={member.id} className="hover:bg-slate-50/50 transition-colors">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{member.name}</p>
                                            <p className="text-[10px] text-slate-400">{member.lastActivity}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-md text-slate-600">
                                        {member.level}
                                    </span>
                                </TableCell>
                                <TableCell className="text-center font-medium">{member.leads}</TableCell>
                                <TableCell className="text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-sm font-bold text-slate-700">{member.conversion}</span>
                                        <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="bg-blue-600 h-full"
                                                style={{ width: member.conversion }}
                                            />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${member.status === 'Ativo' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                                        <span className="text-xs text-slate-600">{member.status}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-colors">
                                            <Mail size={16} />
                                        </button>
                                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

function StatCard({ title, value, subValue, icon }: { title: string, value: string, subValue: string, icon: React.ReactNode }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                    {icon}
                </div>
            </div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h3 className="text-2xl font-black text-slate-900 mb-1">{value}</h3>
            <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-tighter">{subValue}</p>
        </div>
    );
}