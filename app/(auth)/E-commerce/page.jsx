import Head from 'next/head'
import Navbar from './components/Navbar/page'
import ProductGrid from './components/ProdeuctGrid/page'
import Footer from './components/Footer/page'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>E-Commerce Store</title>
        <meta name="description" content="Modern E-Commerce Platform" />
      </Head>

      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gray-100 rounded-lg p-8 my-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Welcome to Our Store
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover amazing products at great prices
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"></div>
        <ProductGrid />
      </main>

      <Footer />
    </div>
  )
}