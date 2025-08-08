import { Check} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const OfferSection = () => {

    return (

        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30" id="plans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-12">
                    <Badge className="bg-red-600 text-white mb-4 animate-pulse">🔥 OFERTA ESPECIAL </Badge>
                    <h2 className="text-4xl font-bold mb-6">
                        Escolha o Plano Ideal
                        <br />
                        <span className="text-blue-400">Para Você</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-neutral-800 border-neutral-700 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Curso Completo</CardTitle>
                            <p className="text-neutral-400">Acesso vitalício</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">R$ 297,90</div>
                                <div className="text-sm text-neutral-400">Pagamento único</div>
                            </div>

                            <ul className="space-y-3 text-sm text-neutral-300">
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>5 módulos completos</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>20+ aulas práticas</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Códigos-fonte e exemplos</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Certificado de conclusão</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Acesso vitalício </span>
                                </li>
                            </ul>

                            <a href={process.env.CURSO_LINK} target="_blank">
                                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    QUERO APENAS O CURSO
                                </Button>
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="bg-neutral-800 border-neutral-700 relative overflow-hidden transform scale-105">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                        <Badge className="absolute -top-3 right-4 bg-green-500 text-white">RECOMENDADO</Badge>
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Curso + Comunidade</CardTitle>
                            <p className="text-neutral-400">Acesso completo</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">R$ 495,80</div>
                                <div className="text-sm text-neutral-400">Pagamento único</div>
                            </div>

                            <ul className="space-y-3 text-sm text-neutral-300">
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Tudo do plano básico</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span className="font-semibold text-green-400">Acesso à Comunidade Master Developers</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Suporte direto do instrutor</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Projetos exclusivos</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span className="font-semibold text-green-400">Acesso permanente à comunidade</span>
                                </li>
                            </ul>

                            <a href={process.env.CURSO_COMPLETO_LINK} target="_blank">
                                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                                    QUERO O PACOTE COMPLETO
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                </div>

                {/* <div className="mt-8 text-center">
                    <div className="bg-red-600 text-white p-4 rounded-lg mb-6 inline-block">
                        <div className="text-lg font-bold">⏰ OFERTA EXPIRA EM:</div>
                        <div className="text-2xl font-mono"> 31/08/2025 </div>
                    </div>
                </div> */}

                <div className="text-center mt-6">
                    <p className="text-neutral-400 mb-4">🔒 Pagamento 100% seguro • Acesso imediato após a compra</p>
                    {/* <p className="text-red-400 font-semibold">⚠️ Restam apenas 17 vagas para esta turma</p> */}
                </div>
            </div>
        </section>
    )
}