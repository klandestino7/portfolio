import { Check, Users, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Community = () => {

    return (
        <section className="py-20 bg-neutral-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold mb-6">
                            Comunidade
                            <br />
                            <span className="text-green-400">Master Developers</span>
                        </h2>

                        <p className="text-xl text-neutral-300">
                            Ao adquirir o pacote completo, você terá acesso permanente à nossa comunidade exclusiva de
                            desenvolvedores FiveM.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Suporte direto do instrutor</p>
                                    <p className="text-neutral-400 text-sm">
                                        Tire suas dúvidas diretamente com quem tem anos de experiência no mercado.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Networking com outros desenvolvedores</p>
                                    <p className="text-neutral-400 text-sm">
                                        Conecte-se com outros profissionais e expanda suas oportunidades.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Conteúdos exclusivos</p>
                                    <p className="text-neutral-400 text-sm">
                                        Acesse scripts, tutoriais e recursos que não estão disponíveis no curso básico.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-green-400 mt-1" />
                                <div>
                                    <p className="text-white font-semibold">Acesso permanente</p>
                                    <p className="text-neutral-400 text-sm">
                                        Diferente do curso, o acesso à comunidade é vitalício, sem mensalidades.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-2xl">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Comunidade Ativa</h3>
                                    <p className="text-neutral-300">Mais de 200 desenvolvedores conectados</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-neutral-800 p-4 rounded-lg text-center">
                                    <div className="text-xs text-neutral-400">Suporte</div>
                                    <div className="text-2xl font-bold text-green-400">Ativo</div>
                                </div>
                                <div className="bg-neutral-800 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-green-400">Scripts</div>
                                    <div className="text-xs text-neutral-400">Exclusivos</div>
                                </div>
                                <div className="bg-neutral-800 p-4 rounded-lg text-center">
                                    <div className="text-xs text-neutral-400">Acesso</div>
                                    <div className="text-2xl font-bold text-green-400">Vitalicio</div>
                                </div>
                            </div>

                            <div className="bg-neutral-800 p-4 rounded-lg">
                                <div className="flex items-center space-x-3 mb-3">
                                    <Avatar>
                                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                        <AvatarFallback>PL</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-white">Pedro Lima</div>
                                        <div className="text-xs text-neutral-400">há 2 horas</div>
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-300">
                                    "A comunidade me ajudou a resolver um bug que estava me travando há dias. Valeu muito a pena!"
                                </p>
                            </div>

                            <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                                QUERO FAZER PARTE DA COMUNIDADE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}