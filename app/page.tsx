'use client'
import { div, h1, h2, image, p } from "motion/react-client";
import Image from "next/image";
import { motion, scale } from "motion/react"
import { use, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
    const [showPreview, setShowPreview] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    return(


        <div>
            <header className="flex flex-row justify-between items-center px-4 md:px-8 py-4 gap-4">
                <div className="flex flex-row items-center gap-2">
                    <motion.div whileHover={{scale: 0}}>
                        {<Image className="mt-2"
                        src="/assets/code-icon.png"
                        width={40}
                        height={20}
                        alt="logo"
                    />}
                    </motion.div>
                    <h1 className="text-xl md:text-3xl font-bold">Phize.dev</h1>
                </div>
                <div>
                    {
                    }
                    <ul className="flex flex-row items-center gap-2 md:gap-4 p-2 md:p-3 text-sm md:text-base">
                         <Link href="https://github.com/ZaxFelipe">
                            <motion.button
                                whileHover={{scale: 1.3}}
                                onMouseEnter={() => setShowPreview(true)}
                                onMouseLeave={() => setShowPreview(false)}
                                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                            >
                                Github
                            </motion.button>
                        </Link>
                        <motion.li whileHover={{scale: 1.3}} className="hidden sm:block">Preços</motion.li>
                        <motion.li whileHover={{scale: 1.3}} className="hidden sm:block">Serviços</motion.li>
                    </ul>
                    <link rel="stylesheet" href="" />
                </div>
            </header>
            {showPreview && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        position: 'fixed',
                        left: pos.x - 500,
                        top: pos.y + 32,
                        width: 600,
                        height: 333,
                        pointerEvents: 'none',
                        zIndex: 9999,
                    }}
                >
                    <Image
                        src={'/assets/Screenshot 2025-11-16 183348.png'}
                        alt="preview"
                        width={600}
                        height={333}
                        className="rounded-md shadow-lg"
                    />
                </motion.div>
            )}

            <main className="min-h-screen flex flex-col md:flex-row items-center justify-around gap-8 px-4 md:px-8 py-12 md:py-0">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.h1 initial={{y: -250, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1}} className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">Dando vida para seus</motion.h1>
                    <motion.h2 initial={{x: -400}} animate={{x: 0}} whileHover={{rotate: 20}} transition={{duration: 0.5, delay: 1}} className="text-3xl sm:text-5xl md:text-7xl text-green-500 font-bold">Projetos</motion.h2>
                </div>
                <motion.div className="flex justify-center">
                    {<Image
                        src="/assets/logo-phize-transparent.png"
                        width={300}
                        height={300}
                        alt="logo"
                        className="w-64 h-64 md:w-96 md:h-96"
                    />}
                </motion.div>
            </main>
            <section className="w-full px-4 md:px-8 py-8">
                <div>
                    <p className="text-center md:text-left text-gray-400 text-sm md:text-lg font-thin">Uma pessoa apaixonada por programação e construir ideias</p>
                </div>
            </section>
                <section id="services" className="w-full py-12 md:py-20 px-4 md:px-8">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}} className="mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-3">Serviços</h2>
                        <div className="w-16 h-1 bg-green-500"></div>
                        <p className="text-gray-400 text-sm md:text-lg mt-4">Estes são todos os serviços que realizo como Freelancer ou PJ, entre em contato para solicitar seu orçamento.</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {[
                            { icon: "🤖", title: "Tecnologia moderna e dinamica ", desc: "Desenvolvimento de soluções bonitas e eficientes, com Next.js, Tailwind e Supabase." },
                            { icon: "📋", title: "Atendimento Personalizado", desc: "Desenvolvimento de soluções personalizadas perfeito para lojas outras instituições." },
                            { icon: "🎨", title: "Designs para Social Media e UX", desc: "Criação de Posts e Designs modernos para atingir seu objetivo." }                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: idx * 0.1}}
                                whileHover={{y: -5, boxShadow: "0 20px 30px rgba(34, 197, 94, 0.2)"}}
                                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-green-500 transition-colors cursor-pointer"
                            >
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="w-full py-12 md:py-20 px-4 md:px-8">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}} className="mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-3">Meus Projetos</h2>
                        <div className="w-16 h-1 bg-green-500"></div>
                        <p className="text-gray-400 text-sm md:text-lg mt-4">Alguns dos principais projetos que desenvolvi recentemente.</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
                        {[
                            { 
                                type: "image",
                                image: "/assets/playedyet-card.png", 
                                title: "PlayedYet", 
                                desc: "Organizador de jogos inspirado em Backloggd e Zerei.gg.",
                                link: "https://github.com/ZaxFelipe/PlayedYet"
                            },
                            { 
                                type: "video",
                                video: "/assets/HiClaudio.mp4",
                                title: "HiClaudio", 
                                desc: "Seu agente flutuante de AI para perguntas rápidas a qualquer momento, utilizando Electron e GEMINI 2.5 Flash.",
                                link: "#"
                            },
                            { 
                                type: "image",
                                image: "/assets/logo-phize-transparent.png", 
                                title: "Em breve", 
                                desc: "Alguns projetos ainda estão sendo produzidos.",
                                link: "https://github.com/ZaxFelipe/PlayedYet"
                            },
                        ].map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: idx * 0.1}}
                                whileHover={{y: -5, boxShadow: "0 20px 30px rgba(34, 197, 94, 0.2)"}}
                                className="bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500 transition-colors overflow-hidden"
                            >
                                <div className="relative h-48 w-full">
                                    {project.type === "video" ? (
                                        <video
                                            src={project.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="object-cover w-full h-full"
                                            style={{ filter: 'none' }}
                                        />
                                    ) : (
                                        <Image
                                            src={project.image!}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                                    <motion.button
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                                    >
                                        Ver Projeto
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

        </div>
    )
}