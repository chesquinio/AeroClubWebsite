import { useState, useEffect } from 'react'
import axios from 'axios'
import NewBox from './NewBox'

function News() {
const [news, setNews] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews() {
    axios.get('api/news').then((response) => {
      setNews(response.data)
    })
  }

  return (
        <div className='flex flex-col'>
          <h2 className='text-white text-center mt-12 md:text-3xl md:mt-16 mb-1 font-light text-2xl'>Novedades del Club</h2>
          <div className='flexContainer'>
              {news.map((n) => (
                <NewBox key={n._id} oneNew={n}/>
              ))}
          </div>
        </div>
   
  )
}

export default News