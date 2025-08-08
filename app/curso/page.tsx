"use client"

import { Play, Check, Star, Clock, Users, ArrowRight, BookOpen, Code, Database, Layout, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { HeroSection } from "./sections/hero"
import { SocialProof } from "./sections/social-proof"
import { ProblemSolution } from "./sections/problem-solution"
import { AboutMe } from "./sections/about-me"
import { CourseContent } from "./sections/course-content"
import { Testimonials } from "./sections/testimonials"
import { MarketOportunity } from "./sections/market-oportunity"
import { OfferSection } from "./sections/offer-section"
import { Community } from "./sections/community"
import { FAQ } from "./sections/faq"
import { FinalCTA } from "./sections/final-cta"
import { Footer } from "./sections/footer"
import { Navigation } from "./sections/navigation"
import { useEffect } from "react"
import { toast } from "sonner"


export default function FiveMCourseVSL() {

    useEffect(() => {
        setTimeout(() => {
            toast("Oferta Especial de Lançamento ", {
                description: "Somente HOJE (08/08) você garante 20% de desconto usando o cupom LANCAMENTO na finalização da compra.",
                action: {
                    label: "Copiar cupom",
                    onClick: () => {
                        navigator.clipboard.writeText("LANCAMENTO")
                            .then(() => console.log("Cupom copiado"))
                            .catch(() => console.log("Erro ao copiar"));
                    },
                },
            })
        }, 5000)
    }, [])

    return (
        <div className="min-h-screen bg-neutral-900 text-white">

            {/* Navigation */}
            {/* <Navigation /> */}

            {/* Hero Section with VSL */}
            <HeroSection />

            {/* Social Proof */}
            <SocialProof />

            {/* Problem/Solution */}
            <ProblemSolution />

            {/* About Instructor */}
            <AboutMe />

            {/* Course Content */}
            {/* <CourseContent /> */}

            {/* Testimonials */}
            {/* <Testimonials /> */}

            {/* Market Opportunity */}
            <MarketOportunity />

            {/* Offer Section */}
            <OfferSection />

            {/* Community Section */}
            <Community />

            {/* FAQ */}
            <FAQ />

            {/* Final CTA */}
            <FinalCTA />

            {/* Footer */}
            <Footer />
        </div>
    )
}
