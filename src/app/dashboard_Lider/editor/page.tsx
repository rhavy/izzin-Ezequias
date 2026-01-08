"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Smartphone,
    Monitor,
    ChevronLeft,
    Type,
    Image as ImageIcon,
    Palette,
    Save,
    Eye,
    MousePointer2
} from "lucide-react";

export default function EditorPage() {
    const [activeTab, setActiveTab] = useState("texto");
    const [siteTitle, setSiteTitle] = useState("Venha ser um Diamante na Minha Rede");

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
            {/* Barra de Ferramentas Superior do Editor */}
            <header className="h-14 border-b bg-white px-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-slate-500">
                        <ChevronLeft size={16} className="mr-1" /> Sair
                    </Button>
                    <div className="h-4 w-[1px] bg-slate-200" />
                    <h2 className="text-sm font-bold truncate max-w-[200px]">{siteTitle}</h2>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white shadow-sm">
                        <Monitor size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400">
                        <Smartphone size={16} />
                    </Button>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="rounded-xl">
                        <Eye size={16} className="mr-2" /> Prévia
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl size-sm px-6">
                        <Save size={16} className="mr-2" /> Publicar
                    </Button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Barra Lateral de Edição */}
                <aside className="w-80 border-r bg-white overflow-y-auto p-6 space-y-8">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Elementos</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <EditorTool icon={<Type size={18} />} label="Texto" />
                            <EditorTool icon={<ImageIcon size={18} />} label="Imagem" />
                            <EditorTool icon={<MousePointer2 size={18} />} label="Botão" />
                            <EditorTool icon={<Palette size={18} />} label="Cores" />
                        </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t">
                        <h3 className="text-sm font-bold text-slate-900">Configuração do Cabeçalho</h3>
                        <div className="space-y-2">
                            <Label htmlFor="titulo" className="text-xs">Título Principal</Label>
                            <Input
                                id="titulo"
                                value={siteTitle}
                                onChange={(e) => setSiteTitle(e.target.value)}
                                className="text-sm border-slate-200"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs">Cor do Botão (CTA)</Label>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white ring-2 ring-blue-600 cursor-pointer" />
                                <div className="w-8 h-8 rounded-full bg-emerald-500 cursor-pointer" />
                                <div className="w-8 h-8 rounded-full bg-purple-600 cursor-pointer" />
                                <div className="w-8 h-8 rounded-full bg-slate-900 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                        <p className="text-[11px] text-blue-700 leading-relaxed font-medium">
                            💡 <strong>Dica Izzin:</strong> Use vídeos de curta duração no topo para aumentar sua conversão em até 40%.
                        </p>
                    </div>
                </aside>

                {/* Área de Visualização (Preview) */}
                <main className="flex-1 bg-slate-100 overflow-y-auto p-12">
                    <div className="max-w-[800px] mx-auto bg-white min-h-[1000px] shadow-2xl rounded-sm overflow-hidden border">
                        {/* Simulação do Site */}
                        <div className="h-2 w-full bg-blue-600" />
                        <div className="py-20 px-12 text-center">
                            <h1 className="text-4xl font-black leading-tight mb-6">
                                {siteTitle}
                            </h1>
                            <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">
                                Conquiste sua liberdade financeira com a maior rede de suplementos do Brasil.
                            </p>
                            <Button size="lg" className="bg-blue-600 h-14 px-10 rounded-full text-lg shadow-xl shadow-blue-100">
                                Quero Saber Mais Agora
                            </Button>
                            <div className="mt-16 aspect-video bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400">
                                Espaço para Vídeo de Apresentação
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function EditorTool({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
            <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                {icon}
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{label}</span>
        </button>
    );
}