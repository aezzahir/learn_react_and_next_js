import { plantList } from '../datas/plantList'
import CareScale from './CareScale'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name} {plant.category === 'classique'? <span>🌿</span> : plant.category === 'extérieur'? <span> 🏝</span>: <span>🌵</span>} 
					<CareScale careType='water' scaleValue={plant.water} />
					<CareScale careType='light' scaleValue={plant.light} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList