import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Nike Shose",
      price: "$95",
      rating: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaVwWfZJnlbMigSi3RGnD17X6NgwbZM4Dbg&s", // Replace with actual image paths
    },
    {
      id: 2,
      name: "Shose 2",
      price: "$95",
      rating: 4,
      image: "https://static-01.daraz.com.np/p/4cb3b3f555231ea469bb462f3cfedade.jpg",
    },
    {
      id: 3,
      name: "Shose 3",
      price: "$75",
      rating: 3,
      discount: "50% off",
      image: "https://www.jimkiddsports.com.au/cdn/shop/files/SHOPIFY_0000s_0000_SHOPIFY_0000s_0009_HQ1307_1_FOOTWEAR_Photography_SideLateralCenterView_transparent.png?v=1730704703&width=550",
    },
    {
      id: 4,
      name: "Shose 4",
      price: "$105",
      rating: 5,
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681226143-Lite_Racer_Adapt_5.0_Shoes_Black_GW9038_01_standard.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
    },
    {
      id: 5,
      name: "Chuck II Shield Canvas Boot",
      price: "$85",
      rating: 4,
      image: "",
    },
    {
      id: 6,
      name: "Chuck II Backed Leather Boot",
      price: "$120",
      rating: 5,
      image: "https://converse.ca/media/catalog/product/cache/8a83d9013ba02540917c133bb531f2f3/1/5/153571c_001_a_prem_2nd.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Product Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
            </div>
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <p className="mt-2 text-sm text-gray-700">
              Rating: {product.rating}/5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
