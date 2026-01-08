import { Button } from "@/components/ui/button";
import { Plus, Filter, Search, MoreHorizontal, MessageCircle, Phone } from "lucide-react";

export default function CRMPage() {
    const columns = [
        {
            id: "novo",
            title: "Novos Leads",
            color: "bg-blue-500",
            leads: [
                { id: 1, name: "Lucas Ferreira", origin: "Página de Captura A", time: "2h atrás" },
                { id: 2, name: "Patrícia Lima", origin: "Instagram Ad", time: "5h atrás" },
            ],
        },
        {
            id: "contato",
            title: "Em Contato",
            color: "bg-orange-500",
            leads: [
                { id: 3, name: "Roberto Junior", origin: "Indicação Direta", time: "1d atrás" },
            ],
        },
        {
            id: "apresentacao",
            title: "Apresentação",
            color: "bg-purple-500",
            leads: [
                { id: 4, name: "Fernanda Souza", origin: "Webinar MMN", time: "3d atrás" },
            ],
        },
        {
            id: "fechado",
            title: "Fechado / Ativo",
            color: "bg-emerald-500",
            leads: [
                { id: 5, name: "Ricardo Santos", origin: "Página de Vendas", time: "5d atrás" },
            ],
        },
    ];

    return (
        <div className="p-8 h-[calc(100vh-64px)] flex flex-col space-y-6">
            {/* Header do CRM */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Funil de Recrutamento</h1>
                    <p className="text-slate-500 text-sm">Gerencie seus prospectos e aumente sua conversão.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Filtrar leads..."
                            className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/10 w-64"
                        />
                    </div>
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        <Filter className="mr-2" size={16} /> Filtros
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                        <Plus className="mr-2" size={16} /> Novo Lead
                    </Button>
                </div>
            </div>

            {/* Grid do Kanban */}
            <div className="flex-1 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {columns.map((column) => (
                    <div key={column.id} className="min-w-[300px] w-[300px] flex flex-col gap-4">
                        {/* Cabeçalho da Coluna */}
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${column.color}`} />
                                <h3 className="font-bold text-slate-700">{column.title}</h3>
                                <span className="bg-slate-200 text-slate-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                    {column.leads.length}
                                </span>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600">
                                <MoreHorizontal size={18} />
                            </button>
                        </div>

                        {/* Lista de Cards */}
                        <div className="flex-1 flex flex-col gap-3">
                            {column.leads.map((lead) => (
                                <div
                                    key={lead.id}
                                    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-grab active:cursor-grabbing group"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                                            {lead.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <button className="text-slate-300 group-hover:text-slate-500 transition-colors">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </div>

                                    <h4 className="font-bold text-slate-900 text-sm mb-1">{lead.name}</h4>
                                    <p className="text-[11px] text-slate-400 mb-4">{lead.origin} • {lead.time}</p>

                                    <div className="flex items-center justify-between border-t pt-3 mt-1">
                                        <div className="flex gap-2">
                                            <button className="p-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
                                                <MessageCircle size={14} />
                                            </button>
                                            <button className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                                <Phone size={14} />
                                            </button>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400">ID: #{lead.id}923</span>
                                    </div>
                                </div>
                            ))}

                            {/* Botão de Adicionar Rápido */}
                            <button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition-all">
                                + Adicionar nesta etapa
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}