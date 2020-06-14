import PropTypes from 'prop-types'
import React from 'react'
import hanairoha from '../images/hanairoha.png'
import NKlogo from '../images/NKlogo.png'
import amnesia from '../images/amnesia.jpg'

class Main extends React.Component {
  render() {
	let close = (
	  <div
		className="close"
		onClick={() => {
		  this.props.onCloseArticle()
		}}
	  ></div>
	)

	return (
	  <div
		ref={this.props.setWrapperRef}
		id="main"
		style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
	  >
		<article
		  id="papers"
		  className={`${this.props.article === 'papers' ? 'active' : ''} ${
			this.props.articleTimeout ? 'timeout' : ''
		  }`}
		  style={{ display: 'none' }}
		>
		  <h2 className="major">Refereed Publications</h2>
		  <p>
			  <a href="http://dafx2019.bcu.ac.uk/papers/DAFx2019_paper_25.pdf"><b>M. Tomczak</b>, J. Drysdale and J. Hockman, Drum translation for timbral and rhythmic transformation. In Proceedings of the International Conference on Digital Audio Effects, Birmingham, United Kingdom, 2019.</a>
		  </p>
		  <p>
			  <a href="http://dafx2018.web.ua.pt/papers/DAFx2018_paper_48.pdf"><b>M. Tomczak</b>, C. Southall and J. Hockman, Audio style transfer with rhythmic constraints. In Proceedings of the International Conference on Digital Audio Effects, Aveiro, Portugal, 2018.</a>
		  </p>
		  <p>
			  <a href="https://sophia.mus.auth.gr/xmlui/bitstream/handle/123456789/1897/FMA_proceedings_2018.pdf?sequence=1#page=11">I. Ali-MacLachlan, C. Southall, <b>M. Tomczak</b> and J. Hockman, Player recognition for traditional Irish flute recordings. In Proceedings of the International Workshop on Folk Music Analysis, Thessaloniki, Greece, 2018.</a>
		  </p>
		  <p>
			  <a href="{https://dmtlab.bcu.ac.uk/rppw2017/"><b>M. Tomczak</b>, C. Southall and J. Hockman, Rhythm modelling using convolutional neural networks. In Rhythm Production and Perception Workshop, Birmingham, United Kingdom, 2017.</a>
		  </p>
		  <p>
			  <a href="http://www.open-access.bcu.ac.uk/4748/1/Hockman\%20-\%20improved\%20onset.pdf">I. Ali-MacLachlan, C. Southall, <b>M. Tomczak</b>, and J. Hockman. Improved onset detection for traditional Irish flute recordings using convolutional neural networks. In Proceedings of the International Workshop on Folk Music Analysis, Malaga, Spain, 2017.</a>
		  </p>
		  <p>
			  <a href="https://arrow.dit.ie/cgi/viewcontent.cgi?article=1006&context=fema">I. Ali-MacLachlan, <b>M. Tomczak</b>, C. Southall, and J. Hockman. Note, cut and strike detection for traditional Irish flute recordings. In Proceedings of the International Workshop on Folk Music Analysis, Dublin, Ireland, 2016.</a>
		  </p>
		  {close}
		</article>

		<article
		  id="musicdubbing"
		  className={`${this.props.article === 'musicdubbing' ? 'active' : ''} ${
			this.props.articleTimeout ? 'timeout' : ''
		  }`}
		  style={{ display: 'none' }}
		>
		  <h2 className="major">Music and Dubbing</h2>

		  <h3 className="major">NanoKarrin</h3>
		  <p>
		  <a href="https://nanokarrin.pl/">NanoKarrin</a> is the largest Polish fandubbing group that connects amateurs, professionals and everyone in between. My main responsibilities within the group are sound engineering (mixing & mastering of music projects) and recruitment.
		  <span className="image main">
			<img src={NKlogo} alt="" />
		  </span>
		  </p>

		  <h3 className="major">Hanasaku Iroha: Home Sweet Home</h3>
		  I assisted in mixing and mastering of the official Polish dubbing for a movie <i>Hanasaku Iroha: Home Sweet Home</i> distributed by <a href="https://animagia.pl/sklep/">Animagia.pl</a>.

		  <span className="image main">
		  <img src={hanairoha} alt="" />
		  </span>

		  <h3 className="major">Amnesia: The Dark Descent</h3>
		  I was responsible for dialogue editing and mastering of Polish dubbing for horror game <a href="https://polski-dubbing.fandom.com/wiki/Amnesia:_Mroczny_ob%C5%82%C4%99d">Amnesia: The Dark Descent</a>.

		  <span className="image main">
		  <img src={amnesia} alt="" />
		  </span>

		  {close}
		</article>

		<article
		  id="contact"
		  className={`${this.props.article === 'contact' ? 'active' : ''} ${
			this.props.articleTimeout ? 'timeout' : ''
		  }`}
		  style={{ display: 'none' }}
		>
		  <h2 className="major">Contact</h2>

		  <ul className="icons">
		  <li>
		  <a
		  href="https://github.com/maciek-tomczak"
		  className="icon fa-github"
		  >
		  <span className="label">GitHub</span>
		  </a>
		  </li>
		  <li>
		  <a
		  href="https://gitlab.com/Razjel"
		  className="icon fa-gitlab"
		  >
		  <span className="label">Gitlab</span>
		  </a>
		  </li>
		  <li>
		  <a href="https://www.linkedin.com/in/maciek-tomczak-08b58867/" className="icon fa-linkedin">
		  <span className="label">Linkedin</span>
		  </a>
		  </li>
		  <li>
		  <a href="mailto:maciej.tomczak@bcu.ac.uk" className="icon fa-envelope-o">
		  <span className="label">Email</span>
		  </a>
		  </li>
			<li>
			  <a href="https://www.facebook.com/maciektm/" className="icon fa-facebook">
				<span className="label">Facebook</span>
			  </a>
			</li>
			<li>
			  <a
				href="https://www.instagram.com/razjel.ove/"
				className="icon fa-instagram"
			  >
				<span className="label">Instagram</span>
			  </a>
			</li>
		  </ul>
		  {close}
		</article>
	  </div>
	)
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
