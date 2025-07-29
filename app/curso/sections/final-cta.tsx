import { Button } from "@/components/ui/button"

export const FinalCTA = () => {

    return (
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-6">Não Deixe Essa Oportunidade Passar</h2>
                <p className="text-xl text-neutral-300 mb-8">
                    Esta é sua chance de dominar o desenvolvimento FiveM/RedM e criar servidores profissionais.
                    <br />
                    <span className="text-yellow-400 font-semibold">
                        As vagas são limitadas e a oferta expira em poucas horas!
                    </span>
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl py-6"
                    >
                        QUERO APENAS O CURSO
                        {/* <br /> */}
                        {/* <span className="text-sm">R$ 297,90</span> */}
                    </Button>

                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-xl py-6"
                    >
                        QUERO O PACOTE COMPLETO
                        {/* <br /> */}
                        {/* <span className="text-sm">R$ 495,80</span> */}
                    </Button>
                </div>

                <div className="text-center space-y-2">
                    <p className="text-neutral-400">💳 Parcelamento em até 12x</p>
                    <p className="text-neutral-400">🔒 Compra 100% segura e protegida</p>
                    {/* <p className="text-red-400 font-semibold">⏰ Oferta expira em: 01:45:33</p> */}
                </div>
            </div>
        </section>
    )
}