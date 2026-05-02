import Link from 'next/link';
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">User Dashboard</h1>
          <button className="text-sm font-medium text-red-600 hover:text-red-500">
            Sign Out
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Sidebar */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-bold text-center">Mushfiq Rahman</h2>
            <p className="text-slate-500 text-sm text-center">Founder & CEO, FASToll</p>
            <Link 
  href="/dashboard/edit" 
  className="mt-4 block text-center w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors"
>
  EDIT PROFILE
</Link>
         
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase">Bio</label>
                <p className="text-slate-700">Senior MIS student at NSU. Restaurant hunter and coffee lover.</p>
              </div>
              {/* We will add the edit form here next! */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}