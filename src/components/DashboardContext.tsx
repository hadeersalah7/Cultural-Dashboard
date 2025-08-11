import { createContext, useState } from "react";


interface IDashboardContextProps {
    pageTitle: string;
    setPageTitle: React.Dispatch<React.SetStateAction<string>>
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDark: boolean; 
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const DashboardContext = createContext<IDashboardContextProps>({
    pageTitle: "",
    setPageTitle: () => { },
    isSidebarOpen: true,
    setIsSidebarOpen: () => { },
    isDark: false,
    setIsDark: () => {}

})

export const DashboardContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [pageTitle, setPageTitle] = useState<string>("")
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    const [isDark, setIsDark] = useState<boolean>(false)
    const dashboardCtx: IDashboardContextProps = {
        pageTitle,
        setPageTitle,
        isSidebarOpen,
        setIsSidebarOpen,
        isDark,
        setIsDark
    }

    return (
        <DashboardContext.Provider value={dashboardCtx}>
            {children}
        </DashboardContext.Provider>
    )
}
