import './Home.css';

function Home() {
    return (
        <div className="home">
            <section class="header">
    <nav>
      <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
        <ul>
          <li><a href="gallery.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <img src="img/newlogo.png" />
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="bookanappt.html">Book An Appointment</a></li>

        </ul>
      </div>
      <i class="fa fa-bars" onclick="showMenu()"></i>
      <i class="fa fa-scissors"></i>

    </nav>
  </section>
  <div class="text-box">
    <h1>Where detail and precision makes<br /> all the difference</h1>
    <a href="contact.html" class="hero-btn">Book An Appointment</a>
  </div>

  <div class="container">
    <section class="home-about">

      <div class="home-about-textbox">
        <h1>About me</h1>
        <p>My name is Kevin and I'm born and raised in Orange County.
          I finished my undergraduate at UCSD, studying computer science.
          I'm a very easygoing and sociable guy, and I love talking and meeting new people.
          I've been cutting hair for 5 years now and still going.
          Besides barbering, I enjoy playing games (League of Legends, CoD, etc), hooping,
          dancing, and coding!</p>

      </div>

    </section>
    <section class="home-about-2">
      <div class="home-about-textbox-2">
        <p>It all started with me trying to save
          money for college by learning to cut my own hair on youtube. As you would expect, the haircuts I gave myself
          were absolutely horrible.
          I had a thought that I could learn quicker by cutting my friends and cousins, and that's what I did.
          From there, it didn't take much for me to realize that cutting hair would be something I love doing. Being
          able to give other people the confidence boost to pursue their goals and to meet all
          sorts of people and listen their unique stories really sold it for me.
        </p>
      </div>

    </section>
  </div>
  
  {/*<!--Features--> */}

  <section id="feature">
    <div class="title-text">
      <p>FEATURES</p>
      <h1>Why Choose Me</h1>
    </div>
    <div class="feature-box">
      <div class="features">
        <h1>Detailed-Oriented</h1>
        <div class="features-desc">

          <div class="feature-text">
            <p>I am very meticulous when it comes to cutting hair and I strive to not only, <br/> make sure
              that my client is satisfied but also that I gave my very best! Expect <br/>at least 45 minutes every
              haircut!</p>
          </div>
        </div>
        <h1>Affordable</h1>
        <div class="features-desc">

          <div class="feature-text">
            <p>I'm constantly evaluating with what barbers around me are pricing their cuts<br/> and the quality of their
              cut for that price.
              This is so I can make sure that my<br/> haircut costs are competitive and reasonable.
              As of right now, all my haircuts <br/>are $20!</p>
          </div>
        </div>
        <h1>Stress Free</h1>
        <div class="features-desc">

          <div class="feature-text">
            <p>I understand that it could be intimidating to go to a traditional barbershop. I <br/>want to make the
              whole process as easy and comfortable as possible. <br/>Pre-booking, I offer
              free online consultations. Once you get in the chair, I will always walkthrough everything that
              I'm doing to make sure that we <br/>are both on the same page.

            </p>
          </div>

        </div>
      </div>
      <div class="features-img">
        <img src="img/barberme.jpg"/>
      </div>
    </div>
  </section>

  {/* JavaSript for Toggle Menu */}


  <footer>
    <section class="footer">
      <p>Make sure you give me a follow!</p>
      <div class="icons">
        <a href="https://www.instagram.com/kutz_bykev/"><i class="fa fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/kevin-nguyen17/"><i class="fa fa-linkedin"></i></a>
      </div>
    </section>

  </footer>
        </div>

        
    )
}




export default Home