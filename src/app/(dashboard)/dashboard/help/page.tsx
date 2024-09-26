import HelpChat from '@/components/help/help_chat';

export default function Page() {
  return (
    <>
      <main className="lg:px-16 lg:pt-16">
        {/* heading  */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <p className="text-lg lg:text-xl text-center">
            Hello,{' '}
            <span className="text-primary font-semibold">Abtahi Noor</span>
          </p>
          <h1 className="font-semibold text-2xl lg:text-5xl text-slate-400 opacity-70">
            How can I help you today ?
          </h1>
        </div>

        {/* chat area  */}
        <div>
          <HelpChat />
        </div>
      </main>
    </>
  );
}
