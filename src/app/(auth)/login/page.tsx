"use client"; // Necessário para usar hooks e eventos de clique

import Link from "next/link";
import { useRouter } from "next/navigation"; // Hook para redirecionamento
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, ChevronLeft } from "lucide-react";
import { FormEvent, useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // Função que simula o login e redireciona
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simula um atraso de rede de 1 segundo antes de ir para o dashboard
        setTimeout(() => {
            router.push("/dashboard"); // No contexto do seu middleware, "/" dentro de (dashboard) é o painel
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Lado Esquerdo: Formulário */}
            <div className="flex flex-col justify-center px-8 md:px-20 lg:px-32 relative bg-white">
                <Link
                    href="/"
                    className="absolute top-10 left-8 md:left-20 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                    <ChevronLeft size={16} /> Voltar para o site
                </Link>

                <div className="max-w-[400px] w-full mx-auto">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-blue-600 text-white p-1 rounded-lg font-black text-xl px-2">I</div>
                        <span className="text-2xl font-black tracking-tighter text-slate-900">IZZIN</span>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight">Bem-vindo de volta</h1>
                        <p className="text-slate-500 mt-2">
                            Insira suas credenciais para gerenciar sua rede.
                        </p>
                    </div>

                    {/* Adicionado onSubmit para capturar o clique no botão */}
                    <form className="space-y-5" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="nome@exemplo.com"
                                className="h-12 border-slate-200 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Senha</Label>
                                <Link href="#" className="text-xs text-blue-600 hover:underline">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="h-12 border-slate-200 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-md rounded-xl shadow-lg shadow-blue-100 transition-all"
                        >
                            {isLoading ? "Acessando..." : "Entrar na Plataforma"}
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm">
                        <span className="text-slate-500">Ainda não tem uma conta? </span>
                        <Link href="/register" className="text-blue-600 font-bold hover:underline">
                            Criar conta agora
                        </Link>
                    </div>
                </div>
            </div>

            {/* Lado Direito: Banner Informativo */}
            <div className="hidden lg:flex bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:24px_24px] opacity-50" />

                <div className="relative z-10 max-w-lg">
                    <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-3xl backdrop-blur-sm">
                        <Zap className="text-blue-500 mb-4" size={32} fill="currentColor" />
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Acelere seu recrutamento com inteligência.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            "Desde que migramos para a Izzin, a taxa de conversão da nossa equipe subiu 40% graças aos funis automatizados."
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600" />
                            <div>
                                <p className="text-white font-bold text-sm">Ricardo Silva</p>
                                <p className="text-slate-500 text-xs">Diamante Elite - Grupo XYZ</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-[-100px] left-[-50px] w-64 h-64 bg-blue-600/20 blur-[100px] -z-10" />
                </div>
            </div>
        </div>
    );
}