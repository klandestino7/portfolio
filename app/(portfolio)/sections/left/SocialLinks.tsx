import Link from "next/link"
import { Twitter, Youtube, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export const SocialLinks = () => {

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://x.com/klandestinodev">
                        <Twitter className="w-5 h-5" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://instagram.com/klandestinodev">
                        <Instagram className="w-5 h-5" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://youtube.com/@klandestino7">
                        <Youtube className="w-5 h-5" />
                    </Link>
                </Button>
            </div>
            <div className="text-gray-400 text-sm">
                <p>© by UIhub in Framer</p>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-white">
                        Licensing
                    </Link>
                    <Link href="#" className="hover:text-white">
                        404
                    </Link>
                </div>
            </div>
        </div>
    )
}