"use client";
import svg from '@/constants/menuIcons';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
export default function Sidebar({ children }: { children: React.ReactNode; }) {

    const [mobileMenu, setMobileMenu] = useState(false);

    const links = [
        { name: 'Field Overview', to: '/dashboard/field_overview', icon: svg.field },
        { name: 'Firming Advice', to: '/dashboard/farming_advice', icon: svg.forage },
        { name: 'Predictions', to: '/dashboard/predictions', icon: svg.trot_cards },
        { name: 'Alerts', to: '/dashboard/alerts', icon: svg.siren },
    ];

    const others = [
        { name: 'Account', to: '/dashboard/account', icon: svg.profile },
        { name: 'Help', to: '/dashboard/help', icon: svg.info },
    ];

    const menus = links.map(({ name, to, icon: Icon }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pathname = usePathname();
        const isActive = pathname.endsWith(to);
        return <Link key={to} href={to} className={cn("px-6 py-3 hover:bg-secondary text-slate-500 font-medium transition-all duration-200 text-sm rounded-md flex items-center gap-x-4", { "bg-secondary text-primary": isActive })}>
            <Image src={Icon} width={25} className={cn("", { "opacity-30": !isActive })} alt='icon' />
            <span className="">{name}</span>
        </Link>;
    });

    const othersMenu = others.map(({ name, to, icon: Icon }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pathname = usePathname();
        const isActive = pathname.endsWith(to);
        return <Link key={to} href={to} className={cn("px-6 py-3 hover:bg-secondary text-slate-500 transition-all duration-200 text-sm rounded-md font-semibold flex items-center gap-x-2", { "bg-secondary text-primary": isActive })}>
            <Image src={Icon} width={25} height={25} className={cn("", { "opacity-30": !isActive })} alt='icon' />
            <span className="">{name}</span>
        </Link>;
    });

    return (
        <div className="h-screen flex flex-col">
            <nav className="flex gap-x-2 items-center px-5 py-3 w-[300px] lg:bg-[#F3FFF6]">
                <div className="block md:hidden cursor-pointer" onClick={() => setMobileMenu((open) => !open)}>{mobileMenu ? <IoMdClose className="text-2xl" /> : <HiMenuAlt2 className="text-2xl" />}</div>
                <div className="flex items-center gap-x-3 px-6">
                    <Image src={svg.brandLogo} alt='Brand Logo' />
                </div>
            </nav>
            <hr className="border-slate-200" />
            <div className="flex overflow-hidden relative h-full">
                <aside className={cn("w-[300px] h-full bg-[#F3FFF6] border-slate-200 p-5 absolute md:static flex flex-col gap-y-2 transition-all duration-300 ease-in-out overflow-y-auto", { "-left-[300px]": !mobileMenu, "-left-[0px] w-full md:w-[300px]": mobileMenu })}>
                    <div className="mb-5">
                        <h1 className="px-6 text-sm mb-2 text-slate-500">Menu</h1>
                        {menus}
                    </div>
                    <div>
                        <h1 className="px-6 text-sm mb-2 text-slate-500">Others</h1>
                        {othersMenu}
                    </div>
                </aside>

                <main className="flex-1 p-5 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}