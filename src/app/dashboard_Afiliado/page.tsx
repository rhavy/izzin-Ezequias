"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Globe,
    CreditCard,
    Settings,
    Lock,
    CheckCircle2,
    ExternalLink,
    Copy,
    Zap
} from "lucide-react";

export default function AffiliatedDashboard() {
    // Simulação de dados do plano do afiliado (No futuro, virá do Banco de Dados via Prisma)
    const [userPlan, setUserPlan] = useState({
        name: "Plano Starter",
        canEditSite: true,
        canUseCustomDomain: false, // Bloqueado no Starter
        canUseWhiteLabel: false,   // Bloqueado no Starter
        subdomain: "joaosilva.izzin.com.br",
        customDomain: null
    });

    return (
        <div className="p-8 space-y-8 max-w-6xl mx-auto">
            {/* Header de Status do Plano */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-200">
                        <Zap size={24} fill="currentColor" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900">{userPlan.name}</h2>
                        <p className="text-sm text-slate-500">Sua assinatura vence em 15 dias.</p>
                    </div>
                </div>
                <Button variant="outline" className="rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50">
                    Mudar de Plano
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Coluna Principal: Domínio e Sites */}
                <div className="md:col-span-2 space-y-6">

                    {/* Gestão de Domínio Dinâmica */}
                    <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                        <CardHeader className="bg-slate-50/50">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Globe size={20} className="text-blue-600" /> Endereço do seu Site
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            {/* Opção 1: Subdomínio (Sempre liberado) */}
                            <div className="p-4 rounded-2xl border border-blue-100 bg-blue-50/30">
                                <Label className="text-blue-700 font-bold mb-2 block">Seu Subdomínio Gratuito</Label>
                                <div className="flex gap-2">
                                    <Input readOnly value={userPlan.subdomain} className="bg-white border-blue-200" />
                                    <Button size="icon" variant="ghost" className="text-blue-600"><Copy size={18} /></Button>
                                </div>
                            </div>

                            {/* Opção 2: Domínio Próprio (Condicional) */}
                            <div className={cn("p-4 rounded-2xl border relative",
                                userPlan.canUseCustomDomain ? "border-slate-200" : "border-slate-100 bg-slate-50 opacity-70"
                            )}>
                                {!userPlan.canUseCustomDomain && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-50/40 backdrop-blur-[1px] rounded-2xl">
                                        <Button variant="secondary" className="gap-2 shadow-sm">
                                            <Lock size={14} /> Liberar Domínio Próprio (Plano Pro)
                                        </Button>
                                    </div>
                                )}
                                <Label className="font-bold mb-2 block text-slate-700">Domínio Próprio (ex: www.seusite.com)</Label>
                                <div className="flex gap-2">
                                    <Input placeholder="Configurar domínio..." disabled={!userPlan.canUseCustomDomain} />
                                    <Button disabled={!userPlan.canUseCustomDomain} className="bg-slate-900">Conectar</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Atalho Construtor de Sites */}
                    <div className="group relative bg-slate-900 rounded-3xl p-8 text-white overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Editor de Páginas</h3>
                            <p className="text-slate-400 mb-6 max-w-xs text-sm">Personalize sua página de captura e atraia mais leads para sua rede.</p>
                            <Button className="bg-blue-600 hover:bg-blue-700 font-bold px-8 rounded-xl h-12">
                                Abrir Construtor <ExternalLink className="ml-2" size={16} />
                            </Button>
                        </div>
                        <Globe className="absolute right-[-20px] bottom-[-20px] text-white/5 w-48 h-48 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>

                {/* Lateral: White Label e Faturas */}
                <div className="space-y-6">
                    {/* White Label Box (Bloqueado/Liberado) */}
                    <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden border-t-4 border-t-blue-600">
                        <CardContent className="p-6">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Settings size={18} className="text-blue-600" /> Marca Própria
                            </h4>
                            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                                Remova a marca da Izzin e coloque seu próprio logotipo no painel e nos sites.
                            </p>
                            <Button
                                variant={userPlan.canUseWhiteLabel ? "outline" : "secondary"}
                                className="w-full rounded-xl font-bold gap-2"
                            >
                                {userPlan.canUseWhiteLabel ? "Configurar Marca" : "Upgrade para White Label"}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Faturas Recentes */}
                    <Card className="rounded-3xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Últimas Faturas</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-50">
                                {[
                                    { date: "05 Jan", status: "Pago", price: "R$ 199" },
                                    { date: "05 Dez", status: "Pago", price: "R$ 199" },
                                ].map((fatura, i) => (
                                    <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{fatura.date}</p>
                                            <p className="text-[10px] text-emerald-600 font-bold uppercase">{fatura.status}</p>
                                        </div>
                                        <span className="text-sm font-medium text-slate-600">{fatura.price}</span>
                                        <button className="p-1 hover:text-blue-600 transition-colors text-slate-300">
                                            <CreditCard size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// Helper para classes dinâmicas (utilitário que você já tem no projeto)
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

function Label({ children, className }: any) {
    return <label className={cn("text-xs font-semibold text-slate-500", className)}>{children}</label>;
}

function Input(props: any) {
    return <input {...props} className={cn("w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/10", props.className)} />;
}


