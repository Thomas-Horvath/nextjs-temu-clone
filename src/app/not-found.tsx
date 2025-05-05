import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Nincs ilyen oldal!</h2>
      <Link href="/">Home</Link>
    </div>
  )
}