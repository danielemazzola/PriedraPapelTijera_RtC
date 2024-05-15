export const fruits = [
  {
    id: 1,
    name: 'Apple',
    figure: '🍎'
  },
  {
    id: 2,
    name: 'Orange',
    figure: '🍊'
  },
  {
    id: 3,
    name: 'Banana',
    figure: '🍌'
  },
  {
    id: 4,
    name: 'Grapes',
    figure: '🍇'
  },
  {
    id: 5,
    name: 'Strawberry',
    figure: '🍓'
  },
  {
    id: 6,
    name: 'Pineapple',
    figure: '🍍'
  },
  {
    id: 7,
    name: 'Watermelon',
    figure: '🍉'
  },
  {
    id: 8,
    name: 'Cherry',
    figure: '🍒'
  },
  {
    id: 9,
    name: 'Pear',
    figure: '🍐'
  },
  {
    id: 10,
    name: 'Lemon',
    figure: '🍋'
  }
]
export const randomFruit = (fruits, numOptions) => {
  const fruitsCopy = [...fruits]
  const randomIndex = Math.floor(Math.random() * fruitsCopy.length)
  const selectedFruit = fruitsCopy[randomIndex]
  fruitsCopy.splice(randomIndex, 1)
  const options = [selectedFruit]

  while (options.length < numOptions) {
    const randomIndex = Math.floor(Math.random() * fruitsCopy.length)
    const additionalFruit = fruitsCopy[randomIndex]
    if (!options.some((fruit) => fruit.id === additionalFruit.id)) {
      options.push(additionalFruit)
    }
    fruitsCopy.splice(randomIndex, 1)
  }
  options.sort(() => Math.random() - 0.5)
  return {
    selectedFruit,
    options
  }
}
export const DELETE = () => {
  document.querySelector('main').remove()
  document.querySelector('header').remove()
}
