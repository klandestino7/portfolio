import { Button } from "@/components/ui/button"
import { data } from "@/data/profile"

export const Bio = () => {

    return (
        <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
                {data.about}
            </p>
            <Button variant="outline" className="rounded-full text-black">
                More about Me
            </Button>
        </div>
    )
}