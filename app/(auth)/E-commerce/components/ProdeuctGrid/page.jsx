import ProductCard from '../ProdeuctCard/page'

const products = [
 { id: 1, name: 'iPhone 15', price: 29.99, image: 'https://iplanet.one/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN_dd67c045-7eab-42df-8594-221b12345acd.jpg?v=1695428778&width=1445' },
  { id: 2, name: 'iPhone 16 Pro Max', price: 39.99, image: 'https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_White_Titanium_TH_1_1ac3f824-7153-43b1-8211-a2f67cdd5e68.jpg?v=1725929670' },
  { id: 3, name: 'iPhone 16 Plus', price: 49.99, image: 'https://media.very.co.uk/i/very/W57JY_SQ1_0000000063_PINK_SLf?$pdp_300x400_x2$&fmt=jpg' },
  { id: 4, name: 'iPhone 14', price: 25.99, image: 'https://itechstore.com.np/_ipx/f_webp/img/product/variants/351a6536-fb18-479a-938f-85c166d2b239/iphone-14-blue-main.png' },
  { id: 5, name: 'iPhone 13 Mini', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSSx4Xd0JjsdrpDX-F68aCWMYY3O_uvQijQ&s' },
  { id: 6, name: 'One plus nord ce 3 lite', price: 8.99, image: 'https://mobilebuzzbd.com/wp-content/uploads/2023/12/OnePlus-Nord-CE3-Lite.jpg' },
  { id: 7, name: 'Samsung note 20 ultra', price: 17.99, image: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-Note-20-Ultra-128GB-Black-Unlocked_bb763bf7-6e2d-4f1f-a90f-2641e3d1900a.900d1bd76cad5587629c065bf4b907ad.jpeg' },
  { id: 8, name: 'Poco x6 pro 5g', price: 15.99, image: 'https://i5.walmartimages.com/seo/Xiaomi-Poco-X6-PRO-5G-4G-LTE-Global-Unlocked-256GB-8GB-GSM-6-67-64MP-Triple-Camera-Tmobile-Mint-Tello-Global-Black-Global-ROM_dc2c4df6-205c-40ea-baf2-7efac1a6ecbe.ed0debfe41166755df30e638a419ee4a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },
  { id: 9, name: 'Infinix GT 20 pro', price: 14.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSnwR31HBRVWuVbgVM1Z6Cmei-8_rviLsnA&s' },
   { id: 10, name: 'Tecno spark 10', price: 14.99, image: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/spark10/black.png' },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}