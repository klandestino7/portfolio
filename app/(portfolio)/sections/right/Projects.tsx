
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export const Projects = () => {
    return (
        <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Projects</h2>
              <Button variant="ghost" size="icon">
                <span className="sr-only">View all projects</span>→
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((item, i) => (
                <div key={i} className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg" alt={`Project ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
    )
}