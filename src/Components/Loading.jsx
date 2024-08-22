import React from 'react'

const Loading = () => {
  return (
    <div className='loading'>
      <div>
        <img decoding='async' fetchpriority='high' width='110px' height='110px' src={import.meta.env.BASE_URL + "/loading-img.svg"} alt="" />
        <div className="load-text">
            <p>Finding Your Dream Home . . .</p>
            <span>One moment while we open the door to your next adventure.</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
