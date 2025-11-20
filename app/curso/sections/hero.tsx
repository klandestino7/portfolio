import { Play, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-neutral-900 bg-black">
            <div className="bg-hero h-full w-full absolute bg-red top-0" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 relative z-10">
                <div className="text-center mb-12">
                    {/* <Badge className="bg-red-600 text-white mb-4 animate-pulse">🔴 AO VIVO - Últimas Vagas Disponíveis</Badge> */}
                    <p
                        className="text-4xl font-normal mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Curso de FiveM e RedM - Do Zero ao Avançado
                    </p>
                    <h1 className="text-4xl text-white md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Aprenda Como Criar Scripts Profissionais de FiveM e RedM
                    </h1>
                    <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                        Tutorial completo para programar, desenvolver mods e montar servidores competitivos. Descubra como desenvolvedores transformam essas habilidades em {" "} <span className="text-green-400 font-bold">renda de $500 a $3000 USD/mês</span> trabalhando de casa.
                    </p>
                </div>

                {/* Video Player */}
                {/* <div className="relative max-w-4xl mx-auto mb-12">
                    <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-red-700 transition-colors">
                                    <Play className="w-8 h-8 text-white ml-1" />
                                </div>
                                <p className="text-white text-lg font-semibold">Clique para assistir a apresentação completa</p>
                                <p className="text-neutral-300 text-sm mt-2">Duração: 37 minutos</p>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                🔴 AO VIVO
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-8 mt-6 text-sm text-neutral-400">
                        <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>1.843 assistindo agora</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Termina em 1h 45min</span>
                        </div>
                    </div>
                </div> */}

                {/* CTA Below Video */}
                <div className="text-center">
                    <a href={"#plans"} >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 md:text-xl px-12 py-4 mb-4 text-wrap"
                        >
                            QUERO GARANTIR MINHA VAGA AGORA
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>

                    {/* <p className="text-neutral-400 text-sm">⚡ Últimas 17 vagas disponíveis • Oferta expira em 1h 45min</p> */}
                </div>
            </div>
        </section>
    )
}