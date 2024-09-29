import Link from "next/link";

const links = [
    { href: "/home", label: "Home" },
    { href: "/video", label: "Video" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/groups", label: "Groups" },
    { href: "/gaming", label: "Gaming" },
    { href: "/dashboard", label: "Dashboard" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav>
                <ul className="flex justify-center  py-4 gap-2">
                    {links.map(({ href, label }) => (
                        <li key={`${href}-${label}`}>
                            <Link
                                href={href}
                                className="bg-red-300 p-2 rounded"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {children}
        </section>
    );
}
