import { plantList } from '../datas/plantList'

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
					<li key={plant.id}>{plant.name} {plant.category === 'classique'? <span>🌿</span> : plant.category === 'extérieur'? <span>🪴</span>: <span>🌵</span>} </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList