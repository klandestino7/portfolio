import { Button } from "@/components/ui/button"
import { skill } from "@/data/skills"

export const Stack = () => {
    return (
        <section className="bg-blue-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-mono">My Stack</h2>
                <Button variant="ghost" size="icon" className="text-white">
                    <span className="sr-only">View all tools</span>→
                </Button>
            </div>
            <div className="flex gap-4">
                {skill.map((Item, i) => (
                    <Item key={i} className="w-12 h-12 rounded-xl" />
                ))}
            </div>
        </section>
    )
}