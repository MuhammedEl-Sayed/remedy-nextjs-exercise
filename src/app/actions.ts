"use server";

export async function getVariants() {
	return {
		ProductCard: Math.random() > 0.5 ? "A" : "B",
	};
}

// ------------------------------------

const colors = ["Red", "Green", "Blue", "Purple"];
const items = ["Needle", "Yarn", "Bowl", "Knife"];
const adjectives = ["Rusty", "Old", "Curved", "Broken"];

const numProducts = 15;

export async function getStock() {
	const stock: Product[] = [];

	for (let i = 0; i < numProducts + 1; i++) {
		const numColors = getRandomValue();
		const randomColors: string[] = [];
		for (let i = 0; i < numColors; i++) {
			randomColors.push(colors[getRandomValue()]);
		}

		const name = `${adjectives[getRandomValue()]} ${items[getRandomValue()]}`;

		const priceSeed = getRandomValue(150);
		const price = priceSeed === 0 ? 1 : priceSeed;
		stock.push({
			name: name,
			colors: colors,
			description: `${name} is one of our most popular products!`,
			price: price,
		});
	}

	return stock;
}

function getRandomValue(v = 4) {
	return Math.floor(Math.random() * v);
}
