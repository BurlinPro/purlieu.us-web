import Image from 'next/image'
import Link from 'next/link'

interface PurlieuLogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export function PurlieuLogo({
  variant = 'dark',
  size = 'md',
  href = '/',
}: PurlieuLogoProps) {
  const heights = { sm: 28, md: 36, lg: 48 }
  const h = heights[size]
  const w = Math.round(h * 0.65)

  const wordmarkClass =
    variant === 'light'
      ? 'text-white'
      : 'text-navy'

  const subClass =
    variant === 'light'
      ? 'text-white/60'
      : 'text-navy/50'

  const logo = (
    <span className="flex items-center gap-2.5 select-none">
      <Image
        src="/images/logo-mark.jpg"
        alt="Purlieu P mark"
        width={w}
        height={h}
        className="object-contain"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-widest uppercase ${wordmarkClass}`}
          style={{ fontSize: h * 0.55 }}
        >
          Purlieu
        </span>
        <span
          className={`font-sans font-medium tracking-[0.2em] uppercase ${subClass}`}
          style={{ fontSize: h * 0.28 }}
        >
          Management
        </span>
      </span>
    </span>
  )

  return href ? (
    <Link href={href} aria-label="Purlieu Management — home">
      {logo}
    </Link>
  ) : (
    logo
  )
}
