import {createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [category, setCategory] = useState('Home');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebar, setSidebar] = useState('Normal');
    const [watchSidebarOpen, setWatchSidebarOpen] = useState(false);

    const value = {
        category,
        setCategory,
        sidebarOpen,
        setSidebarOpen,
        sidebar,
        setSidebar,
        watchSidebarOpen,
        setWatchSidebarOpen
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}