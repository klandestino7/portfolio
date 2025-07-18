import Image from "next/image"
import { Button } from "@/components/ui/button"

export const ContactAndClients = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                <h2 className="text-2xl font-mono mb-4">Contact</h2>
                <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                    <span className="sr-only">Contact me</span>→
                </Button>
            </section>

            <section className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <h3 className="text-4xl font-bold mb-4">100%</h3>
                <p className="text-gray-400">Happy Clients</p>
                <div className="flex -space-x-2 mt-4">
                    {[1, 2, 3].map((i) => (
                        <Image
                            key={i}
                            src="/placeholder.svg"
                            alt={`Client ${i}`}
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-gray-900"
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}