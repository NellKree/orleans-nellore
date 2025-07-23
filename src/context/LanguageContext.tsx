"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ru' | 'en'

interface LanguageContextType {
    lang: Language
    toggleLang: () => void
    setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLangState] = useState<Language>('ru')

    // Load from localStorage on mount
    useEffect(() => {
        const storedLang = localStorage.getItem('lang') as Language
        if (storedLang) setLangState(storedLang)
    }, [])

    const setLang = (language: Language) => {
        setLangState(language)
        localStorage.setItem('lang', language)
    }

    const toggleLang = () => {
        const newLang = lang === 'ru' ? 'en' : 'ru'
        setLang(newLang)
    }

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
