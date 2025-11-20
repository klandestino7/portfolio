import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Terminal, Code2, Zap, DollarSign, Users, Database, Shield, ChevronRight, Star, Monitor, MousePointer2, X, Play } from 'lucide-react';

// --- Utility Components ---

const BentoCard = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md p-6 ${className}`}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-red-500/10" />
      </div>
      {children}
    </motion.div>
  );
};

const GlitchText = ({ text }) => {
  return (
    <span className="relative inline-block group">
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

const TypewriterCode = () => {
  const codeLines = [
    "RegisterCommand('criar_futuro', function(source)",
    "  local player = ESX.GetPlayerFromId(source)",
    "  player.addMoney(1000000) -- Seu conhecimento vale ouro",
    "  print('Dominando FiveM & RedM')",
    "end)"
  ];
  
  return (
    <div className="font-mono text-xs sm:text-sm leading-relaxed text-green-400">
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.5, duration: 0.5 }}
        >
          <span className="text-zinc-600 mr-4">{i + 1}</span>
          {line}
        </motion.div>
      ))}
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-2 h-4 bg-green-400 inline-block ml-1 align-middle"
      />
    </div>
  );
};

// --- Main Sections ---

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-zinc-950 text-white pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 z-10"></div>
      
      {/* Floating Orbs */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-64 h-64 bg-violet-600/20 rounded-full blur-[100px]" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-80 h-80 bg-red-600/20 rounded-full blur-[100px]" />

      <div className="z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wider uppercase text-zinc-300">Turma Aberta 2024</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Crie sua própria <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-white to-red-500">
            Realidade
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Pare de copiar scripts bugados. Aprenda a programar do zero absoluto ao avançado para <span className="text-violet-400 font-semibold">FiveM</span> e <span className="text-red-400 font-semibold">RedM</span>. O mercado está faminto por criadores.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Começar Jornada <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-zinc-300 font-medium flex items-center gap-2">
            <Play className="w-4 h-4 fill-current" /> Ver Trailer
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <MousePointer2 className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Seu Arsenal de <GlitchText text="Dev" /></h2>
          <p className="text-zinc-400">A caixa de ferramentas completa para dominar o RP.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Card 1: The Core */}
          <BentoCard className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Lógica & LUA</h3>
              <p className="text-zinc-400 text-sm">Aprenda a linguagem que controla tudo. Variáveis, funções, loops e eventos. Do "Hello World" a sistemas complexos.</p>
            </div>
            <div className="mt-6 p-4 bg-black/30 rounded-xl border border-white/5">
              <TypewriterCode />
            </div>
          </BentoCard>

          {/* Card 2: RedM Exclusive */}
          <BentoCard className="col-span-1 md:col-span-2 bg-red-900/10 border-red-500/20 flex items-center justify-between group" delay={0.1}>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">RedM Masterclass</h3>
              <p className="text-red-200/60 text-xs mt-1">Domine o VORP e RedEM.</p>
            </div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-red-600/20 to-transparent transform skew-x-12 translate-x-10 group-hover:translate-x-0 transition-transform duration-500" />
            <Database className="text-red-500 relative z-10" size={32} />
          </BentoCard>

          {/* Card 3: NUI */}
          <BentoCard className="col-span-1 row-span-2 flex flex-col items-center justify-center text-center bg-zinc-900" delay={0.2}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur-xl absolute opacity-20 animate-pulse" />
            <Monitor size={40} className="text-cyan-400 mb-4 relative z-10" />
            <h3 className="text-lg font-bold text-white">NUI Design</h3>
            <p className="text-zinc-500 text-xs mt-2">HTML, CSS e JS para interfaces que brilham.</p>
          </BentoCard>

          {/* Card 4: Database */}
          <BentoCard className="col-span-1 md:col-span-1 flex flex-col justify-center" delay={0.3}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <h3 className="text-lg font-bold text-white">SQL</h3>
            </div>
            <p className="text-zinc-400 text-xs">Salvar dados é crucial. Aprenda MySQL sem dor de cabeça.</p>
          </BentoCard>

          {/* Card 5: Monetization */}
          <BentoCard className="col-span-1 md:col-span-2 bg-gradient-to-r from-emerald-900/20 to-zinc-900 border-emerald-500/20" delay={0.4}>
             <div className="flex items-center justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <DollarSign className="text-emerald-400" /> Monetização
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 max-w-[200px]">Como precificar e vender seus scripts para grandes cidades.</p>
                </div>
                <div className="text-4xl font-bold text-white/10 select-none">$$$</div>
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const modules = [
    { title: "Fundação", desc: "Configurando VS Code, Git e Lógica Básica.", color: "bg-zinc-500" },
    { title: "FiveM Core", desc: "Client vs Server, Events, Native Functions.", color: "bg-violet-500" },
    { title: "Front-End (NUI)", desc: "React básico para interfaces de jogo.", color: "bg-blue-500" },
    { title: "RedM Wild West", desc: "Cavalos, Carroças e Sistemas de Crafting.", color: "bg-red-500" },
    { title: "Otimização", desc: "Resmon 0.01ms: O segredo da performance.", color: "bg-green-500" }
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
       <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">O Caminho do <span className="text-violet-500">Expert</span></h2>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2" />

          <div className="space-y-12">
            {modules.map((mod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className={`flex-1 text-left ${idx % 2 === 1 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                  <h3 className="text-2xl font-bold mb-2">{mod.title}</h3>
                  <p className="text-zinc-400">{mod.desc}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${mod.color} shadow-[0_0_20px_rgba(255,255,255,0.5)] ring-4 ring-black`} />
                </div>

                {/* Empty Space for Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
       </div>
    </section>
  );
};

const PricingCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 max-w-md mx-auto overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/20 blur-[80px] rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/20 blur-[80px] rounded-full" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-zinc-400 font-medium uppercase tracking-wider text-sm">Acesso Completo</h3>
            <h2 className="text-4xl font-bold text-white mt-2">R$ 297<span className="text-lg text-zinc-500 font-normal">,90</span></h2>
          </div>
          <div className="bg-white/10 p-3 rounded-xl">
            <Zap className="text-yellow-400 fill-current" />
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "Acesso Vitalício ao Curso",
            "Módulos FiveM & RedM",
            "Comunidade VIP no Discord",
            "Pack de Assets Premium",
            "Certificado Reconhecido",
            "Atualizações Mensais"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs">✓</div>
              {item}
            </li>
          ))}
        </ul>

        <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
          Quero Codar Agora
        </button>
        
        <p className="text-center text-zinc-500 text-xs mt-4">Garantia de 7 dias. Risco zero.</p>
      </div>
    </motion.div>
  );
};

const Footer = () => (
  <footer className="py-12 bg-zinc-950 border-t border-white/5 text-center text-zinc-600">
    <div className="flex items-center justify-center gap-2 mb-4">
      <Code2 className="w-5 h-5" />
      <span className="font-bold text-zinc-400">RP MASTERCLASS</span>
    </div>
    <p className="text-sm">© 2024 Todos os direitos reservados. Não é um produto oficial da Rockstar Games.</p>
  </footer>
);

const App = () => {
  return (
    <div className="bg-zinc-950 min-h-screen font-sans selection:bg-violet-500/30">
      <Hero />
      <BentoGrid />
      <Curriculum />
      
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">O investimento que <br/>muda o seu jogo.</h2>
          <p className="text-zinc-400">Uma venda de script já paga o curso inteiro.</p>
        </div>
        <PricingCard />
      </section>

      <Footer />
    </div>
  );
};

export default App;