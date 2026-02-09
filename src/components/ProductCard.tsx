import { useMemo, useState } from 'react'
import '../styles/ProductCard.css'

type ColorKey = 'black' | 'pink' | 'hot-pink' | 'red' | 'red-heart' | 'blue' | 'sky-blue' | 'purple' | 'olive-green' | 'grey' | 'navy-blue' | 'orange' | 'burnt-orange'

const BASE_COLORS: Array<{ key: ColorKey; label: string; swatch: string }> = [
	{ key: 'black', label: 'Black', swatch: '#111827' },
	{ key: 'pink', label: 'Pink', swatch: '#f472b6' },
	{ key: 'hot-pink', label: 'Hot Pink', swatch: '#ec4899' },
	{ key: 'red', label: 'Red', swatch: '#ef4444' },
	{ key: 'red-heart', label: 'Red Heart', swatch: '#dc2626' },
	{ key: 'blue', label: 'Blue', swatch: '#3b82f6' },
	{ key: 'sky-blue', label: 'Sky Blue', swatch: '#0ea5e9' },
	{ key: 'purple', label: 'Purple', swatch: '#a855f7' },
	{ key: 'olive-green', label: 'Olive Green', swatch: '#657D3E' },
	{ key: 'grey', label: 'Grey', swatch: '#9ca3af' },
	{ key: 'navy-blue', label: 'Navy Blue', swatch: '#1E3A8A' },
	{ key: 'orange', label: 'Orange', swatch: '#F97316' },
	{ key: 'burnt-orange', label: 'Burnt Orange', swatch: '#C2410C' },
]

export interface ProductCardProps {
	title: string
	price: number | string
	imagesByColor: Partial<Record<ColorKey, string>>
	sku?: string
	onAddToCart?: (payload: { title: string; color: ColorKey; price: number | string; sku?: string }) => void
}

export default function ProductCard({ title, price, imagesByColor, sku, onAddToCart }: ProductCardProps) {
	const initialColor = useMemo(() => {
		for (const c of BASE_COLORS) {
			if (imagesByColor[c.key]) return c.key
		}
		return BASE_COLORS[0].key
	}, [imagesByColor])

	const [selectedColor, setSelectedColor] = useState<ColorKey>(initialColor)

	const currentImage = imagesByColor[selectedColor]
	const isOutOfStock = !currentImage

	const handleAdd = () => {
		if (isOutOfStock) return
		onAddToCart?.({ title, color: selectedColor, price, sku })
	}

	return (
		<article className="product-card">
			<div className="product-card__media">
				{currentImage ? (
					<img className="product-card__img" src={currentImage} alt={`${title} - ${selectedColor}`} />
				) : (
					<div className="product-card__img product-card__img--placeholder">
						<span>Out of stock</span>
					</div>
				)}
			</div>

			<div className="product-card__info">
				<h3 className="product-card__title">{title}</h3>
				<div className="product-card__price">
					{typeof price === 'number' ? `$${price.toFixed(2)}` : price}
				</div>

				<div className="product-card__colors" aria-label="Select color">
					{BASE_COLORS.map(({ key, label, swatch }) => {
						const available = Boolean(imagesByColor[key])
						const active = selectedColor === key
						return (
							<button
								key={key}
								type="button"
								className={[
									'product-card__swatch',
									active ? 'is-active' : '',
									available ? '' : 'is-disabled',
								].join(' ')}
								style={{ backgroundColor: swatch }}
								aria-pressed={active}
								aria-label={label + (available ? '' : ' (out of stock)')}
								onClick={() => setSelectedColor(key)}
							>
								<span className="product-card__swatch-label">{label}</span>
							</button>
						)
					})}
				</div>

				<div className="product-card__actions">
					<button
						type="button"
						className="product-card__add"
						onClick={handleAdd}
						disabled={isOutOfStock}
					>
						<span className="product-card__add-emoji" aria-hidden>
							🛒
						</span>
						<span>Add to cart</span>
					</button>
				</div>
			</div>
		</article>
	)
}
