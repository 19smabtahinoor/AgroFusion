import Shell from "@/components/shell/Shell";
import AuthProvider from "@/providers/AuthProvider";
import React from "react";

export default function layout({ children }: { children: React.ReactNode; }) {
    return (
        <AuthProvider>
            <Shell>
                {children}
            </Shell>
        </AuthProvider>
    );
}