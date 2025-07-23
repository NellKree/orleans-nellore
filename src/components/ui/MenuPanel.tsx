"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'
import { texts } from '@/config/texts'
import Link from "next/link";

export default function MenuPanel({ isOpen, switchMenu }: { isOpen: boolean, switchMenu: () => void }) {
    const panelRef = useRef<HTMLDivElement>(null)
    const { lang, toggleLang } = useLanguage()
    const menuTexts = texts[lang].navbar.menu

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    // Escape close
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                switchMenu()
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [isOpen, switchMenu])

    // Focus trap
    useEffect(() => {
        if (isOpen && panelRef.current) {
            const focusable = panelRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as NodeListOf<HTMLElement>
            if (focusable.length) focusable[0].focus()

            const trapFocus = (e: KeyboardEvent) => {
                if (e.key !== "Tab") return
                const first = focusable[0]
                const last = focusable[focusable.length - 1]

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === first) {
                        e.preventDefault()
                        last.focus()
                    }
                } else { // Tab
                    if (document.activeElement === last) {
                        e.preventDefault()
                        first.focus()
                    }
                }
            }

            document.addEventListener("keydown", trapFocus)
            return () => document.removeEventListener("keydown", trapFocus)
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay (без navbar) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[64px] md:top-[72px] left-0 right-0 bottom-0 bg-[var(--overlay-color)] backdrop-blur-sm z-40"
                        onClick={switchMenu}
                        aria-hidden="true"
                    />

                    {/* Sidebar / Menu */}
                    <motion.div
                        ref={panelRef}
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[64px] md:top-[72px] left-0 h-[calc(100%-64px)] md:h-[calc(100%-72px)] bg-[var(--background)] text-[var(--foreground)] shadow-lg z-50 w-full md:w-64 outline-none"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="menu-title"
                        tabIndex={-1}
                    >
                        <div className="p-4">
                            <h2 id="menu-title" className="text-subheading mb-1">
                                <Link href="/new-in" className="hover:text-light active:text-secondary">
                                    {menuTexts.newIn}
                                </Link>
                            </h2>

                            <h2 id="menu-title" className="text-subheading mb-1">
                                <Link href="/catalog" className="hover:text-light active:text-secondary">
                                    {menuTexts.catalog}
                                </Link>
                            </h2>
                            <ul className="space-y-1">
                                <li>
                                    <Link href="/categories/tshirts" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.tshirts}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/crop-tshirts" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.cropTshirts}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/anoraks" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.anoraks}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/hoodies" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.hoodies}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/zipHoodies" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.zipHoodies}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/longsleeves" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.longsleeves}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/pants" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.pants}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/shorts" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.shorts}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories/accessories" className="text-paragraph ml-4 block hover:text-light active:text-secondary">
                                        {menuTexts.categories.accessories}
                                    </Link>
                                </li>
                            </ul>
                            <h2 id="menu-title" className="text-subheading text-accent mb-1">
                                <Link href="/garage-sale" className="hover:text-accentlight active:text-accent">
                                    {menuTexts.special.garageSale}
                                </Link>
                            </h2>
                            <h2 id="menu-title" className="text-subheading mb-1">
                                <Link href="/winner-club" className="hover:text-light active:text-secondary">
                                    {menuTexts.special.winnerClub}
                                </Link>
                            </h2>
                            <h2 id="menu-title" className="text-subheading mb-1">
                                <Link href="/gift-card" className="hover:text-light active:text-secondary">
                                    {menuTexts.special.giftCard}
                                </Link>
                            </h2>
                            <ul className="space-y-2">
                            {/* Переключатель языка */}
                                <li><button
                                onClick={toggleLang}
                                className="mt-4 text-sm font-medium text-paragraph hover:text-primary active:text-secondary"
                            >
                                {lang.toUpperCase()}
                            </button></li>
                                <li><button onClick={switchMenu} className="mt-4 px-4 py-2 bg-[var(--warning)] text-[var(--foreground)] rounded">Закрыть меню</button></li>
                            </ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
