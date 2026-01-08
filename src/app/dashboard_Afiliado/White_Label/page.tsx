import { Button } from "@/components/ui/button";
import { Globe, Palette, Save, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AffiliateWhiteLabel() {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Configurações de Marca (Afiliado)</h1>
                <p className="text-slate-500 text-sm">Personalize como seu link de recrutamento aparece para seus prospectos.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="rounded-2xl border-slate-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Palette size={20} className="text-blue-600" /> Branding Pessoal
                        </CardTitle>
                        <CardDescription>Escolha suas cores e subdomínio.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Subdomínio Izzin</Label>
                            <div className="flex gap-2">
                                <Input placeholder="seu-nome" className="rounded-xl h-11" />
                                <span className="flex items-center text-slate-400 font-medium px-2">.izzin.com.br</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Cor de Destaque</Label>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-600 cursor-pointer ring-2 ring-offset-2 ring-blue-600" />
                                <div className="w-8 h-8 rounded-full bg-emerald-500 cursor-pointer" />
                                <div className="w-8 h-8 rounded-full bg-purple-600 cursor-pointer" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl border-slate-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Globe size={20} className="text-blue-600" /> Domínio Próprio
                        </CardTitle>
                        <CardDescription>Conecte um domínio que você já possui.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>URL do Domínio</Label>
                            <Input placeholder="www.seusite.com.br" className="rounded-xl h-11" />
                        </div>
                        <Button className="w-full bg-slate-900 rounded-xl font-bold">Solicitar Conexão</Button>
                    </CardContent>
                </Card>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8 rounded-xl font-black shadow-lg shadow-blue-100">
                <Save className="mr-2" size={18} /> SALVAR CONFIGURAÇÕES
            </Button>
        </div>
    );
}
