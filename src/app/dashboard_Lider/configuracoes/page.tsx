"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Palette,
    Globe,
    Upload,
    Save,
    ShieldCheck,
    ExternalLink,
    Info
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhiteLabelSettings() {
    const [primaryColor, setPrimaryColor] = useState("#2563eb");

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Personalização White Label</h1>
                <p className="text-slate-500">Configure a identidade visual e o domínio da sua própria plataforma.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Coluna de Configurações */}
                <div className="md:col-span-2 space-y-6">

                    {/* Branding */}
                    <Card className="rounded-2xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Palette size={20} className="text-blue-600" /> Identidade Visual
                            </CardTitle>
                            <CardDescription>Envie sua logo e escolha a cor principal do sistema.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="w-24 h-24 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:bg-slate-50 cursor-pointer transition-colors">
                                    <Upload size={20} />
                                    <span className="text-[10px] font-bold uppercase">Logo</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <Label>Nome da Plataforma</Label>
                                    <Input placeholder="Ex: LiderPro Recrutamento" className="rounded-xl h-11" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Cor Primária (Dashboard e Botões)</Label>
                                <div className="flex gap-3 items-center">
                                    <input
                                        type="color"
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className="w-12 h-12 rounded-lg cursor-pointer border-none p-0 overflow-hidden"
                                    />
                                    <Input
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className="w-32 font-mono uppercase"
                                    />
                                    <div className="flex gap-2">
                                        {["#2563eb", "#10b981", "#8b5cf6", "#f59e0b"].map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => setPrimaryColor(color)}
                                                className="w-6 h-6 rounded-full border border-slate-200"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Domínio Personalizado */}
                    <Card className="rounded-2xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Globe size={20} className="text-blue-600" /> Domínio Personalizado
                            </CardTitle>
                            <CardDescription>Conecte seu próprio domínio para uma experiência 100% profissional.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Seu Domínio</Label>
                                <div className="flex gap-2">
                                    <Input placeholder="exemplo: recrutamento.seusite.com" className="rounded-xl h-11" />
                                    <Button className="bg-slate-900 rounded-xl px-6 font-bold">Verificar</Button>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl space-y-3 border border-slate-100">
                                <div className="flex items-start gap-3">
                                    <Info size={16} className="text-blue-600 mt-0.5" />
                                    <div className="text-xs text-slate-600 space-y-1">
                                        <p className="font-bold text-slate-800">Instruções de DNS:</p>
                                        <p>Para ativar seu domínio, adicione o seguinte registro na sua zona DNS:</p>
                                        <ul className="list-disc pl-4 mt-2 space-y-1">
                                            <li>Tipo: <strong>CNAME</strong></li>
                                            <li>Nome: <strong>@</strong> (ou o subdomínio escolhido)</li>
                                            <li>Valor: <strong>cname.izzin.com.br</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Preview Card */}
                <div className="space-y-6">
                    <div className="sticky top-24">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Pré-visualização</h3>
                        <div className="bg-white border border-slate-100 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="p-4 border-b flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-md" style={{ backgroundColor: primaryColor }} />
                                    <div className="w-16 h-2 bg-slate-100 rounded" />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-slate-50" />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="w-full h-24 bg-slate-50 rounded-2xl flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full opacity-20" style={{ backgroundColor: primaryColor }} />
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-3 bg-slate-100 rounded" />
                                    <div className="w-2/3 h-3 bg-slate-100 rounded" />
                                </div>
                                <Button className="w-full rounded-xl pointer-events-none" style={{ backgroundColor: primaryColor }}>
                                    Botão de Exemplo
                                </Button>
                            </div>
                        </div>
                        <p className="mt-4 text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                            <ShieldCheck size={12} /> Alterações aplicadas globalmente em sua rede.
                        </p>
                        <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 h-12 rounded-2xl font-black shadow-lg shadow-blue-100">
                            <Save className="mr-2" size={18} /> SALVAR ALTERAÇÕES
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}