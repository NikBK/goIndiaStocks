"use client"

import { createContext, useContext, useEffect, useState } from "react";

// Get Window Dimensions
export const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined"

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null
        const height = hasWindow ? window.innerHeight : null
        return {
            width,
            height,
        }
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions())
            }

            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
        }
    }, [hasWindow])

    return windowDimensions
}

// Context Provider
const ContextProvider = createContext();
export const useActiveTab = () => useContext(ContextProvider);

export const Context = ({ children }) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <ContextProvider.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </ContextProvider.Provider>
    )
}