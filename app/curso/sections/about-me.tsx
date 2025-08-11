import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const AboutMe = () => {
    return (
        <section className="py-20  bg-blue-900/20 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold mb-6">
                            Quem sou eu e por que você
                            <br />
                            <span className="text-blue-400">deveria me escutar?</span>
                        </h2>

                        <div className="space-y-4 text-neutral-300">
                            <p>
                                Desde 2017, venho trilhando meu caminho no desenvolvimento de jogos, com foco em modding para GTA V
                                através das plataformas FiveM e RedM.
                            </p>
                            <p>
                                Sou movido pela paixão por games e hoje atuo como desenvolvedor full stack, com experiência sólida em
                                <span className="text-blue-400 font-semibold"> Lua, JavaScript, TypeScript, C# e MySQL</span>.
                            </p>
                            <p>
                                Trabalho com back-end e interfaces, utilizando Node.js, React e TypeScript, sempre buscando novas
                                formas de criar experiências imersivas.
                            </p>
                            <p className="text-green-400 font-semibold">
                                Meu objetivo é levar qualidade e inovação a cada projeto que toco - e agora quero compartilhar todo
                                esse conhecimento com você.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-neutral-800 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-blue-400">7+</div>
                                <div className="text-sm text-neutral-400">Anos de Experiência</div>
                            </div>
                            <div className="bg-neutral-800 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-green-400">Full Stack</div>
                                <div className="text-sm text-neutral-400">Desenvolvedor</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-2xl">
                            <div className="bg-neutral-900 rounded-2xl p-8">
                                <div className="text-center space-y-4">
                                    <Avatar className="w-24 h-24 mx-auto">
                                        <AvatarImage src="/profile.jpg?height=96&width=96" />
                                        <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                                            FD
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-bold">Desenvolvedor FiveM</h3>
                                        <p className="text-blue-400">Especialista desde 2017</p>
                                    </div>
                                    <div className="flex justify-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-neutral-400">
                                        "Especialista em criar servidores únicos e experiências imersivas"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}