/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react'
import './AnimatedText.css'

const AnimatedText = ({ text }) => {
  const [hovered, setovered] = useState(false)

  useEffect(() => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    const element = document.getElementById('channel-link')
    text = element?.innerText.split('')
    element.innerText = ''
    text.forEach((value, index) => {
      const outer = document.createElement('span')
      outer.className = 'outer'
      const inner = document.createElement('span')
      inner.className = 'inner'
      inner.style.animationDelay = `${rand(-5000, 0)}ms`
      const letter = document.createElement('span')
      letter.className = 'letter'
      letter.innerText = value
      letter.style.animationDelay = `${index * 1000}ms`
      inner.appendChild(letter)
      outer.appendChild(inner)
      element.appendChild(outer)
    })
  }, [hovered])
  return (
    <div
      id='text'
      onMouseEnter={() => setovered(true)}
      onMouseLeave={() => setovered(false)}
    >
      <div className='line'>
        <a
          id='channel-link'
          href='/'
          target='_blank'
          className='word fancy'
          rel='noreferrer'
        >
          {text}
        </a>
      </div>
    </div>
  )
}

export default AnimatedText
