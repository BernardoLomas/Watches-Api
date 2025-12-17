import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ToastType = "success" | "error";

interface Toast {
    message: string;
    type: ToastType;
}

interface ToastContextData {
    showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextData | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toast, setToast] = useState<Toast | null>(null);

    function showToast(message: string, type: ToastType) {
        setToast({ message, type});

        setTimeout(() => {
            setToast(null);
        }, 3000);
    }

    return (
        <ToastContext.Provider value= {{ showToast }}>
            {children}

            {toast && (
                <div className={`toast ${toast.type}`}>
                    {toast.message}
                </div>
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if(!context) {
        throw new Error("useToast must be used within ToastProvider!");
    }

    return context;
}