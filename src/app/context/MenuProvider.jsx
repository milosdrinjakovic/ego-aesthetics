"use client"
import React, { createContext, useState, useContext } from 'react';


const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);
    const openSubMenu = () => setIsSubMenuOpen(true);
    const closeSubMenu = () => setIsSubMenuOpen(false);

    return (
        <MenuContext.Provider
            value={{
                isMenuOpen,
                isSubMenuOpen,
                openMenu,
                closeMenu,
                openSubMenu,
                closeSubMenu,
                setIsMenuOpen,
                setIsSubMenuOpen
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
