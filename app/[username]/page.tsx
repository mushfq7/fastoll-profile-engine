import React from 'react';
export async function generateStaticParams() {
  // This allows the build to pass by pre-rendering a 'test' profile
  return [{ username: 'test' }];
}
export const dynamic = 'force-dynamic';
type Props = {
  params: Promise<{ username: string }>;
};

export default async function PublicProfile({ params }: Props) {
  const { username } = await params;

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6 text-slate-900">
      <div className="max-w-md w-full border border-slate-200 rounded-2xl p-8 shadow-2xl shadow-slate-200/50">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-slate-100 rounded-full mb-6 border-4 border-white shadow-md overflow-hidden flex items-center justify-center">
             <span className="text-4xl" role="img" aria-label="user profile">👤</span>
          </div>
          
          <h1 className="text-3xl font-bold capitalize">{username}</h1>
          <p className="text-blue-600 font-semibold mb-4 text-sm">Founder & CEO, FASToll</p>
          
          <div className="bg-slate-50 rounded-xl p-4 w-full mb-6 text-sm text-slate-600 leading-relaxed text-left">
            <p className="mb-2"><strong>Education:</strong> Senior MIS student at North South University (NSU).</p>
            <p><strong>Focus:</strong> Developing smart city solutions and automated parking systems using RFID and ANPR technology.</p>
          </div>

          <div className="flex gap-4 w-full">
            <button className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-all">
              Connect
            </button>
            <button className="flex-1 border border-slate-200 py-3 rounded-lg font-medium hover:bg-slate-50 transition-all text-slate-700">
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}