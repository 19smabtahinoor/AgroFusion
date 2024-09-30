import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";

type Link = {
    name: string,
    to: string;
};

export default function NavItems({ links }: { links: Link[]; }) {

    const items = links.map(({ name, to }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pathname = usePathname();
        const isActive = pathname.endsWith(to);
        return <Link key={to} href={to} className={cn("text-gray-600 text-sm font-medium", { "text-black font-bold": isActive })}>{name}</Link>;
    });

    return (
        <>
            {items}
            <div>
                <Link href={'/sign-in'}>
                    <Button className="mb-5 md:mb-0 text-sm w-[fit-content] text-primary bg-secondary rounded-full hover:text-white shadow-none">Sign In</Button>
                </Link>
            </div>
        </>
    );
}