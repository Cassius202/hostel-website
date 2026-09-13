import {
  LayoutDashboard,
  Users,
  Clock,
  BedDouble,
  Receipt,
  type LucideIcon,
} from 'lucide-react'

interface AdminLink {
  name: string
  href: string
  icon: LucideIcon
  badge?: number // e.g pending count — pass dynamically later
}

export const adminLinks: AdminLink[] = [
  { name: 'Overview',         href: '/admin',                  icon: LayoutDashboard },
  { name: 'Pending Approvals',href: '/admin/pending',          icon: Clock           },
  { name: 'Tenants',          href: '/admin/tenants',          icon: Users           },
  { name: 'Rooms',            href: '/admin/rooms',            icon: BedDouble       },
  { name: 'Payments',         href: '/admin/payments',         icon: Receipt         },

]