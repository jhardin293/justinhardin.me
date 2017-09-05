import React, { Component } from 'react';

import justinImg from '../images/jedi-justin.JPG';

class About extends Component {
  render() {
    return (
      <div className="project-page">
        <img className="res-img" src={justinImg} alt=""/>
        <div className="container">
          <div className="row content-row">
            <div className="col-sm-4 col-xs-12">
              <h2>about me</h2>
            </div>
            <div className="col-sm-8 col-xs-12">
              <p>I always knew that I would spend my life creating with computers. It seemed like a perfect match because of my lineage. My grandfather was an electrical engineer and later a software engineer, my father is a serial entrepreneur and my mother is a graphic designer. My start in web design was in middle school. I learned a little HTML while hacking together Myspace pages and soon started creating custom Myspace pages for friends and family. During my freshman year in high school, I started a record label with my friends and produced beats. I wanted to sell our music online and thought it would be a good idea to create an eCommerce site to sell songs and advertise our label, an interesting experience which introduced me to different web technologies like Javascript and CSS. I ended up using a platform called WIX, built entirely on Adobe Flash which was a mobile nightmare.</p>
              <p>My path through high school was unorthodox. I strongly disagreed with the methods they were using to educate me. I have always been an autodidact and dropped out my sophomore year to enroll in independent studies. That was one of the most important pivots in my life. I loved scheduling my own lesson plans and not relying on the pacing of teachers and classmates. I soon found out that if you take junior college courses it counts as double high school credits. I ended up taking a couple of college-level classes, which sped me through my high school work to graduate at the age of 16.</p>
              <p>One year later I attended Berkeley City College. Inspired by a slew of science fiction novels and futurist books, I aimed for a degree in Cognitive Science, planning to contribute to the artificial intelligence movement.</p>
              <p>Everything changed when I tagged along with my uncle to a workspace lunch party in Oakland. Of all the interesting people there, two inspired me the most: guys who couldn’t have been older than 25, who founded a digital key product called Clef. They spoke really fast about web technologies that I couldn’t comprehend at the time. What really excited me was that they both had this passionate look in their eyes that implied that they had stayed up for 24+ hours working on their product. I was sold–this is what I wanted to do for the rest of my life.</p>
            </div>
          </div>
          <div className="row content-row">
            <div className="col-sm-4 col-xs-12">
              <h2>my cv</h2>
            </div>
            <div className="col-sm-8 col-xs-12">
              <div className="btn-wrapper">
                  <a>
                    <button className="btn">Download</button>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default About;
