import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Universal Profile Engine
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          Your centralized hub for managing your digital identity and showcasing your work.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <Link 
            href="/login" 
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            Log In
          </Link>
          
          <Link 
            href="/register" 
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Create Profile
          </Link>
        </div>
        {/* END OF REPLACEMENT */}

      </div>
    </main>
  );
}