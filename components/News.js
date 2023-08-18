import { useState, useEffect } from 'react'
import axios from 'axios'
import NewBox from './NewBox'

function News({maxItems}) {
const [news, setNews] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews() {
    axios.get('api/news').then((response) => {
      setNews(response.data.reverse())
    })
  }

  const visibleNews = news.slice(0, maxItems);

  return (
        <div className='flex flex-col w-full xl:w-3/4 lg:mx-auto'>
          <div className='flexContainer'>
              {visibleNews.map((n) => (
                <NewBox key={n._id} oneNew={n}/>
              ))}
          </div>
        </div>
   
  )
}

export default News