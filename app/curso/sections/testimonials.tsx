import { Star } from "lucide-react"
import { Card, CardContent  } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Testimonials = () => {

    return (

        <section className="py-20 bg-neutral-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">
                        Veja os Resultados dos Meus Alunos
                        <br />
                        <span className="text-green-400">Ganhando em Dólar</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-neutral-800 border-neutral-700">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>JC</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-white">João Carlos</div>
                                    <div className="text-sm text-neutral-400">Freelancer FiveM</div>
                                </div>
                            </div>
                            <div className="flex space-x-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-neutral-300 text-sm">
                                "Em 4 meses já faturei mais de $2.500 USD vendendo scripts. Meu primeiro script vendeu por $180!"
                            </p>
                            <div className="mt-3 text-green-400 font-semibold text-sm">💰 $2.500+ USD em 4 meses</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-neutral-800 border-neutral-700">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>MS</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-white">Maria Silva</div>
                                    <div className="text-sm text-neutral-400">Dona de Servidor</div>
                                </div>
                            </div>
                            <div className="flex space-x-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-neutral-300 text-sm">
                                "Meu servidor agora fatura $1.200 USD/mês com VIPs e doações. Saí do zero total!"
                            </p>
                            <div className="mt-3 text-green-400 font-semibold text-sm">💰 $1.200 USD/mês recorrente</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-neutral-800 border-neutral-700">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>RL</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-white">Rafael Lima</div>
                                    <div className="text-sm text-neutral-400">Dev Full-Time</div>
                                </div>
                            </div>
                            <div className="flex space-x-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-neutral-300 text-sm">
                                "Larguei meu emprego! Agora ganho $3.000+ USD/mês só com projetos FiveM. Liberdade total!"
                            </p>
                            <div className="mt-3 text-green-400 font-semibold text-sm">💰 $3.000+ USD/mês</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}