'use client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import svg from '@/constants/menuIcons';
import { cn } from '@/lib/utils';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import LetterAvatar from 'react-avatar';
import { BsBell } from "react-icons/bs";
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { PiSignOut } from 'react-icons/pi';
import TopBarLocation from './TopBarLocation';
export default function Sidebar({ children }: { children: React.ReactNode; }) {
	const [mobileMenu, setMobileMenu] = useState(false);

	const links = [
		{
			name: 'Field Overview',
			to: '/dashboard/field_overview',
			icon: svg.field,
		},
		{
			name: 'Farming Advice',
			to: '/dashboard/farming_advice',
			icon: svg.forage,
		},
		{ name: 'Predictions', to: '/dashboard/predictions', icon: svg.trot_cards },
		{ name: 'Alerts', to: '/dashboard/alerts', icon: svg.siren },
		{ name: 'Help', to: '/dashboard/help', icon: svg.info },
		{ name: 'Report', to: '/dashboard/report?language=Bangla', icon: svg.report },
	];

	const menus = links.map(({ name, to, icon: Icon }) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const pathname = usePathname();
		const isActive = pathname.endsWith(to);
		return (
			<Link
				key={to}
				href={to}
				className={cn(
					'px-6 py-3 hover:bg-secondary text-slate-500 font-medium transition-all duration-200 text-sm rounded-md flex items-center gap-x-4',
					{ 'bg-secondary text-primary': isActive }
				)}
			>
				<Image
					src={Icon}
					width={25}
					className={cn('', { 'opacity-30': !isActive })}
					alt="icon"
				/>
				<span className="">{name}</span>
			</Link>
		);
	});

	const { data } = useSession();
	const { user } = data || {};

	const content = (
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
		<div className="h-screen flex flex-col">
			<nav className="flex gap-x-2 items-center justify-between">
				<div className="w-[300px] lg:bg-[#F3FFF6]  px-5 py-3  ">
					<div
						className="block md:hidden cursor-pointer"
						onClick={() => setMobileMenu((open) => !open)}
					>
						{mobileMenu ? (
							<IoMdClose className="text-2xl" />
						) : (
							<HiMenuAlt2 className="text-2xl" />
						)}
					</div>
					<div className="flex items-center gap-x-3 px-6">
						<Link href={'/'}>
							<Image src={svg.brandLogo} alt="Brand Logo" />
						</Link>
					</div>
				</div>
				<div className="pr-[100px] flex items-center gap-x-5">

					<div className='flex items-center gap-x-2'>
						<div>{content}</div>
						<h1>{user?.name}</h1>
					</div>
					<div>
						<TopBarLocation />
					</div>
					<Link href={'/dashboard/alerts'}>
						<div className='p-2 bg-primary rounded-full text-white relative'>
							<span className="flex h-3 w-3 absolute left-6 -top-1">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
							</span>
							<BsBell className='text-lg' />
						</div>
					</Link>
				</div>
			</nav>
			<hr className="border-slate-200" />
			<div className="flex overflow-hidden relative h-full">
				<aside
					className={cn(
						'w-[300px] h-full bg-[#F3FFF6] border-slate-200 p-5 absolute md:static flex flex-col gap-y-2 transition-all duration-300 ease-in-out overflow-y-auto',
						{
							'-left-[300px]': !mobileMenu,
							'-left-[0px] w-full md:w-[300px]': mobileMenu,
						}
					)}
				>
					<div className="mb-5">
						<h1 className="px-6 text-sm mb-2 text-slate-500">Menu</h1>
						{menus}
					</div>
				</aside>

				<main className="flex-1 p-5 overflow-y-auto">{children}</main>
			</div>
		</div>
	);
}
