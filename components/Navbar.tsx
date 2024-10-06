"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Referência para o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl bg-white bg-opacity-10 backdrop-blur-md shadow-md rounded-lg border border-[#0079FF] z-0"
      style={{ zIndex: 0 }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-3.png"
                alt="Logo"
                width={100} // Ajuste a largura conforme necessário
                height={40} // Ajuste a altura conforme necessário
                className="h-auto w-auto" // Classe para garantir o ajuste da proporção
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="block lg:hidden text-black focus:outline-none"
              onClick={toggleMenu}
            >
              {/* Ícone de hambúrguer */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Links de navegação */}
            <div
              ref={menuRef}
              className={`hidden lg:flex ${
                isOpen ? "block" : "hidden"
              } lg:block space-x-4`}
            >
              <Link href="/services" className="text-slate-50 relative group">
                Serviços
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/equipament" className="text-slate-50 relative group">
                Equipamentos
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-slate-50 relative group">
                Sobre a Empresa
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/gallery" className="text-slate-50 relative group">
                Galeria
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-slate-50 relative group">
                Entre em Contato
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF0080] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
        {/* Menu mobile */}
        <div
          className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
          ref={menuRef}
        >
          <div className="flex flex-col space-y-2">
            <Link href="/services" className="text-black">
              Serviços
            </Link>
            <Link href="/equipament" className="text-black">
              EquipamentPage
            </Link>
            <Link href="/about" className="text-black">
              Sobre a Empresa
            </Link>
            <Link href="/gallery" className="text-black">
              Galeria
            </Link>
            <Link href="/contact" className="text-black">
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
