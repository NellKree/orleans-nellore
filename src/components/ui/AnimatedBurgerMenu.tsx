const AnimatedBurgerMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
    return (
        <button
            onClick={toggleMenu}
            className="p-2 rounded focus:outline-none"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
            >
                {/* Левая половина верхней полоски */}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h8"
                    className={`text-brand transition-all duration-300 ease-in-out ${
                        isOpen ? '-translate-x-1/5 translate-y-1/6 rotate-45 origin-center' : ''
                    }`}
                    stroke="currentColor"
                />

                {/* Правая половина верхней полоски */}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6h8"
                    className={`text-brand transition-all duration-300 ease-in-out ${
                        isOpen ? 'translate-x-1/5 translate-y-1/6 -rotate-45 origin-center' : ''
                    }`}
                    stroke="currentColor"
                />

                {/* Левая половина центральной полоски */}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h8"
                    className={`text-brand transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-0 -translate-x-1' : 'opacity-100'
                    }`}
                    stroke="currentColor"
                />

                {/* Правая половина центральной полоски */}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 12h8"
                    className={`text-brand transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-0 -translate-x-1' : 'opacity-100'
                    }`}
                    stroke="currentColor"
                />

                {/* Левая половина нижней полоски */}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h8"
                    className={`text-brand transition-all duration-300 ease-in-out ${
                        isOpen ? '-translate-x-1/5 -translate-y-1/6 -rotate-45 origin-center' : ''
                    }`}
                    stroke="currentColor"
                />

                {/* Правая половина нижней полоски */}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h8"
                    className={`text-brand transition-all duration-300 ease-in-out ${
                        isOpen ? 'translate-x-1/5 -translate-y-1/6 rotate-45 origin-center' : ''
                    }`}
                    stroke="currentColor"
                />
            </svg>
        </button>
    );
};

export default AnimatedBurgerMenu;