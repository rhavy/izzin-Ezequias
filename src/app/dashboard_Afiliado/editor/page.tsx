"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Save, Eye, Type, Image as ImageIcon } from "lucide-react";

export default function AffiliateEditor() {
    return (
        <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
            <header className="h-14 border-b bg-white px-4 flex items-center justify-between">
                <h2 className="text-sm font-bold">Editor de Site (Afiliado)</h2>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="rounded-xl">
                        <Eye size={16} className="mr-2" /> Prévia
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl size-sm px-6">
                        <Save size={16} className="mr-2" /> Salvar Site
                    </Button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside className="w-64 border-r bg-white p-6 space-y-6">
                    <p className="text-[10px] font-bold uppercase text-slate-400">Componentes Disponíveis</p>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="p-3 border rounded-xl flex items-center gap-2 text-sm text-slate-600 cursor-move bg-slate-50">
                            <Type size={16} /> Bloco de Texto
                        </div>
                        <div className="p-3 border rounded-xl flex items-center gap-2 text-sm text-slate-600 cursor-move bg-slate-50">
                            <ImageIcon size={16} /> Imagem / Vídeo
                        </div>
                    </div>
                </aside>
                <main className="flex-1 bg-slate-50 p-12 overflow-y-auto">
                    <div className="max-w-[700px] mx-auto bg-white min-h-[800px] shadow-sm border rounded-lg p-12 text-center">
                        <h1 className="text-3xl font-black mb-4">Minha Página de Recrutamento</h1>
                        <p className="text-slate-500 mb-8">Esta é a página que seus prospectos verão.</p>
                        <div className="h-40 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400">
                            Arraste elementos para cá
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
