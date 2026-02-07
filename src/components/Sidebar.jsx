import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/13-removebg-preview.png';
import {
    ChevronLeft,
    LayoutDashboard,
    Mail,
    Menu,
    X,
    TableProperties
} from 'lucide-react';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false); // State untuk HP

    const Menus = [
        { title: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
        { title: "Game", icon: <Mail size={20} />, path: "/game" },
        { title: "Tabel", icon: <TableProperties size={20} />, path: "/tabel" },
    ];

    return (
        <>
            {/* --- TOMBOL HAMBURGER (Hanya muncul di Mobile) --- */}
            {!mobileOpen && (
                <div className="md:hidden fixed top-5 left-5 z-50">
                    <button 
                        onClick={() => setMobileOpen(true)}
                        className="p-2 bg-white border-2 border-slate-900 rounded-lg shadow-md"
                    >
                        <Menu size={24} className="text-slate-900" />
                    </button>
                </div>
            )}

            {/* --- OVERLAY (Muncul saat Sidebar terbuka di HP) --- */}
            {mobileOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* --- SIDEBAR UTAMA --- */}
            <div
                className={`
                    ${open ? "w-72" : "w-20"} 
                    ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 
                    bg-white h-screen p-5 pt-8 fixed md:relative z-50 duration-300 border-r-slate-900 border-r-2 transition-all
                `}
            >
                {/* Tombol Toggle Desktop */}
                <button
                    className={`hidden md:flex absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-slate-900 bg-white rounded-full items-center justify-center ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Tombol Tutup (Hanya di HP) */}
                <button 
                    onClick={() => setMobileOpen(false)}
                    className="md:hidden absolute right-4 top-4 text-slate-900"
                >
                    <X size={24} />
                </button>

                {/* Logo / Brand */}
                <div className="flex gap-x-4 items-center">
                    <div className={`cursor-pointer duration-500 p-2 rounded-lg`}>
                        <img src={Logo} alt="Logo" width={40} />
                    </div>
                    <h1 className={`text-slate-900 origin-left font-bold text-xl duration-200 
                        ${!open && "scale-0 md:hidden"} 
                        ${mobileOpen ? "scale-100" : ""}
                    `}>
                        ThirteenVault.
                    </h1>
                </div>

                {/* Menu Items */}
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <Link to={Menu.path} key={index} onClick={() => setMobileOpen(false)}>
                            <li className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-700 hover:text-white text-slate-900 items-center gap-x-4 mt-2 transition-colors`}>
                                {Menu.icon}
                                <span className={`
                                    ${!open && "md:hidden"} 
                                    ${mobileOpen ? "block" : ""} 
                                    origin-left duration-200
                                `}>
                                    {Menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;