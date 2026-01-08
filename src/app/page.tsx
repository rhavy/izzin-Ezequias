import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Zap, Target, Layers, Globe, ArrowRight } from "lucide-react";

export default function IzzinHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6 border border-blue-100">
            <Zap size={14} fill="currentColor" /> NOVO: PLATAFORMA WHITE LABEL 2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
            Recrutar nunca <br /> foi tão <span className="text-blue-600">izzin.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A tecnologia mais poderosa de MMN do mercado, agora com a sua marca. Editor drag-and-drop, CRM inteligente e funis automáticos em um só lugar.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg bg-slate-900 hover:bg-black rounded-full">
              Começar Agora <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-slate-200">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-24 px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Target className="text-blue-600" />}
              title="CRM de Alta Conversão"
              description="Não perca nenhum lead. Organize seus contatos em um funil visual intuitivo e feche mais cadastros."
            />
            <FeatureCard
              icon={<Layers className="text-blue-600" />}
              title="Editor White Label"
              description="Customize 100% da plataforma. Coloque seu logo, suas cores e ofereça como um produto próprio para sua rede."
            />
            <FeatureCard
              icon={<Globe className="text-blue-600" />}
              title="Domínios Ilimitados"
              description="Seus consultores podem usar domínios próprios. Conecte sua marca ao mundo de forma profissional."
            />
          </div>
        </div>
      </section>

      {/* Social Proof / Call to Action */}
      <section className="py-24 px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para escalar sua rede?</h2>
        <p className="text-slate-500 mb-12">Junte-se a líderes que já utilizam a Izzin para gerenciar milhares de leads diariamente.</p>
        <div className="bg-blue-600 rounded-3xl p-12 max-w-4xl mx-auto text-white shadow-2xl shadow-blue-200">
          <div className="text-5xl font-black mb-4">R$ 199</div>
          <p className="text-blue-100 mb-8 uppercase tracking-widest font-bold">Plano Founder - Vitalício para os primeiros 100</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-12 text-xl font-bold rounded-xl">
            Garantir minha vaga na Izzin
          </Button>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="bg-slate-900 text-white p-1 rounded font-black text-sm px-1.5">I</div>
          <span className="font-bold tracking-tighter">IZZIN</span>
        </div>
        <p className="text-sm text-slate-400">© 2026 Izzin Technologies. Simples. Rápido. Escalonável.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group">
      <div className="mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}