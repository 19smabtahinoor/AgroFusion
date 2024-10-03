'use client';
import HelpChat from '@/components/help/help_chat';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const { data } = useSession();
  const { user } = data || {};
  const searchParam = useSearchParams();

  const ask = searchParam.get('ask');
  console.log("🚀 ~ Page ~ ask:", ask);

  return (
    <>
      <main className="lg:px-16 lg:pt-16">
        {/* heading  */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <p className="text-lg lg:text-xl text-center">
            Hello,{' '}
            <span className="text-primary font-semibold">{user?.name}</span>
          </p>
          <h1 className="font-semibold text-2xl lg:text-5xl text-slate-400 opacity-70">
            How can I help you today ?
          </h1>
        </div>

        {/* chat area  */}
        <div>
          <HelpChat ask={ask || ""} />
        </div>
      </main>
    </>
  );
}
