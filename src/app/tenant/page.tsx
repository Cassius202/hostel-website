import { Header } from "./Header"
import { mockUser } from "@/constants/tenantAssets"
import { BedDouble, Calendar, CheckCircle, Wrench, Bell, CreditCard } from "lucide-react"

const stats = [
  { label: "Room", value: `${mockUser.block}-${mockUser.roomNumber}`, icon: BedDouble },
  { label: "Room Type", value: mockUser.roomType, icon: BedDouble },
  { label: "Due Date", value: mockUser.dueDate, icon: Calendar },
  { label: "Payment", value: mockUser.paymentStatus, icon: CreditCard },
]

const paymentHistory = [
  { id: 1, description: "2024/2025 Hostel Fee", amount: "₦200,000", date: "1st Sept, 2024", status: "paid" },
  { id: 2, description: "2025/2026 Hostel Fee", amount: "₦200,000", date: "1st Sept, 2025", status: "paid" },
]

const announcements = [
  { id: 1, title: "Water Outage", body: "There will be no water supply on Saturday 22nd March from 8am - 4pm.", date: "19 Mar" },
  { id: 2, title: "Room Inspection", body: "Routine room inspection scheduled for Friday 21st March.", date: "18 Mar" },
]

const Dashboard = () => {
  return (
    <div className="min-h-svh bg-white dark:bg-zinc-900 slate:bg-slate-900">
      <Header />
      <div className="px-6 py-8 space-y-8">

        {/* welcome */}
        <div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 slate:text-slate-500">Good morning,</p>
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100">
            {mockUser.preferredName} 👋
          </h1>
        </div>

        {/* quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-zinc-100 dark:border-zinc-800 slate:border-slate-800 bg-white dark:bg-zinc-800/50 slate:bg-slate-800/50 p-4">
              <p className="text-xs text-zinc-400 dark:text-zinc-500 slate:text-slate-500 mb-1">{stat.label}</p>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100 capitalize">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* payment status */}
          <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 slate:border-slate-800 bg-white dark:bg-zinc-800/50 slate:bg-slate-800/50 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100">Payment Status</h2>
              <span className={`text-xs px-2 py-1 rounded-full font-medium
                ${mockUser.paymentStatus === "paid"
                  ? "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 slate:bg-green-900/30 slate:text-green-400"
                  : mockUser.paymentStatus === "owing"
                  ? "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 slate:bg-red-900/30 slate:text-red-400"
                  : "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 slate:bg-yellow-900/30 slate:text-yellow-400"
                }`}>
                {mockUser.paymentStatus}
              </span>
            </div>
            {mockUser.paymentStatus === "paid" ? (
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle size={16} />
                <p className="text-sm">All fees cleared. You're good!</p>
              </div>
            ) : (
              <>
                <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 slate:text-slate-100">
                  ₦{mockUser.amountOwing.toLocaleString()}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 slate:text-slate-500 mt-1">outstanding balance</p>
                <button className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                  Pay Now
                </button>
              </>
            )}
          </div>

          {/* announcements */}
          <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 slate:border-slate-800 bg-white dark:bg-zinc-800/50 slate:bg-slate-800/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Bell size={14} className="text-zinc-400 dark:text-zinc-500" />
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100">Announcements</h2>
            </div>
            <div className="space-y-4">
              {announcements.map((a) => (
                <div key={a.id} className="flex justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 slate:text-slate-200">{a.title}</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 slate:text-slate-500 mt-0.5">{a.body}</p>
                  </div>
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 slate:text-slate-600 shrink-0">{a.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* payment history */}
        <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 slate:border-slate-800 bg-white dark:bg-zinc-800/50 slate:bg-slate-800/50 p-5">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard size={14} className="text-zinc-400 dark:text-zinc-500" />
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100">Payment History</h2>
          </div>
          <div className="space-y-3">
            {paymentHistory.map((p) => (
              <div key={p.id} className="flex items-center justify-between py-2 border-b border-zinc-50 dark:border-zinc-800 slate:border-slate-800 last:border-0">
                <div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-200 slate:text-slate-200">{p.description}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 slate:text-slate-500">{p.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100 slate:text-slate-100">{p.amount}</p>
                  <span className="text-xs text-green-500">paid</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* maintenance */}
        <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 slate:border-slate-800 bg-white dark:bg-zinc-800/50 slate:bg-slate-800/50 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Wrench size={14} className="text-zinc-400 dark:text-zinc-500" />
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 slate:text-slate-100">Maintenance</h2>
            </div>
            <button className="text-xs text-blue-500 hover:underline">+ New Request</button>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 slate:text-slate-500">No active maintenance requests.</p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard