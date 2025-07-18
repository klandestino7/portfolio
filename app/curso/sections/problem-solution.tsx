import { Check, Code, Server } from "lucide-react"

export const ProblemSolution = () => {

    return (
        <section className="py-20 bg-neutral-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">
                        Você Está Perdendo Oportunidades de
                        <br />
                        <span className="text-red-400">Ganhar em Dólar Todo Mês?</span>
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                        O mercado de FiveM movimenta milhões de dólares anualmente. Desenvolvedores experientes faturam entre
                        $500-$3000 USD mensais.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-red-400 mb-6">❌ Oportunidades Perdidas:</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                                <p className="text-neutral-300">Não saber como monetizar suas habilidades</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                                <p className="text-neutral-300">Perder clientes internacionais por falta de conhecimento</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                                <p className="text-neutral-300">Servidores que não geram receita suficiente</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                                <p className="text-neutral-300">Scripts amadores que ninguém quer comprar</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                                <p className="text-neutral-300">Não saber precificar seu trabalho corretamente</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-green-400 mb-6">✅ Com o Dominando o FIVEM/REDM:</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <p className="text-neutral-300">Aprenda a criar scripts que vendem por $50-500 USD</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <p className="text-neutral-300">Estratégias para atrair clientes internacionais</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <p className="text-neutral-300">Como montar servidores que geram $1000+ USD/mês</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <p className="text-neutral-300">Técnicas de precificação e negociação</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <p className="text-neutral-300">Portfolio profissional que impressiona</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two Paths */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        <span className="text-blue-400">2 Caminhos</span> Para Sua Independência Financeira
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-8 rounded-2xl border border-blue-500/20">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Code className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Caminho 1: Freelancer</h4>
                                <p className="text-blue-300">Venda Scripts e Serviços</p>
                            </div>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Scripts simples: $50-150 USD</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Scripts complexos: $200-500 USD</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Projetos completos: $1000+ USD</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Trabalhe de qualquer lugar</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Clientes do mundo todo</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-8 rounded-2xl border border-purple-500/20">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Server className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Caminho 2: Servidor Próprio</h4>
                                <p className="text-purple-300">Crie e Monetize Seu Servidor</p>
                            </div>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>VIP/Donates: $500-2000 USD/mês</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Loja de itens: $300-1000 USD/mês</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Parcerias e patrocínios</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Renda passiva 24/7</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Comunidade própria</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}