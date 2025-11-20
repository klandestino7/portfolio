"use client"

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Code2, Zap, DollarSign, Database, ChevronRight, Monitor, MousePointer2, Play,
  Terminal, Shield, Cpu, Globe, GraduationCap, ChevronDown, Star, CheckCircle2,
  MessageCircle, Users, Lock, Repeat
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

// --- Type Definitions ---

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

interface GlitchTextProps {
  text: string;
}

interface Module {
  title: string;
  duration: string;
  topics: string[];
}

interface CommunityFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface FAQItem {
  q: string;
  a: string;
}

// --- Utility Components ---

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md p-6 ${className}`}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-red-500/10" />
      </div>
      {children}
    </motion.div>
  );
};

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <span className="relative inline-block group font-bold">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-75">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-violet-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-75">
        {text}
      </span>
    </span>
  );
};

const TechMarquee: React.FC = () => {
  const techs = [
    "LUA", "REACT", "NODE.JS", "MYSQL", "GIT", "HTML5", "CSS3", "FRP", "VRP", "QBCORE", "VORP", "ESX", "JAVASCRIPT"
  ];

  return (
    <div className="w-full bg-zinc-950 border-y border-white/5 py-4 overflow-hidden relative flex">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-2 text-zinc-500 font-mono text-sm tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-violet-500/50" />
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TypewriterCode: React.FC = () => {
  const codeLines = [
    "// Sistema de Recompensa VIP",
    "RegisterNetEvent('core:giveReward')",
    "AddEventHandler('core:giveReward', function()",
    "  local player = ESX.GetPlayerFromId(source)",
    "  player.addAccountMoney('bank', 500000)",
    "  TriggerClientEvent('notify', source, 'SUCESSO')",
    "end)"
  ];

  return (
    <div className="font-mono text-xs leading-relaxed">
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3, duration: 0.5 }}
          className={`${line.includes('//') ? 'text-zinc-500 italic' : 'text-violet-300'}`}
        >
          <span className="text-zinc-700 mr-4 select-none">{i + 1}</span>
          {line}
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-2 h-4 bg-violet-400 inline-block ml-1 align-middle"
      />
    </div>
  );
};

// --- Main Sections ---

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className=" relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-zinc-950 text-white md:pt-20">
      <div className="absolute inset-0 bg-hero via-transparent to-zinc-950"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 z-20"></div>

      {/* Glow Effects */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />

      <div className="z-50 text-center px-4 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-violet-300">Nova Turma Disponível</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]"
        >
          Domine o Código.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-white to-red-400">
            Crie o Impossível.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Pare de ser refém de scripts prontos. Aprenda a criar sistemas do zero para <span className="text-violet-400 font-bold">FiveM</span> e <span className="text-red-400 font-bold">RedM</span> com Lógica, React, SQL e Otimização de verdade.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href={"#prices"}>
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Quero Ser Desenvolvedor <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-3 md:bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2 z-50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest">Role para baixo</span>
        <MousePointer2 className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

const DetailedCurriculum: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const modules: Module[] = [
    {
      title: "Módulo 1: Fundamentos e Configuração",
      duration: "7 Aulas",
      topics: [
        "Introdução ao Fivem/Redm",
        "O que são os scripts",
        "Instalação e Configuração Básica",
        "Instalando e Configurando VSCode",
        "Obtendo a Chave de Autenticação",
        "Client e Server na prática",
        "O que é framework"
      ]
    },
    {
      title: "Módulo 2: Programação Lua para FiveM/RedM",
      duration: "5 Aulas",
      topics: [
        "Fundamentos de LUA",
        "Lua Intermediário",
        "Sistema de Eventos",
        "Natives do Jogo",
        "Threads e Performance"
      ]
    },
    {
      title: "Módulo 3: Criando os Primeiros scripts",
      duration: "8 Aulas",
      topics: [
        "Criando nossa framework Pt-1",
        "Criando nossa framework Pt-2",
        "Criação a Seleção de Personagem pt.1",
        "Criação a Seleção de Personagem pt.2",
        "Criação de Personagem pt.1",
        "Criação de Personagem pt.2",
        "Recebendo Character no Spawn pt.1",
        "Recebendo Character no Spawn pt.2",
      ]
    },
    {
      title: "Módulo 4: Básico Interface e Experiência do Usuário",
      duration: "3 Aulas",
      topics: [
        "Introdução ao NUI",
        "HUDs Customizadas",
        "ox_lib Interface Moderna"
      ]
    },
    {
      title: "Módulo 5: Conhecendo as Frameworks do FIVEM",
      duration: "2 Aulas",
      topics: [
        "Conhecendo a VRP (FiveM)",
        "Conhecendo a QBCore (Fivem)",
      ]
    },
    {
      title: "Módulo 6: Conhecendo as Frameworks do REDM",
      duration: "2 Aulas",
      topics: [
        "Conhecendo a VORP (RedM)",
        "Conhecendo a FRP (Redm)",
      ]
    },
    
    {
      title: "Módulo 7: Criando Script para o REDM",
      duration: "2 Aulas",
      topics: [
        "Criando Emprego de Lenhador pt1",
        "Criando Emprego de Lenhador pt2",
      ]
    },

    {
      title: "Módulo 8: Banco de Dados",
      duration: "1 Aula",
      topics: [
        "Conceitos básicos de Banco de Dados e CRUD",
      ]
    },
    {
      title: "Módulo Bônus",
      duration: "1 Aula",
      topics: [
        "Criando e configurando loja no Tebex",
        "Colocando um script para venda",
      ]
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Grade Curricular <GlitchText text="Completa" /></h2>
          <p className="text-zinc-400">Não pulamos etapas. Do Hello World ao Deploy.</p>
        </div>

        <div className="space-y-4">
          {modules.map((mod: Module, idx: number) => (
            <motion.div
              key={idx}
              initial={false}
              className={`border rounded-2xl overflow-hidden transition-colors ${activeModule === idx ? 'bg-zinc-900 border-violet-500/50' : 'bg-zinc-900/30 border-white/5 hover:bg-zinc-900/50'}`}
            >
              <button
                onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-mono ${activeModule === idx ? 'text-violet-400' : 'text-zinc-600'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`text-xl font-bold ${activeModule === idx ? 'text-white' : 'text-zinc-300'}`}>
                    {mod.title}
                  </h3>
                </div>
                <ChevronDown className={`transition-transform duration-300 ${activeModule === idx ? 'rotate-180 text-violet-400' : 'text-zinc-600'}`} />
              </button>

              <AnimatePresence>
                {activeModule === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-10 border-l border-zinc-800 space-y-3">
                        <div className="text-xs font-bold text-violet-500 uppercase tracking-wider mb-2">{mod.duration}</div>
                        {mod.topics.map((topic: string, i: number) => (
                          <div key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-zinc-600 shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">

          {/* Main Logic Card */}
          <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
                <Terminal size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Back-end Robusto</h3>
              <p className="text-zinc-400 text-sm max-w-xs">
                Aprenda a manipular <span className="text-white">QBCore, FRP e VORP</span>. Otimização (0.00ms) e segurança contra cheaters.
              </p>
            </div>
            <div className="mt-6 p-4 bg-black/50 rounded-xl border border-white/5 group-hover:border-violet-500/20 transition-colors">
              <TypewriterCode />
            </div>
          </BentoCard>

          {/* RedM Focus */}
          <BentoCard className="col-span-1 md:col-span-2 bg-red-950/10 border-red-500/10 flex items-center justify-between group" delay={0.1}>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-bold uppercase mb-2">Exclusivo</div>
              <h3 className="text-xl font-bold text-white">FRP & VORP Core</h3>
              <p className="text-red-200/60 text-xs mt-1">O mercado paga o dobro por devs RedM.</p>
            </div>
            <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-red-600/10 to-transparent" />
            <Database className="text-red-500/50 relative z-10 group-hover:text-red-500 transition-colors" size={40} />
          </BentoCard>

          {/* NUI/React */}
          <BentoCard className="col-span-1 row-span-2 flex flex-col items-center justify-center text-center bg-zinc-900" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
              <Monitor size={48} className="text-cyan-400 mb-6 relative z-10" />
            </div>
            <h3 className="text-lg font-bold text-white">NUI com React</h3>
            <p className="text-zinc-500 text-xs mt-2 px-4">Abandone o jQuery. Crie interfaces modernas, responsivas e leves usando React.</p>
          </BentoCard>

          {/* Github/Git */}
          <BentoCard className="col-span-1 flex flex-col justify-center" delay={0.3}>
            <Globe className="text-zinc-400 mb-3" size={24} />
            <h3 className="text-lg font-bold text-white">Git & GitHub</h3>
            <p className="text-zinc-500 text-xs">Trabalhe em equipe como um profissional.</p>
          </BentoCard>

          {/* Monetization */}
          <BentoCard className="col-span-1 md:col-span-2 bg-gradient-to-r from-emerald-900/10 to-zinc-900 border-emerald-500/10" delay={0.4}>
            <div className="flex flex-col justify-center h-full relative overflow-hidden">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 z-10">
                <DollarSign className="text-emerald-400" size={20} />
                Carreira & Vendas
              </h3>
              <p className="text-zinc-400 text-sm mt-2 max-w-[250px] z-10">
                Não é só código. Aprenda a precificar, vender e criar sua própria loja de scripts (Tebex).
              </p>
              <div className="absolute -right-4 -bottom-4 text-8xl font-bold text-emerald-500/5 select-none">$$$</div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

const CommunitySection: React.FC = () => {
  const features: CommunityFeature[] = [
    {
      icon: <MessageCircle className="text-violet-400" size={24} />,
      title: "Suporte direto do instrutor",
      desc: "Tire suas dúvidas diretamente com quem tem anos de experiência no mercado."
    },
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: "Networking com outros devs",
      desc: "Conecte-se com outros profissionais e expanda suas oportunidades."
    },
    {
      icon: <Lock className="text-amber-400" size={24} />,
      title: "Conteúdos exclusivos",
      desc: "Acesse scripts, tutoriais e recursos que não estão disponíveis no curso básico."
    },
    {
      icon: <Repeat className="text-green-400" size={24} />,
      title: "Acesso permanente",
      desc: "Diferente do curso, o acesso à comunidade é vitalício, sem mensalidades."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-zinc-900">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Features */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-300">Master Developers</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comunidade <br />
              <span className="text-indigo-500">Master Developers</span>
            </h2>

            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Ao adquirir o pacote completo, você terá acesso permanente à nossa comunidade exclusiva. Não é apenas um grupo, é o seu escritório virtual.
            </p>

            <div className="grid gap-6">
              {features.map((feature: CommunityFeature, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-3 rounded-lg bg-zinc-900 border border-zinc-800 h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                    <p className="text-zinc-500 text-sm mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Card / Pricing */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative w-full max-w-sm bg-[#1e1e24] border border-indigo-500/30 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Discord-like aesthetic header */}
              <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full" />

              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                  <Users size={32} />
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold uppercase rounded-full border border-green-500/20">
                  Vagas Abertas
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/20 p-3 rounded-lg">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-1">Comunidade</div>
                  <div className="text-white font-semibold text-sm">Em construção</div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-1">Suporte</div>
                  <div className="text-green-400 font-semibold text-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Ativo
                  </div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-1">Scripts</div>
                  <div className="text-amber-400 font-semibold text-sm">Exclusivos</div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg">
                  <div className="text-zinc-500 text-xs uppercase font-bold mb-1">Acesso</div>
                  <div className="text-white font-semibold text-sm">Vitalício</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center border-t border-zinc-800 pt-6">
                <p className="text-zinc-500 text-sm mb-1 line-through">De R$ 197,00</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-zinc-400 text-lg">Por</span>
                  <span className="text-4xl font-bold text-white">R$ 128,00</span>
                </div>
                <p className="text-zinc-500 text-xs mb-6">Pagamento único</p>

                <Link href={process.env.NEXT_PUBLIC_COMUNIDADE_LINK ?? ""}>
                  <button className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors flex items-center justify-center gap-2">
                    QUERO FAZER PARTE <ChevronRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const questions: FAQItem[] = [
    { q: "Sobre o que é o curso?", a: "O curso ensina você a programar do zero, criando scripts profissionais para servidores FiveM e RedM. Ao final, você estará pronto para vender seus trabalhos para donos de servidores, aproveitando oportunidades em plataformas como o fórum oficial do FiveM." },
    { q: "Preciso ter experiência prévia em programação?", a: "Não! O curso foi desenvolvido para iniciantes. Começamos do absoluto zero e vamos evoluindo gradualmente. Muitos dos meus alunos nunca tinham programado antes." },
    { q: "Por quanto tempo terei acesso ao curso?", a: "O acesso ao curso é vitalício. E o acesso à Comunidade Master Developers, caso você escolha essa opção, é permanente." },
    { q: "Qual a diferença entre os dois planos?", a: "O plano básico (R$ 297,90) inclui apenas o curso com acesso vitalício. O plano completo (R$ 495,80) inclui o curso e também acesso permanente à Comunidade Master Developers no discord, onde você terá suporte direto, conteú permanente à Comunidade Master Developers, onde você terá suporte direto, conteúdos exclusivos, networking com outros desenvolvedores e muito mais." },
    { q: "Meu PC roda o curso?", a: "Para programar (VS Code), qualquer PC serve. Para testar os scripts, você precisa rodar o GTA V ou RDR2 no mínimo." },
    { q: "Vou conseguir criar meu próprio servidor?", a: "Absolutamente! Ao final do curso você terá conhecimento e ferramentas necessárias para criar servidores profissionais e únicos. O curso aborda desde a instalação até sistemas avançados de banco de dados." },
    { q: "Posso desistir da compra?", a: "Sim. Você tem até 7 dias corridos após a compra para solicitar o reembolso total, sem precisar justificar, conforme o Código de Defesa do Consumidor." },
    { q: "Como funciona o pagamento?", a: "Aceitamos cartão de crédito, boleto bancário e PIX. O pagamento é processado de forma segura e você recebe acesso imediato ao conteúdo após a confirmação do pagamento." },
  ];

  return (
    <section className="py-24 bg-zinc-950 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Perguntas <span className="text-zinc-500">Frequentes</span></h2>
        <div className="grid gap-4">
          {questions.map((item: FAQItem, i: number) => (
            <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 hover:bg-zinc-900/50 transition-colors">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="text-violet-500">?</span> {item.q}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard: React.FC = () => {
  return (
    <motion.div
      id="prices"
      whileHover={{ scale: 1.01 }}
      className="relative p-8 md:p-10 rounded-[2rem] bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"
    >
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-violet-600/20 blur-[100px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-red-600/20 blur-[100px] rounded-full" />

      <div className="relative z-10 text-center">
        {/* <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-red-500 text-white text-xs font-bold uppercase tracking-widest mb-6">
          Oferta por tempo limitado
        </div> */}

        <h2 className="text-white font-medium uppercase tracking-wider text-lg mb-3">Curso Completo</h2>
        <h3 className="text-zinc-400 font-light tracking-wider text-sm mb-2">Acesso Vitalício</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-xl font-bold line-through text-zinc-500 self-end">De R$ 297,90</span>
        </div>
        <div className="flex items-center justify-center gap-1 mb-8">
          <span className="text-2xl text-zinc-500 mt-2">R$</span>
          <span className="text-6xl font-bold text-white">218</span>
          <span className="text-xl text-zinc-500 self-end mb-2">,90</span>
        </div>

        <div className="space-y-4 mb-10 text-left pl-4">
          {[
            "7 módulos completos",
            "30+ aulas práticas",
            "Códigos-fonte e exemplos",
            "Certificado de conclusão",
            "Acesso vitalício",
            "Updates Mensais Gratuitos"
          ].map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <CheckCircle2 size={12} />
              </div>
              {item}
            </div>
          ))}
        </div>

        <Link href={process.env.NEXT_PUBLIC_CURSO_LINK ?? ""}>
          <button className="w-full py-5 px-3 rounded-xl uppercase bg-white text-black font-black text-lg hover:bg-zinc-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] active:scale-95">
            Quero apenas o curso
          </button>
        </Link>
        <p className="text-zinc-500 text-xs mt-6 flex items-center justify-center gap-2">
          <Shield size={12} /> Garantia incondicional de 7 dias
        </p>
      </div>
    </motion.div>
  );
};

const PricingCardWithCommunity: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="relative p-8 md:p-10 rounded-[2rem] bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"
    >
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-violet-600/20 blur-[100px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-red-600/20 blur-[100px] rounded-full" />

      <div className="relative z-10 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-red-500 text-white text-xs font-bold uppercase tracking-widest mb-6">
          Melhor oferta!
        </div>

        <h2 className="text-white font-medium uppercase tracking-wider text-lg mb-3">Curso + Comunidade</h2>
        <h3 className="text-zinc-400 font-light tracking-wider text-sm mb-2">Acesso Vitalício</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-xl font-bold line-through text-zinc-500 self-end">De R$ 497,90</span>
        </div>
        <div className="flex items-center justify-center gap-1 mb-8">
          <span className="text-2xl text-zinc-500 mt-2">R$</span>
          <span className="text-6xl font-bold text-white">397</span>
          <span className="text-xl text-zinc-500 self-end mb-2">,90</span>
        </div>

        <div className="space-y-4 mb-10 text-left pl-4">
          {[
            "Tudo do plano básico",
            "Acesso à Comunidade Master Developers",
            "Suporte direto do instrutor",
            "Projetos exclusivos",
            "Acesso permanente à comunidade no discord",
          ].map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <CheckCircle2 size={12} />
              </div>
              {item}
            </div>
          ))}
        </div>
        
        <Link href={process.env.NEXT_PUBLIC_CURSO_COMPLETO_LINK ?? ""}>
          <button className="w-full py-5 px-3 rounded-xl uppercase bg-white text-black font-black text-lg hover:bg-zinc-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] active:scale-95">
            Quero o pacote completo
          </button>
        </Link>
        <p className="text-zinc-500 text-xs mt-6 flex items-center justify-center gap-2">
          <Shield size={12} /> Garantia incondicional de 7 dias
        </p>
      </div>
    </motion.div>
  );
};

const Instructor: React.FC = () => (
  <section className="py-20 bg-zinc-950 border-y border-white/5">
    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border-4 border-zinc-900 shrink-0 overflow-hidden relative">
        {/* Placeholder for Avatar */}
        <Avatar className="w-full h-full">
          <AvatarImage src="/profile.jpg?height=96&width=96" />
          <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600">
            klan
          </AvatarFallback>
        </Avatar>
        {/* <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bold text-4xl">DEV</div> */}
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-white mb-2">Quem é o Instrutor?</h3>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Desde 2017, venho trilhando meu caminho no desenvolvimento de jogos, com foco em modding para GTA V através das plataformas FiveM e RedM.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Sou movido pela paixão por games e hoje atuo como desenvolvedor full stack, com experiência sólida em Lua, JavaScript, TypeScript, C# e MySQL.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Trabalho com back-end e interfaces, utilizando Node.js, React e TypeScript, sempre buscando novas formas de criar experiências imersivas.
        </p>
        <p className="font-bold   text-zinc-400 leading-relaxed mb-4">
          Meu objetivo é levar qualidade e inovação a cada projeto que toco - e agora quero compartilhar todo esse conhecimento com você.
        </p>
        <div className="flex gap-4 justify-center md:justify-start text-violet-400 text-sm font-bold">
          <span>+7 anos de experiência</span>
          <span>•</span>
          <span>Desenvolvedor Full Stack</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 bg-zinc-950 border-t border-white/5 text-center text-zinc-600">
    <div className="flex items-center justify-center gap-2 mb-4">
      <Code2 className="w-5 h-5" />
      <span className="font-bold text-zinc-400">klandestino - Dominando o FiveM/RedM</span>
    </div>
    <div className="flex flex-col gap-5 items-center justify-center">
      <p className="text-sm">© 2024 Todos os direitos reservados.</p>
      <p className="text-xs max-w-3xl">Os valores e exemplos apresentados são baseados em práticas comuns de mercado e em relatos de profissionais do setor. Não há garantia de ganhos financeiros. Os resultados dependem de fatores individuais como dedicação, experiência, portfólio e demanda. Este curso não é afiliado, patrocinado ou aprovado pela Rockstar Games ou pela Cfx.re. Marcas citadas apenas como referência.</p>

    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen font-sans selection:bg-violet-500/30 scroll-smooth">
      <Hero />
      <TechMarquee />
      <BentoGrid />
      <DetailedCurriculum />
      <Instructor />
      <CommunitySection />
      <section id="prices" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Invista no seu <br />Conhecimento.</h2>
          <p className="text-zinc-400">O preço de um único script personalizado paga seu acesso vitalício.</p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-center">
          <PricingCard />
          <PricingCardWithCommunity />
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;