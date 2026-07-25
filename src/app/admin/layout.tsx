import { cookies } from 'next/headers'
import { AdminLoginForm } from './AdminLoginForm'

export const metadata = { title: 'Admin · Purlieu Management', robots: 'noindex,nofollow' }

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin-token')?.value
  const isAuth = !!token && token === process.env.ADMIN_PASSWORD

  if (!isAuth) {
    return <AdminLoginForm />
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {children}
    </div>
  )
}
