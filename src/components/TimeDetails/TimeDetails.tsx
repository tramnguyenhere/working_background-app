import React, { useEffect, useState } from 'react'

import './TimeDetails.scss'

import { dayOfWeek, greeting,shortDate } from '../../utils/utils'
import axios from 'axios'

const TimeDetails = () => {
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    useEffect(() => {

        // Fetching How I met your mother series' quotes
        axios.get("https://gist.githubusercontent.com/inescoelho/4a2e848480d2026121f8d5c600ee3c66/raw/f2d2d3dab0d5aded5686b462dcfad7028116e693/HIMYM_quotes.json")
            .then(response => {
                
                // Get random quote
                const quote = response.data.quotes[Math.floor(Math.random() * response.data.quotes.length)]
                setQuote(quote.text)
                setAuthor(quote.name)
        })
        .catch(error => {
            console.log(error);
        });
    },[])


  return (
      <div className='time-details__wrapper'>
          <span className='time-details' id='time-details__greeting'>
              {/* Greeting based on time of the day */}
            {greeting()} 
        </span>
        <span className='time-details' id='time-details__date'>
            It's {dayOfWeek()} {shortDate}
        </span>
        <span className='time-details' id='time-details__anecdote'>
            "{quote}"
        </span>
        <span className='time-details' id='time-details__author'>
            -{author}
        </span>
      </div>
  )
}

export default TimeDetails