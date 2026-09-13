import { CheckCircle, XCircle, Clock } from "lucide-react"
import { createClient } from "@/utils/supabase/server"
import { approveTenant, rejectTenant } from "@/app/admin/actions"

const PendingPage = async () => {
  const supabase = await createClient()

  const { data } = await supabase
    .from('profiles')
    .select('id, first_name, last_name, email, room_number, matric, created_at')
    .eq('status', 'pending')
    .order('created_at', { ascending: true })

  const profilesPendingApproval = data ?? []
  return (
    <div className="min-h-svh bg-zinc-950 p-6 max-lg:pt-18">

      {/* header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Clock size={16} className="text-green-500" />
          <h1 className="text-lg font-semibold text-zinc-100 font-sans">Pending Approvals</h1>
          <span className="ml-1 text-xs bg-green-600 text-white font-sans font-medium px-2 py-0.5 rounded-full">
            {profilesPendingApproval.length}
          </span>
        </div>
        <p className="text-xs text-zinc-500 font-sans">
          Review and verify tenants against hostel records before granting access.
        </p>
      </div>

      {/* table */}
      {profilesPendingApproval.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-zinc-600">
          <CheckCircle size={32} strokeWidth={1.5} className="mb-3" />
          <p className="font-sans text-sm">All caught up — no pending approvals.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-zinc-800 overflow-hidden">
          {/* table head */}
          <div className="grid grid-cols-[1fr_1fr_80px_80px_160px] bg-zinc-900 px-4 py-3 border-b border-zinc-800">
            {['Name', 'Email', 'Room', 'Matric', 'Actions'].map((h) => (
              <p key={h} className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans">
                {h}
              </p>
            ))}
          </div>

          {/* rows */}
          {profilesPendingApproval.map((tenant, i) => (
            <div
              key={tenant.id}
              className={`grid grid-cols-[1fr_1fr_80px_80px_160px] items-center px-4 py-4 gap-2
                ${i !== profilesPendingApproval.length - 1 ? 'border-b border-zinc-800/60' : ''}
                hover:bg-zinc-900/50 transition-colors`}
            >
              {/* name */}
              <div>
                <p className="text-sm font-medium text-zinc-100 font-sans">
                  {tenant.first_name} {tenant.last_name}
                </p>
                <p className="text-[10px] text-zinc-500 font-sans">
                  {new Date(tenant.created_at).toLocaleDateString('en-NG', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}
                </p>
              </div>

              {/* email */}
              <p className="text-xs text-zinc-400 font-sans truncate">{tenant.email}</p>

              {/* room — alphanumeric e.g A4, B20 */}
              <p className="text-sm font-mono text-zinc-300 uppercase">{tenant.room_number}</p>

              {/* matric */}
              <p className="text-xs font-mono text-zinc-400">{tenant.matric}</p>

              {/* actions */}
              <div className="flex items-center gap-2">
                <form action={approveTenant}>
                  <input type="hidden" name="id" value={tenant.id} />
                  <button type="submit" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-600/20 text-emerald-400 text-xs font-sans transition-colors">
                    <CheckCircle size={13} />
                    Approve
                  </button>
                </form>
                <form action={rejectTenant}>
                  <input type="hidden" name="id" value={tenant.id} />
                  <button type="submit" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/10 hover:bg-red-600/20 border border-red-600/20 text-red-400 text-xs font-sans transition-colors">
                    <XCircle size={13} />
                    Reject
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PendingPage