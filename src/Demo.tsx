import Amis from './components/Amis'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Demo() {
  const [schema, setSchema] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('pathname', pathname)
        const response = await fetch(`${pathname}.json`)
        const data = await response.json()
        setSchema(data)
      } catch (error) {
        console.error('Error fetching schema:', error)
      }
    }

    fetchData()
  }, [pathname])

  return (
    <div className="relative flex flex-col h-screen">
      <header>
        <nav>
          <ul className="flex list-none space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/demo/docs">Docs</a>
            </li>
            <li>
              <a href="/demo/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="px-7">{schema && <Amis schema={schema} />}</main>
    </div>
  )
}
