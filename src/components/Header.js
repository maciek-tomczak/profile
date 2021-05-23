import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

// <div className="logo">
//   <span className="icon fa-diamond"></span>
// </div>
import logo1 from '../images/logo.png'
import PDF from '/src/images/cv.pdf'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>


    <div className="content">
      <div className="inner">
        <h1>Maciek Tomczak</h1>
        <p>
          Hi, I am a PhD student at Birmingham City University working on{' '}
          <a href="https://maciek-tomczak.github.io/maciek.github.io/">automated rhythmic transformation of drum recordings</a>.
        </p>
        <p>
          Research Interests: Music information retrieval, rhythm analysis, deep learning, audio style transfer, audio synthesis, onset detection, beat and metre detection, drum transcription, digital audio effects, computational musicology, interactive music systems, music performance systems
		</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('papers')
            }}
          >
            Papers
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('teaching')
            }}
          >
            Teaching
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('musicdubbing')
            }}
          >
            music and dubbing
          </button>
        </li>
        <li>
        <a href={PDF} target="_blank">
            <button>
              CV
          </button>
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
