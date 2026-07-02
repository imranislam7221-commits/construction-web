'use client'

export default function IndustrialMarquee() {
  const alerts = [
    "CAUTION: HEAVY MACHINERY IN PROGRESS",
    "MOU CONSTRUCTION // EST. 2011",
    "IRON BACKBONE OF INFRASTRUCTURE",
    "OPERATIONAL STATUS: PEAK PERFORMANCE",
    "MEGA PROJECTS UNDERWAY // 2026",
    "ISO 9001:2015 CERTIFIED",
  ]

  return (
    <div
      className="h-14 bg-caution border-y-4 border-black flex items-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="whitespace-nowrap flex gap-20 animate-marquee">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-20">
            {alerts.map((alert) => (
              <span key={alert} className="text-black text-heavy text-2xl italic">
                {alert}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
