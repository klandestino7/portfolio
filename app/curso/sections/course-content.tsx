import { Check, ArrowRight, BookOpen, Code, Database, Layout, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const CourseContent = () => {

    return (
        <section className="py-20 bg-neutral-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">
                        O Que Você Vai Aprender no
                        <br />
                        <span className="text-blue-400">Dominando o FIVEM/REDM</span>
                    </h2>
                    <p className="text-xl text-neutral-300">Conteúdo completo e estruturado para seu sucesso</p>
                </div>

                <Tabs defaultValue="module1" className="mb-12">
                    <TabsList className="grid grid-cols-5 mb-8">
                        <TabsTrigger value="module1" className="data-[state=active]:bg-blue-600">
                            <Server className="w-4 h-4 mr-2" />
                            Módulo 1
                        </TabsTrigger>
                        <TabsTrigger value="module2" className="data-[state=active]:bg-purple-600">
                            <Code className="w-4 h-4 mr-2" />
                            Módulo 2
                        </TabsTrigger>
                        <TabsTrigger value="module3" className="data-[state=active]:bg-green-600">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Módulo 3
                        </TabsTrigger>
                        <TabsTrigger value="module4" className="data-[state=active]:bg-yellow-600">
                            <Layout className="w-4 h-4 mr-2" />
                            Módulo 4
                        </TabsTrigger>
                        <TabsTrigger value="module5" className="data-[state=active]:bg-red-600">
                            <Database className="w-4 h-4 mr-2" />
                            Módulo 5
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="module1">
                        <Card className="bg-neutral-800 border-neutral-700">
                            <CardHeader>
                                <CardTitle className="text-white text-2xl flex items-center">
                                    <Server className="w-5 h-5 mr-2 text-blue-400" />
                                    Módulo 1: Fundamentos e Configuração
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-neutral-300">
                                <p className="mb-4">
                                    Estabeleça uma base sólida para desenvolvimento FiveM, aprendendo desde a instalação até
                                    configurações avançadas.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold text-blue-400">Aula 1.1 – Introdução ao FiveM</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>O que é FiveM e diferenças do GTA Online</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Conceitos de servidores RP</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Requisitos de hardware e conexão</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-blue-400">Aula 1.2 – Instalação e Configuração</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Download e instalação do servidor</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Configuração do server.cfg essencial</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Configuração de portas e firewall</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-blue-400">Aula 1.3 – Estrutura e Arquitetura</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Entendendo a estrutura de pastas do FiveM</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Diferença entre client-side e server-side</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>O que são resources e como funcionam</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-blue-400">Aula 1.4 – Frameworks Base</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Comparativo: ESX vs vRP vs QBCore</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Instalação do framework escolhido</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Primeiro teste do servidor local</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="module2">
                        <Card className="bg-neutral-800 border-neutral-700">
                            <CardHeader>
                                <CardTitle className="text-white text-2xl flex items-center">
                                    <Code className="w-5 h-5 mr-2 text-purple-400" />
                                    Módulo 2: Programação Lua para FiveM
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-neutral-300">
                                <p className="mb-4">
                                    Domine a linguagem Lua aplicada ao FiveM, desde conceitos básicos até técnicas avançadas de
                                    otimização.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold text-purple-400">Aula 2.1 – Lua Fundamentos</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Variáveis, tipos de dados e operadores</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Estruturas condicionais (if, elseif, else)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Loops (for, while, repeat)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-purple-400">Aula 2.2 – Lua Intermediário</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Funções e escopo de variáveis</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Tabelas e arrays</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Manipulação de strings</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-purple-400">Aula 2.4 – Sistema de Eventos</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>TriggerEvent vs TriggerServerEvent</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>RegisterNetEvent e AddEventHandler</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Comunicação client ↔ server</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-purple-400">Aula 2.5 – Natives do GTA V</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>O que são Natives e como usar</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Documentação e recursos úteis</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Natives mais utilizados</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="module3">
                        <Card className="bg-neutral-800 border-neutral-700">
                            <CardHeader>
                                <CardTitle className="text-white text-2xl flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2 text-green-400" />
                                    Módulo 3: Scripts Básicos e Comandos
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-neutral-300">
                                <p className="mb-4">
                                    Crie seus primeiros scripts funcionais, implementando comandos, notificações e sistemas de
                                    debugging.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold text-green-400">Aula 3.1 – Comandos Simples</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>RegisterCommand básico</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Exemplo prático: comando /reviver</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Permissões e validações</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-green-400">Aula 3.2 – Sistema de Notificações</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Implementação com ESX/QB/vRP</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Uso da biblioteca ox_lib</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Personalização visual</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-green-400">Aula 3.3 – Debugging e Tratamento de Erros</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Uso de print() e Citizen.Trace()</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Identificação de erros comuns</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Técnicas de debugging</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-green-400">Aula 3.4 – Callbacks e Validações</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Sistema de callbacks</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Validação de dados</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Tratamento de casos especiais</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="module4">
                        <Card className="bg-neutral-800 border-neutral-700">
                            <CardHeader>
                                <CardTitle className="text-white text-2xl flex items-center">
                                    <Layout className="w-5 h-5 mr-2 text-yellow-400" />
                                    Módulo 4: Interface e Experiência do Usuário
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-neutral-300">
                                <p className="mb-4">
                                    Crie interfaces atrativas e funcionais para seus servidores, desde menus nativos até HUDs
                                    customizadas.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold text-yellow-400">Aula 4.1 – Menus Nativos</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>NativeUI e RageUI</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Criação de menus interativos</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Exemplo: menu de loja</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-yellow-400">Aula 4.2 – Introdução ao NUI</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>HTML, CSS e JavaScript básico</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Comunicação NUI ↔ Lua</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Primeiro exemplo prático</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-yellow-400">Aula 4.3 – HUDs Customizadas</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Criação de interfaces de usuário</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Responsive design</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Integração com dados do jogo</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-yellow-400">Aula 4.4 – ox_lib Interface Moderna</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Implementação da ox_lib</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Componentes disponíveis</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Melhores práticas de UX</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="module5">
                        <Card className="bg-neutral-800 border-neutral-700">
                            <CardHeader>
                                <CardTitle className="text-white text-2xl flex items-center">
                                    <Database className="w-5 h-5 mr-2 text-red-400" />
                                    Módulo 5: Banco de Dados e Persistência
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-neutral-300">
                                <p className="mb-4">
                                    Implemente sistemas de dados persistentes, desde a configuração do MySQL até sistemas completos de
                                    usuários.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="font-semibold text-red-400">Aula 5.1 – MySQL Fundamentos</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Instalação do oxmysql</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Estrutura de tabelas</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Consultas básicas (SELECT, INSERT, UPDATE, DELETE)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-red-400">Aula 5.2 – Integração com Scripts</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Conexão Lua ↔ MySQL</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Operações assíncronas</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Tratamento de erros de conexão</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-red-400">Aula 5.3 – Sistema de Usuários</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Tabela de jogadores</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Sistema de login/logout</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Persistência de dados básicos</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="font-semibold text-red-400">Aula 5.4 – Migrations e Estrutura</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Versionamento de banco</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Migrations automáticas</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span>Backup e recuperação</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="text-center">
                    
                    <a href={'#plans'}>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-12 py-4"
                    >
                        QUERO APRENDER TUDO ISSO AGORA
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}