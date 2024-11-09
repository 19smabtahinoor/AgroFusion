'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from 'react';
import LetterAvatar from 'react-avatar';
import { PiSignOut } from 'react-icons/pi';
import { Button } from "./button";

type Link = {
    name: string,
    to: string;
};




export default function NavItems({ links }: { links: Link[]; }) {

    const { data, status } = useSession();
    const { user } = data || {};
    const { toast } = useToast();

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', // Friday
        year: 'numeric', // 2023
        month: 'long', // February
        day: 'numeric', // 10
        hour: 'numeric', // 5
        minute: 'numeric', // 57
        hour12: true, // PM format
    };

    const event = new Date();
    const day = event.toLocaleDateString('en-US', options);

    useEffect(() => {
        if (status !== 'loading' && !user?.email) {
            setTimeout(() => {
                toast({
                    title: "Sign-In with the default credentials to see the dashboard",
                    description: day,
                    className: "border-slate-200 bg-primary text-white"
                });
            }, 1000);
        }
    }, [day, status, toast, user?.email]);

    const items = links.map(({ name, to }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pathname = usePathname();
        const isActive = pathname.endsWith(to);
        return <Link key={to} href={to} className={cn("text-gray-600 text-sm font-medium", { "text-black font-bold": isActive })}>{name}</Link>;
    });

    const account = (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                    <LetterAvatar
                        name={user?.name}
                        className="rounded-full"
                        size="35"
                        textSizeRatio={2.7}
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border shadow-lg border-slate-200">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <hr className="border-slate-200" />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="gap-x-2" onClick={() => signOut()}>
                        <PiSignOut className="text-2xl" />
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );

    return (
        <>
            {items}
            <div>
                {
                    user?.email ? <div className='flex flex-col md:flex-row md:items-center gap-5'>
                        <Link href={'/dashboard/field_overview'}>Dashboard</Link>
                        <div>{account}</div>
                    </div>
                        : <Link href={'/sign-in'}>
                            <Button className="mb-5 md:mb-0 text-sm w-[fit-content] text-primary bg-secondary rounded-full hover:text-white shadow-none">Sign In</Button>
                        </Link>
                }

            </div>
        </>
    );
}