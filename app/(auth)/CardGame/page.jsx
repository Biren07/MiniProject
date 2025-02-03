'use client'
import React, { useEffect, useState } from 'react'

const cardOptions = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const faceValues = {
  'A': 13, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
  '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 11, 'K': 12
};

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)
  const [shuffledCards, setShuffledCards] = useState([])
  const [gameResult, setGameResult] = useState(null)

  useEffect(() => {

    setShuffledCards([...cardOptions].sort(() => Math.random() - 0.5))
  }, [])

  useEffect(() => {
    if (selectedCard !== null) {
      const timeout = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * cardOptions.length)
        const computerCard = cardOptions[randomIndex]
        setComputerSelection(computerCard)
        
        const userValue = faceValues[selectedCard]
        const computerValue = faceValues[computerCard]
        
        if (userValue > computerValue) setGameResult('win')
        else if (userValue < computerValue) setGameResult('lose')
        else setGameResult('draw')
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [selectedCard])

  const resetGame = () => {
    setSelectedCard(null)
    setComputerSelection(null)
    setGameResult(null)
    setShuffledCards([...cardOptions].sort(() => Math.random() - 0.5))
  }

  const getCardColor = (card) => {
    if (['Q', 'K', 'J', 'A'].includes(card)) return 'bg-red-500'
    return 'bg-blue-500'
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Card Battle Game
        </h1>

        {/* Player's Cards */}
        <div className="grid grid-cols-13 gap-2 mb-8">
          {shuffledCards.map((card, index) => (
            <button
              key={index}
              onClick={() => !computerSelection && setSelectedCard(card)}
              disabled={!!computerSelection}
              className={`
                rounded-lg p-2 text-center text-black font-bold shadow-lg
                transition-all duration-300 transform hover:scale-105
                ${getCardColor(card)}
                ${selectedCard === card ? 'ring-4 ring-yellow-400 scale-110' : ''}
                ${!computerSelection ? 'hover:bg-opacity-0 cursor-pointer' : 'opacity-50'}
              `}
            >
              <span className="text-lg">{card}</span>
            </button>
          ))}
        </div>

        {/* Results Section */}
        {computerSelection && (
          <div className="text-center mb-8">
            <div className="flex justify-center gap-8 mb-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-gray-600 mb-2">Your Card</h3>
                <div className={`${getCardColor(selectedCard)} text-white text-2xl w-16 h-24 rounded-lg flex items-center justify-center mx-auto`}>
                  {selectedCard}
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-gray-600 mb-2">Computer's Card</h3>
                <div className={`${getCardColor(computerSelection)} text-white text-2xl w-16 h-24 rounded-full flex items-center justify-center mx-auto`}>
                  {computerSelection}
                </div>
              </div>
            </div>

            {gameResult && (
              <div className="mb-6">
                <h2 className={`
                  text-3xl font-bold 
                  ${gameResult === 'win' ? 'text-green-600' : 
                    gameResult === 'lose' ? 'text-red-600' : 'text-yellow-600'}
                  animate-bounce
                `}>
                  {gameResult === 'win' && '🎉 You Won!'}
                  {gameResult === 'lose' && '😢 You Lost'}
                  {gameResult === 'draw' && '🤝 Draw!'}
                </h2>
                <p className="text-gray-600 mt-2">
                  ({faceValues[selectedCard]} vs {faceValues[computerSelection]})
                </p>
              </div>
            )}

            <button
              onClick={resetGame}
              className="bg-purple-500 text-white px-6 py-3 rounded-full
                hover:bg-purple-600 transition-colors shadow-lg
                font-semibold text-lg"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Game Instructions */}
        {!computerSelection && (
          <div className="text-center text-gray-600 mt-8">
            <p className="mb-2">Click on a card to select your choice</p>
            <div className="flex justify-center gap-2 text-sm">
              <span className="bg-red-500 text-white px-2 py-1 rounded">Face Cards</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded">Number Cards</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cards