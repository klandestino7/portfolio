import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const FAQ = () => {

    return (

        <section className="py-20 bg-neutral-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Perguntas Frequentes sobre o Curso de FiveM e RedM</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-0" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">
                            Como criar scripts no FiveM e RedM?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            Este curso de FiveM e RedM ensina você a criar scripts profissionais do zero. Você aprenderá programação Lua,
                            desenvolvimento de recursos customizados, integração com banco de dados e todas as técnicas necessárias para
                            desenvolver scripts de qualidade profissional para servidores FiveM e RedM.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-1" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">
                            O que vou aprender no curso de FiveM e RedM?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            O curso ensina você a programar do zero, criando scripts profissionais para servidores FiveM e RedM.
                            Aprenderá Lua, desenvolvimento de mods, sistemas de economia, integração com banco de dados e muito mais.
                            Ao final, você estará pronto para vender seus trabalhos ou criar seu próprio servidor lucrativo.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-1" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">
                            Preciso ter experiência prévia em programação?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            Não! O curso foi desenvolvido para iniciantes. Começamos do absoluto zero e vamos evoluindo
                            gradualmente. Muitos dos meus alunos nunca tinham programado antes.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">
                            Por quanto tempo terei acesso ao curso?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            O acesso ao curso é vitalício. E o acesso à Comunidade Master Developers, caso você escolha essa
                            opção, é permanente.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">
                            Qual a diferença entre os planos do curso?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            O plano "Curso Completo" (de R$ 297,90 por R$ 219,00) inclui apenas o curso com acesso vitalício e todo conteúdo
                            para aprender a criar scripts de FiveM e RedM. O plano "Curso + Comunidade" (de R$ 497,00 por R$ 398,00)
                            inclui tudo do curso básico mais acesso permanente à Comunidade Master Developers no Discord, onde você terá
                            suporte direto, conteúdos exclusivos, networking com outros desenvolvedores FiveM/RedM e projetos especiais.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">
                            Vou conseguir criar meu próprio servidor?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            Absolutamente! Ao final do curso você terá conhecimento e ferramentas necessárias para criar servidores
                            profissionais e únicos. O curso aborda desde a instalação até sistemas avançados de banco de dados.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">Posso desistir da compra?</AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            Sim. Você tem até 7 dias corridos após a compra para solicitar o reembolso total, sem precisar justificar, conforme o Código de Defesa do Consumidor.
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6" className="bg-neutral-800 rounded-lg px-6 border-0">
                        <AccordionTrigger className="text-white hover:text-blue-400">Como funciona o pagamento?</AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            Aceitamos cartão de crédito, boleto bancário e PIX. O pagamento é processado de forma segura e você
                            recebe acesso imediato ao conteúdo após a confirmação do pagamento.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}