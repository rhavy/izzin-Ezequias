"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ChevronLeft, Rocket, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulação de criação de conta e redirecionamento para o onboarding
        setTimeout(() => {
            router.push("/"); // Redireciona para o Dashboard principal
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Lado Esquerdo: Benefícios (Destaque) */}
            <div className="hidden lg:flex bg-blue-600 relative items-center justify-center p-12 overflow-hidden">
                {/* Pattern de fundo */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:32px_32px]" />

                <div className="relative z-10 max-w-md text-white">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="bg-white text-blue-600 p-1 rounded-lg font-black text-xl px-2">I</div>
                        <span className="text-2xl font-black tracking-tighter">IZZIN</span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight mb-8">
                        Comece a recrutar com <span className="text-blue-200">poder profissional.</span>
                    </h2>

                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <div className="bg-blue-500/50 p-1 rounded-full"><CheckCircle2 size={20} /></div>
                            <div>
                                <p className="font-bold text-lg">Plataforma White Label</p>
                                <p className="text-blue-100 text-sm opacity-80">Sua marca, logo e cores em minutos.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-blue-500/50 p-1 rounded-full"><CheckCircle2 size={20} /></div>
                            <div>
                                <p className="font-bold text-lg">Automação Ilimitada</p>
                                <p className="text-blue-100 text-sm opacity-80">Funis de e-mail que não param de trabalhar.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-blue-500/50 p-1 rounded-full"><CheckCircle2 size={20} /></div>
                            <div>
                                <p className="font-bold text-lg">Gestão de Equipes</p>
                                <p className="text-blue-100 text-sm opacity-80">Controle total sobre o crescimento da sua rede.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-16 p-6 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <p className="text-sm font-medium italic">
                            "A Izzin transformou minha rede. Saímos de 10 leads por semana para mais de 200 automatizados."
                        </p>
                        <p className="mt-4 font-bold text-xs uppercase tracking-widest text-blue-200">— Líder Diamante Elite</p>
                    </div>
                </div>
            </div>

            {/* Lado Direito: Formulário */}
            <div className="flex flex-col justify-center px-8 md:px-20 lg:px-32 relative bg-white">
                <Link
                    href="/login"
                    className="absolute top-10 right-8 md:right-20 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                    Já tem conta? <span className="text-blue-600 font-bold">Entrar</span>
                </Link>

                <div className="max-w-[420px] w-full mx-auto py-12">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black tracking-tight text-slate-900">Criar sua conta</h1>
                        <p className="text-slate-500 mt-2">Escolha o seu acesso e comece hoje.</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleRegister}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstname">Nome</Label>
                                <Input id="firstname" placeholder="Ex: João" className="h-11 rounded-xl" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastname">Sobrenome</Label>
                                <Input id="lastname" placeholder="Ex: Silva" className="h-11 rounded-xl" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail Profissional</Label>
                            <Input id="email" type="email" placeholder="nome@empresa.com" className="h-11 rounded-xl" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Nome da sua Rede/Empresa</Label>
                            <Input id="company" placeholder="Ex: Global Elite MMN" className="h-11 rounded-xl" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Crie uma Senha</Label>
                            <Input id="password" type="password" placeholder="••••••••" className="h-11 rounded-xl" required />
                        </div>

                        <div className="flex items-start gap-3 py-2">
                            <input type="checkbox" className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-600" required />
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Eu aceito os <Link href="#" className="text-blue-600 hover:underline font-medium">Termos de Uso</Link> e a <Link href="#" className="text-blue-600 hover:underline font-medium">Política de Privacidade</Link> da Izzin.
                            </p>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-slate-900 hover:bg-black text-white font-bold text-md rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            {isLoading ? "Criando plataforma..." : (
                                <>
                                    Criar minha conta Izzin <Rocket size={18} />
                                </>
                            )}
                        </Button>
                    </form>

                    <p className="mt-8 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1 uppercase tracking-tighter">
                        <ShieldCheck size={14} /> Ambiente Seguro e Criptografado
                    </p>
                </div>
            </div>
        </div>
    );
}