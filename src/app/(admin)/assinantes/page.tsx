"use client";

import { useState } from "react";
import {
    Search,
    Filter,
    MoreHorizontal,
    UserCheck,
    UserX,
    CreditCard,
    ArrowRight,
    ExternalLink,
    Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SubscribersAdminPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const subscribers = [
        {
            id: "1",
            name: "Ricardo Silva",
            company: "Elite Diamonds",
            plan: "White Label Pro",
            status: "Ativo",
            email: "ricardo@elite.com",
            value: "R$ 997,00",
            nextBilling: "15/01/2026"
        },
        {
            id: "2",
            name: "Ana Beatriz",
            company: "NutriLife",
            plan: "Empresa Master",
            status: "Inadimplente",
            email: "ana@nutrilife.com.br",
            value: "R$ 1.200,00",
            nextBilling: "Vencido"
        },
        {
            id: "3",
            name: "Marcos Paulo",
            company: "Equipe Alpha",
            plan: "Líder Starter",
            status: "Ativo",
            email: "marcos@alpha.com",
            value: "R$ 199,00",
            nextBilling: "22/01/2026"
        },
    ];

    return (
        <div className="p-8 space-y-6 bg-slate-50 min-h-screen">
            {/* Cabeçalho */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Gestão de Assinantes</h1>
                    <p className="text-slate-500 text-sm">Controle total sobre líderes, empresas e faturamento.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="rounded-xl border-slate-200 bg-white">
                        Exportar CSV
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl font-bold">
                        Criar Assinatura Manual
                    </Button>
                </div>
            </div>

            {/* Filtros e Busca */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input
                        placeholder="Buscar por nome, e-mail ou empresa..."
                        className="pl-10 h-11 border-none bg-slate-50 rounded-xl"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="ghost" className="rounded-xl gap-2 text-slate-600">
                        <Filter size={18} /> Todos os Planos
                    </Button>
                    <Button variant="ghost" className="rounded-xl gap-2 text-slate-600">
                        <UserCheck size={18} /> Apenas Ativos
                    </Button>
                </div>
            </div>

            {/* Tabela de Assinantes */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead className="font-bold">Assinante / Empresa</TableHead>
                            <TableHead className="font-bold">Plano</TableHead>
                            <TableHead className="font-bold">Status</TableHead>
                            <TableHead className="font-bold">Próximo Vencimento</TableHead>
                            <TableHead className="font-bold text-right">Mensalidade</TableHead>
                            <TableHead className="font-bold text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {subscribers.map((sub) => (
                            <TableRow key={sub.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
                                            {sub.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{sub.name}</p>
                                            <p className="text-xs text-slate-400 font-medium">{sub.company}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="rounded-lg font-medium border-blue-100 text-blue-700">
                                        {sub.plan}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${sub.status === 'Ativo' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                                        <span className={`text-xs font-bold ${sub.status === 'Ativo' ? 'text-emerald-700' : 'text-red-700'}`}>
                                            {sub.status}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-sm font-medium text-slate-600">
                                    {sub.nextBilling}
                                </TableCell>
                                <TableCell className="text-right font-black text-slate-900">
                                    {sub.value}
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center gap-2">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-colors" title="Ver Detalhes">
                                            <ExternalLink size={16} />
                                        </button>
                                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900" title="E-mail de Cobrança">
                                            <Mail size={16} />
                                        </button>
                                        <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-600 transition-colors" title="Suspender Acesso">
                                            <UserX size={16} />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="p-4 border-t border-slate-50 text-center">
                    <Button variant="ghost" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600">
                        Carregar mais assinantes
                    </Button>
                </div>
            </div>
        </div>
    );
}