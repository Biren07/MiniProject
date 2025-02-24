'use client'
const Square = ({value,onHandleClick}) => {

  return (
      <button className='m-1 w-20 h-20 rounded-sm bg-red-400  justify-center items-center'onClick={onHandleClick}>{value}
      </button>
  )
}

export default Square