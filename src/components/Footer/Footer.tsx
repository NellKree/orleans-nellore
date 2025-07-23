"use client"
import { useLanguage } from '@/context/LanguageContext'
import { useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaYoutube, FaSpotify, FaTiktok, FaTelegram ,FaWhatsapp   } from "react-icons/fa6";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import {texts} from "@/config/texts";

export default function Footer() {
    const [isCompanyOpen, setCompanyOpen] = useState(false);
    const [isLegalOpen, setLegalOpen] = useState(false);
    const {lang} = useLanguage()

    return (
        <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-muted-background">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-paragraph mb-8">{texts[lang].footer.follow}</h2>
                {/* Social icons */}
                <div className="flex space-x-4 mb-6 justify-start">
                    <a href="https://x.com/" aria-label="X"><FaXTwitter className="w-5 h-5 hover:text-light active:text-secondary" /></a>
                    <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram className="w-5 h-5 hover:text-light active:text-secondary" /></a>
                    <a href="https://www.youtube.com/" aria-label="YouTube"><FaYoutube className="w-5 h-5 hover:text-light active:text-secondary" /></a>
                    <a href="https://open.spotify.com/" aria-label="Spotify"><FaSpotify className="w-5 h-5 hover:text-light active:text-secondary" /></a>
                    <a href="https://www.tiktok.com/en/" aria-label="TikTok"><FaTiktok className="w-5 h-5 hover:text-light active:text-secondary" /></a>
                    <a href="https://telegram.org/" aria-label="Telegram"><FaTelegram className="w-5 h-5 hover:text-light active:text-secondary" /></a>
                    <a href="https://www.whatsapp.com/" aria-label="Whatsapp"><FaWhatsapp className="w-5 h-5 hover:text-light active:text-secondary" /></a>
                </div>

                {/* Company */}
                <div className="border-t border-muted-background py-4">
                    <button
                        className="flex justify-between items-center w-full text-sm font-medium"
                        onClick={() => setCompanyOpen(!isCompanyOpen)}
                        aria-expanded={isCompanyOpen}
                        aria-controls="company-section"
                    >
                        {texts[lang].footer.company}
                        {isCompanyOpen ? <HiChevronUp className="w-5 h-5" /> : <HiChevronDown className="w-5 h-5" />}
                    </button>
                    {isCompanyOpen && (
                        <ul id="company-section" className="mt-2 space-y-1 text-sm">
                            <li><Link href="/about" className="hover:text-light active:text-secondary">{texts[lang].footer.aboutUs}</Link></li>
                            <li><Link href="/contact" className="hover:text-light active:text-secondary">{texts[lang].footer.contact}</Link></li>
                        </ul>
                    )}
                </div>

                {/* Legal Terms */}
                <div className="border-t border-muted-background py-4">
                    <button
                        className="flex justify-between items-center w-full text-sm font-medium"
                        onClick={() => setLegalOpen(!isLegalOpen)}
                        aria-expanded={isLegalOpen}
                        aria-controls="legal-section"
                    >
                        {texts[lang].footer.legal}
                        {isLegalOpen ? <HiChevronUp className="w-5 h-5" /> : <HiChevronDown className="w-5 h-5" />}
                    </button>
                    {isLegalOpen && (
                        <ul id="legal-section" className="mt-2 space-y-1 text-sm">
                            <li><Link href="/legal-notice" className="hover:text-light active:text-secondary">{texts[lang].footer.legalNotice}</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-light active:text-secondary">{texts[lang].footer.privacyPolicy}</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-light active:text-secondary">{texts[lang].footer.cookiePolicy}</Link></li>
                            <li><Link href="/cookie-setting" className="hover:text-light active:text-secondary">{texts[lang].footer.cookieSetting}</Link></li>
                        </ul>
                    )}
                </div>

                {/* Copyright */}
                <div className="border-t border-muted-background py-4 text-center text-xs text-brand">
                    {texts[lang].footer.copyright}
                </div>
            </div>
        </footer>
    )
}
