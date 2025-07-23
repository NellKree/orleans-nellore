"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { texts } from '@/config/texts'
import BurgerMenu from './../ui/AnimatedBurgerMenu'
import MenuPanel from './../ui/MenuPanel'

export default function Navbar() {
    const [cartCount] = useState(3)
    const {lang} = useLanguage()

    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const openCart = () => {
        console.log('Открытие корзины')
    }

    return (
        <>
        <nav className="bg-[var(--background)] text-[var(--foreground)] flex items-center justify-between p-4 shadow-md">
            {/* Бургер-меню */}
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {/* Логотип */}
            <Link href="/">
                <span className="text-heading font-logo cursor-pointer">{texts[lang].navbar.logo}</span>
            </Link>

            <div className="flex items-center gap-4">
                {/* Корзина */}
                <button onClick={openCart} className="group flex items-center gap-2 p-2 rounded">
          <span className="text-paragraph font-medium group-hover:text-light group-active:text-secondary">
            {texts[lang].navbar.cart}
          </span>
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-secondary bg-muted rounded-full">
            {cartCount}
          </span>
                </button>
            </div>
        </nav>

            <MenuPanel isOpen={isMenuOpen} switchMenu={toggleMenu}/>
        </>
    )
}
