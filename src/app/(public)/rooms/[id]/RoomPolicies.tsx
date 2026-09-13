export default function RoomPolicies() {
  return (
    <div className="global-padding max-w-6xl flex flex-col gap-8">

      {/* Accessibility */}
      <div>
        <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">Accessibility</h2>
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col gap-3">
          {[
            "Step-free access at the main entrance with gated entry for tenants using hostel cards or branded room keys",
            "Well-lit common areas and corridors throughout the building",
            "Support available from on-site property staff on request",
            "Nearby transport options — contact us for specific needs",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400">
              <span className="mt-1.5 size-1.5 rounded-full bg-rose-400 shrink-0" />
              {item}
            </div>
          ))}
          <p className="text-xs text-stone-400 mt-2 pt-3 border-t border-stone-100 dark:border-stone-800">
            Features vary by room type. Please contact us to confirm specific accessibility requirements before booking.
          </p>
        </div>
      </div>

      {/* Disciplinary */}
      <div>
        <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">Disciplinary Measures & Tenancy</h2>
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col gap-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            Residents are expected to follow hostel rules. Violations may result in actions such as warnings, fines, suspension, or eviction, depending on the severity. Management will take reasonable steps to maintain a safe and peaceful environment.
          </p>
          <p>
            Residents should vacate the hostel at the end of their rental period, unless an extension has been approved.
          </p>
        </div>
      </div>

    </div>
  )
}