"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { data } from "@/data/profile"
import { projects } from "@/data/projects"
import { skill } from "@/data/skills"
import { ProfileHeader } from "./sections/left/ProfileHeader"
import { Bio } from "./sections/left/Bio"
import { SocialLinks } from "./sections/left/SocialLinks"
import { Projects } from "./sections/right/Projects"
import { Stack } from "./sections/right/Stack"
import { ContactAndClients } from "./sections/right/ContactAndClients"
import { useEffect } from "react"
import { redirect } from "next/navigation"

export default function Portfolio() {

  return redirect('/curso');

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <ProfileHeader />

          {/* Bio */}
          <Bio />

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <Projects />

          {/* Stack Section */}
          <Stack />

          {/* Contact and Clients Sections */}
          <ContactAndClients />
        </div>
      </div>
    </div>
  )
}

