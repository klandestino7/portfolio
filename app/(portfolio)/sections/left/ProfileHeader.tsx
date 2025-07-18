import Image from "next/image"

export const ProfileHeader = () => {

    return (
        <div className="flex items-center gap-4">
            <Image src="/profile.jpg" alt="Profile" width={60} height={60} className="rounded-full" />
            <div>
                <h1 className="text-2xl font-mono">klandestino</h1>
                <p className="text-gray-400">SOFTWARE DEVELOPER</p>
            </div>
        </div>

    )
}