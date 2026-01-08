"use client";

import {
    ShieldCheck,
    Lock,
    Key,
    History,
    Database,
    Eye,
    AlertTriangle,
    RefreshCw,
    Server
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch"; // Componente do shadcn para toggles

export default function SecurityAdminPage() {
    const auditLogs = [
        { user: "Ricardo Silva", action: "Alteração de DNS", ip: "189.12.43.10", date: "Há 10 min" },
        { user: "Sistema", action: "Backup Automático Concluído", ip: "Internal", date: "Há 1h" },
        { user: "Ana Beatriz", action: "Falha de Login (3x)", ip: "201.45.122.9", date: "Há 2h" },
        { user: "Ezequias", action: "Acesso ao Painel Master", ip: "45.162.11.5", date: "Há 5h" },
    ];

    return (
        <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Segurança do Sistema</h1>
                    <p className="text-slate-500 text-sm">Monitore acessos, backups e integridade dos dados globais.</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 px-4 py-1.5 rounded-full border-none">
                    <ShieldCheck size={14} className="mr-2" /> Sistema Protegido
                </Badge>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Coluna de Controles */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Configurações Globais de Autenticação */}
                    <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                        <CardHeader className="border-b bg-white">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Lock size={20} className="text-blue-600" /> Políticas de Acesso
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-slate-900">Autenticação de Dois Fatores (2FA)</p>
                                    <p className="text-xs text-slate-500 italic">Obrigar líderes e administradores a usarem 2FA.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between border-t pt-6">
                                <div>
                                    <p className="font-bold text-slate-900">Bloqueio por Brute Force</p>
                                    <p className="text-xs text-slate-500 italic">Bloquear IPs após 5 tentativas de login mal-sucedidas.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between border-t pt-6">
                                <div>
                                    <p className="font-bold text-slate-900">Sessões Simultâneas</p>
                                    <p className="text-xs text-slate-500 italic">Permitir apenas uma sessão ativa por conta de afiliado.</p>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Backup e Dados */}
                    <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                        <CardHeader className="border-b bg-white">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Database size={20} className="text-blue-600" /> Backups do Banco de Dados
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm">
                                        <Server className="text-slate-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Último Backup: <span className="text-blue-600">Hoje, 03:00 AM</span></p>
                                        <p className="text-[10px] text-slate-400 uppercase font-black">Localização: AWS S3 - Virginia</p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm" className="rounded-xl gap-2 h-10 px-4 border-slate-200">
                                    <RefreshCw size={14} /> Forçar Agora
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar de Auditoria (Logs) */}
                <div className="space-y-6">
                    <Card className="rounded-3xl border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <History size={20} className="text-slate-500" /> Logs de Auditoria
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-50">
                                {auditLogs.map((log, i) => (
                                    <div key={i} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-xs font-bold text-slate-900">{log.user}</p>
                                            <span className="text-[10px] text-slate-400">{log.date}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-600 mb-1">{log.action}</p>
                                        <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono">
                                            <Key size={10} /> {log.ip}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-slate-50 text-center">
                                <Button variant="ghost" size="sm" className="text-xs font-bold text-blue-600">
                                    Ver Histórico Completo
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card de Vulnerabilidade */}
                    <div className="bg-red-50 border border-red-100 p-6 rounded-3xl">
                        <div className="flex items-center gap-2 text-red-700 mb-4">
                            <AlertTriangle size={20} />
                            <h4 className="font-bold">Atenção</h4>
                        </div>
                        <p className="text-xs text-red-600 leading-relaxed">
                            Existem <span className="font-bold underline">3 domínios</span> sem certificado SSL ativo. Isso pode afetar a indexação dos sites dos afiliados.
                        </p>
                        <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 h-10 rounded-xl text-xs font-bold">
                            Reparar Certificados
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}