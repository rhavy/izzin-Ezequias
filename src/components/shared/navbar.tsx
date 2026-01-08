import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-5 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white p-1 rounded-lg font-black text-xl px-2">I</div>
                <span className="text-2xl font-black tracking-tighter text-slate-900">IZZIN</span>
            </div>
            <div className="hidden md:flex gap-8 items-center font-medium">
                <Link href="#funcionalidades" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Funcionalidades</Link>
                <Link href="#precos" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Planos</Link>
                <div className="h-4 w-[1px] bg-slate-200" />
                <Button variant="ghost" className="text-slate-600" asChild>
                    <Link href="http://app.localhost:3000/login">Entrar</Link>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200" asChild>
                    <Link href="http://app.localhost:3000/register">Criar conta Izzin</Link>
                </Button>
            </div>
        </nav>
    );
}