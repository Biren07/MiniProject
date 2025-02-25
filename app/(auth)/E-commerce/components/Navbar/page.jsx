import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-pink-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Dhami-Shop
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-800">
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}