import { createContext, useContext, useState } from "react";

interface GlobalContextProps {
    isAllProducts: boolean;
    setIsAllProducts: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAllProducts, setIsAllProducts] = useState(true);

    return (
        <GlobalContext.Provider
            value={{
                isAllProducts,
                setIsAllProducts
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = (): GlobalContextProps => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }

    return context;
};

export default GlobalProvider;
