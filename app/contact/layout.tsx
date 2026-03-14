import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Start a Project",
    description: "Ready to lead your industry? Contact CINORIUM to start a project with our specialized development, design, and marketing studios.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
