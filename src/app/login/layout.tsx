export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center h-screen">
            {children}
        </div>
    )
}
