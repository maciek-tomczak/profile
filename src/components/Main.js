import PropTypes from 'prop-types'
import React from 'react'
import hanairoha from '../images/hanairoha.png'
import NKlogo from '../images/NKlogo.png'
import amnesia from '../images/amnesia.jpg'
import { Link } from 'gatsby'

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
					className={`${this.props.article === 'papers' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
						}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Refereed Publications</h2>
					<p>
						<a href="https://doi.org/10.1145/3394171.3413519"><b>Tomczak M.</b>, M. Goto and J. Hockman, Drum Synthesis and Rhythmic Transformationwith Adversarial Autoencoders. In Proceedings of the ACM International Conference on Multimedia, Seattle, WA, USA, 2020.</a>
					</p>
					<p>
						<a href="https://dafx2020.mdw.ac.at/proceedings/papers/DAFx2020_paper_45.pdf">Drysdale J., <b>M. Tomczak</b>, and J. Hockman, Adversarial Synthesis of Drum Sounds. In Proceedings of the International Conference on Digital Audio Effects, Vienna, Austria, 2020.</a>
					</p>
					<p>
						<a href="http://dafx2019.bcu.ac.uk/papers/DAFx2019_paper_25.pdf"><b>Tomczak M.</b>, J. Drysdale and J. Hockman, Drum Translation for Timbral and Rhythmic Transformation. In Proceedings of the International Conference on Digital Audio Effects, Birmingham, United Kingdom, 2019.</a>
					</p>
					<p>
						<a href="http://dafx2018.web.ua.pt/papers/DAFx2018_paper_48.pdf"><b>Tomczak M.</b>, C. Southall and J. Hockman, Audio Style Transfer with Rhythmic Constraints. In Proceedings of the International Conference on Digital Audio Effects, Aveiro, Portugal, 2018.</a>
					</p>
					<p>
						<a href="https://sophia.mus.auth.gr/xmlui/bitstream/handle/123456789/1897/FMA_proceedings_2018.pdf?sequence=1#page=11">Ali-MacLachlan I., C. Southall, <b>M. Tomczak</b> and J. Hockman, Player recognition for traditional Irish flute recordings. In Proceedings of the International Workshop on Folk Music Analysis, Thessaloniki, Greece, 2018.</a>
					</p>
					<p>
						<a href="https://rppw.org/"><b>Tomczak M.</b>, C. Southall and J. Hockman, Rhythm Modelling using Convolutional Neural Networks. In Rhythm Production and Perception Workshop, Birmingham, United Kingdom, 2017.</a>
					</p>
					<p>
						<a href="https://www.open-access.bcu.ac.uk/4748/1/Hockman%20-%20improved%20onset.pdf">Ali-MacLachlan I., C. Southall, <b>M. Tomczak</b>, and J. Hockman. Improved Onset Detection for Traditional Irish Flute Recordings using Convolutional Neural Networks. In Proceedings of the International Workshop on Folk Music Analysis, Malaga, Spain, 2017.</a>
					</p>
					<p>
						<a href="https://arrow.dit.ie/cgi/viewcontent.cgi?article=1006&context=fema">Ali-MacLachlan I., <b>M. Tomczak</b>, C. Southall, and J. Hockman. Note, Cut and Strike Detection for Traditional Irish Flute Recordings. In Proceedings of the International Workshop on Folk Music Analysis, Dublin, Ireland, 2016.</a>
					</p>
					{close}
				</article>

				<article id="teaching" className={`${this.props.article === 'teaching' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
					<h2 className="major">Teaching</h2>
					<p>I was a teaching assistant on the following courses:</p>
					<a href="https://www.bcu.ac.uk/digital-technology/courses/sound-engineering-and-production-bsc-hons-2021-22">Sound Engineering and Production BSc (Hons) at Birmingham City University, UK</a><br></br>
					<ul class='fa-ul'>
						<li><i>2019-20</i> &nbsp;&nbsp;New Interfaces for Musical Expression [DIG6111]</li>
						<li><i>2018-19</i> &nbsp;&nbsp;Digital Audio Fundamentals [DIG4157]</li>
						<li><i>2018-19</i> &nbsp;&nbsp;Interactive Music Systems [DIG6041]</li>
						<li><i>2017-18</i> &nbsp;&nbsp;Broadcast Media [DIG6100]</li>
						<li><i>2018</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Digital Signal Processing [DIG5069]</li>
						<li><i>2017</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Musical Instrument Acoustics [DIG4082]</li>
						<li><i>2017</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acoustic Fundamentals [DIG5059]</li>
						<li><i>2017</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sound for Film: Recording, Mixing and Mastering (summer school)</li>
						<li><i>2016</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live Sound Engineering [DIG4158]</li>
						<li><i>2015-16</i> &nbsp;&nbsp;Music and Sound for Visual Media [DIG6042]</li>
					</ul>
					<h3 className="major">Presentations at fan conventions</h3>
					<ul class='fa-ul'>
						<li><i>2018</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://eventory.cc/event/nejiro-9/schedule/46125">'Mamo nie słyszę, bo miksuję!'</a> presented at <a href="https://eventory.cc/event/nejiro-9">Nejiro 9</a>.</li>
						<li><i>2017</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://eventory.cc/event/pyrkon-2017/schedule/29585">Muzyka i dźwięk w filmach zza kulis</a> presented at <a href="https://pyrkon.pl/en/about-pyrkon/">Pyrkon</a>.</li>
					</ul>
					<h3 className="major">Courses and teaching material</h3>
					<ul class='fa-ul'>
						<li><i>2016</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://eventory.cc/event/nejiro-9/schedule/46125">Kurs Realizatorów Fandubbingowych (KRF)</a>, <a href="https://www.slideshare.net/MaciekTomczak/kurs-realizatorw-fandubbingowych-2016">[pdf]</a>.</li>
					</ul>
					{close}
				</article>
				<article id="musicdubbing" className={`${this.props.article === 'musicdubbing' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : '' }`} style={{ display: 'none' }}>
					<h2 className="major">Music and Dubbing</h2>

					<h3 className="major">NanoKarrin</h3>
					<p>
						<a href="https://nanokarrin.pl/">NanoKarrin</a> is the largest Polish fandubbing group that connects amateurs, professionals and everyone in between. My main responsibilities within the group are sound engineering (mixing & mastering of music projects) and <Link to="https://rekrutacja.nanokarrin.pl/docs/rekrurealizator">recruitment</Link>.
						<br></br><br></br>
						<Link to="/portfolio">> Click here for my mixing and mastering porfolio.</Link>
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
					id="cv"
					className={`${this.props.article === 'cv' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
						}`}
					style={{ display: 'none' }}
				>
					<Link to="/">Go back to the homepage</Link>
					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
						}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Contact</h2>

					<ul className="icons">
						<li>
							<a
								href="https://scholar.google.com/citations?user=2upPg60AAAAJ&hl=en&oi=ao"
								className="icon fa-book"
							>
								<span className="label">GitHub</span>
							</a>
						</li>
						<li>
							<a
								href="https://maciek-tomczak.github.io/maciek.github.io/"
								className="icon fa-beer"
							>
								<span className="label">Blog</span>
							</a>
						</li>
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
							<a href="mailto:maciej.tomczak@bcu.ac.uk" className="icon fa-envelope-o">
								<span className="label">Email</span>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/maciek-tomczak-08b58867/" className="icon fa-linkedin">
								<span className="label">Linkedin</span>
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
