import Image from "next/image"
import { projects } from "@/data/projects"

export const Projects = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-mono">Projetos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden group"
          >
            <Image
              src={item.image ?? "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-bold">{item.title}</h3>
              {item.description && (
                <p className="text-gray-200 text-sm">{item.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
