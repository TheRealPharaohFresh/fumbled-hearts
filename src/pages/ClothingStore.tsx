import '../styles/ClothingStore.css'
import bgImage from '../assets/Fumbled hearts on a brick wall.png'
import pinkJacket from '../assets/FumbledHeartsTops/FumbledHeartsPinkJacketFront.PNG'
import grayTracksuit from '../assets/FumbledHeartsTrackSuits/Women/FumbledHeartsTrackSuitGray(Women).PNG'
import greenTracksuit from '../assets/FumbledHeartsTrackSuits/Women/FumbledHeartsTrackSuitGreen(Women).PNG'
import pinkTracksuit from '../assets/FumbledHeartsTrackSuits/Women/FumbledHeartsTrackSuitPink(Women).PNG'
import blackhoodie from '../assets/FumbledHeartsTops/Hoodies/BlackFront.PNG'
import navybluehoodie from '../assets/FumbledHeartsTops/Hoodies/NavyBlueFront.PNG'
import orangehoodie from '../assets/FumbledHeartsTops/Hoodies/OrangeFront.PNG'
import blackhoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2BlackFront.PNG'
import bluehoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2BlueFront.PNG'
import greyhoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2GreyFront.PNG'
import pinkhoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2PinkFront.PNG'
import hotpinkhoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2HotPinkFront.PNG'
import navybluehoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2NavyBlueFront.PNG'
import redhearthoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2RedHeartFront.PNG'
import orangehoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2OrangeFront.PNG'
import skybluehoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2SkyBlueFront.JPG'
import purplehoodie2 from '../assets/FumbledHeartsTops/Hoodies 2/Hoodie2PurpleFront.PNG'
import bluetshirt from '../assets/FumbledHeartsTops/T-Shirts/BlueTShirtFront.PNG'
import blacktshirt from '../assets/FumbledHeartsTops/T-Shirts/BlackTShirtFront.PNG'
import burntorangetshirt from '../assets/FumbledHeartsTops/T-Shirts/BurntOrangeTShirtFront.PNG'
import greentshirt from '../assets/FumbledHeartsTops/T-Shirts/GreenTShirtFront.PNG'
import pinktshirt from '../assets/FumbledHeartsTops/T-Shirts/PinkTShirtFront.PNG'
import purpletshirt from '../assets/FumbledHeartsTops/T-Shirts/PurpleTShirtFront.PNG'

import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'

export default function ClothingStore() {
  const { addItem } = useCart()

  const handleAddToCart = ({ title, color, price, sku }: { title: string; color: string; price: number | string; sku?: string }) => {
    // Find the image for the selected color
    const product = sampleProducts.find(p => p.title === title)
    const image = product?.imagesByColor[color as keyof typeof product.imagesByColor]
    
    if (image) {
      addItem({
        title,
        color,
        price: typeof price === 'string' ? parseFloat(price.replace('$', '')) : price,
        image,
        sku,
      })
    }
  }

  // Example product data. Replace images with real color-specific assets when available.
  const sampleProducts = [
    {
      id: 'jacket-001',
      title: 'Fumbled Hearts Jacket',
      price: 70.0,
      imagesByColor: {
        'black': undefined,
        'pink': pinkJacket,
        'red': undefined,
        'blue': undefined,
        'olive-green': undefined,
        'grey': undefined,
      },
    },
    {
      id: 'womentracksuit-001',
      title: 'Fumbled Hearts Track (Women)',
      price: 80,
      imagesByColor: {
        'black': undefined,
        'pink': pinkTracksuit,
        'red': undefined,
        'blue': undefined,
        'olive-green': greenTracksuit,
        'grey': grayTracksuit,
      },
    },
    {
      id: 't-shirts-001',
      title: 'Fumbled Hearts T-Shirts',
      price: 25,
      imagesByColor: {
        'black': blacktshirt,
        'pink': pinktshirt,
        'burnt-orange': burntorangetshirt,
        'blue': bluetshirt,
        'olive-green': greentshirt,
        'purple': purpletshirt,
      },
    },
    {
      id: 'hoodies-001',
      title: 'Fumbled Hearts Hoodies',
      price: 40,
      imagesByColor: {
        'black': blackhoodie,
        'pink': undefined,
        'red': undefined,
        'blue': undefined,
        'olive-green': undefined,
        'grey': undefined,
        'navy-blue': navybluehoodie,
        'orange': orangehoodie,
      },
    },
    {
      id: 'hoodies-002',
      title: 'Fumbled Hearts Hoodies Volume 2',
      price: 40,
      imagesByColor: {
        'black': blackhoodie2,
        'pink': pinkhoodie2,
        'hot-pink': hotpinkhoodie2,
        'red-heart': redhearthoodie2,
        'blue': bluehoodie2,
        'sky-blue': skybluehoodie2,
        'purple': purplehoodie2,
        'grey': greyhoodie2,
        'navy-blue': navybluehoodie2,
        'orange': orangehoodie2,
      },
    },
  ]

  return (
    <section className="store" aria-label="Clothing Store">
      <div className="store__backdrop" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="store__overlay" />

      <div className="store__content">
        <h1 className="store__heading">Fumbled Hearts Collection</h1>
        <div className="store__grid">
          {sampleProducts.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              imagesByColor={p.imagesByColor}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
