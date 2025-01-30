import React from 'react'
import Link from 'next/link'
const Sidenav = () => {
    const navItem =['Chat','status','Channel','More'];
  return (
    <div>{
        navItem.map((item)=>{
            return <Link href={`/${item}`} className='bg-gray-200 p-2 m-2 rounded-lg hover:bg-gray-300'>{item}</Link>
        
        })
    }</div>
  )
}

export default Sidenav