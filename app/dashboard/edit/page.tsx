'use client'

import { useState } from 'react';
export default function EditProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Your Profile</h1>
        {/* Add this field inside your <form> tag */}
<div className="mb-8 flex flex-col items-center">
  <div className="w-24 h-24 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center mb-4 overflow-hidden">
    <span className="text-slate-400 text-xs">No Image</span>
  </div>
  <label className="cursor-pointer bg-white px-3 py-1.5 border border-slate-300 rounded-md text-xs font-semibold text-slate-700 hover:bg-slate-50">
    Change Photo
    <input type="file" name="profileImage" className="hidden" accept="image/*" />
  </label>
</div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
            <input 
              type="text" 
              defaultValue="Mushfiq Rahman"
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Headline</label>
            <input 
              type="text" 
              defaultValue="Founder & CEO, FASToll | BBA Student at NSU"
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
            <textarea 
              rows={4}
              defaultValue="Senior MIS student focusing on smart city solutions and automated parking."
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <button type="button" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}