import { Link } from "@/components/navigation/Link"

export function HeaderNav() {
  return (
    <header>
      <div className="container flex items-center justify-between py-6 mx-auto">
        <Link href="/" className="text-2xl font-semibold no-underline">
          WebFirst Engineering
        </Link>
        <Link
          href="/"
          className="hover:text-blue-600"
        >
          Blog
        </Link>
      </div>
    </header>
  )
}
