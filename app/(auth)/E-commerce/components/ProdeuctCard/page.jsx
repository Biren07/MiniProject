export default function ProductCard({ product }) {
  return (
    <div className="bg-gray-300 border-solid border-2 border-gray-400 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-50 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-yellow-300 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}