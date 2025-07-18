import { Button } from "@/components/ui/button"

export const Navigation = () => {
    return (
        <nav className="bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">F</span>
                        </div>
                        <span className="text-xl font-bold">Dominando o FIVEM/REDM</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Garantir Minha Vaga
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}