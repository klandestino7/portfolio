

export const Footer = () => {

    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">F</span>
                        </div>
                        <span className="text-xl font-bold">Dominando o FIVEM/REDM</span>
                    </div>
                    <p className="text-neutral-400">© 2024 Todos os direitos reservados.</p>
                    <div className="flex justify-center space-x-6 text-sm text-neutral-400">
                        <a href="#" className="hover:text-white">
                            Termos de Uso
                        </a>
                        <a href="#" className="hover:text-white">
                            Política de Privacidade
                        </a>
                        <a href="#" className="hover:text-white">
                            Suporte
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}