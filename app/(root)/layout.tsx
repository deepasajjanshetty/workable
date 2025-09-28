import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Workable - Open Source Components",
        default: "Workable - Open Source Components",
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}