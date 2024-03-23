import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "nextjs about page",
  description: "nextjs is a very powerfull framework"
}

const layout = ({children}) => {
  return (
    <div>
      <nav>
      <ul className="flex gap-6">
           <li><Link href="/about/mission">Mission</Link></li> 
            <Link href='/about/vission'><li>vission</li></Link>
          </ul>
        </nav>
      {children}
    </div>
  )
}

export default layout
