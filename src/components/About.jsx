import React from 'react'; // Added
import './About.css';
import category1 from '../images/category-1.svg';
import category2 from '../images/category-2.svg';
import category3 from '../images/category-3.svg';
import category4 from '../images/category-4.svg';
import aboutBanner from '../images/about-banner.jpg';
import aboutShape2 from '../images/about-shape-2.svg';
import aboutShape3 from '../images/about-shape-3.png';
import aboutShape4 from '../images/about-shape-4.svg';
//import course1 from './assets/images/course-1.jpg';
//import course2 from './assets/images/course-2.jpg';
//import course3 from './assets/images/course-3.jpg';
//import videoBanner from './assets/images/video-banner.jpg';
//import videoBg from './assets/images/video-bg.png';
//import blog1 from './assets/images/blog-1.jpg';
//import blog2 from './assets/images/blog-2.jpg';
//import blog3 from './assets/images/blog-3.jpg';
//import blogShape from './assets/images/blog-shape.png';

function About() {
  return (
    <React.Fragment> {/* Added */}
      <section className="section category" aria-label="category">
        <div className="container">
          <p className="section-subtitle">Our Domains</p>
          <h2 className="h2 section-title">Online <span className="span">Classes</span> For Remote Learning.</h2>
          <p className="section-text">Build your future Career with us</p>
          <ul className="grid-list">
            <li>
              <div className="category-card" style={{ '--color': '170, 75%, 41%' }}>
                <div className="card-icon">
                  <img src={category1} width="40" height="40" loading="lazy" alt="Online Degree Programs" className="img" />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">Artificial Intelligence</a>
                </h3>
                <p className="card-text">Build your career with our chosen Trainings.</p>
                <span className="card-badge">7 Courses</span>
              </div>
            </li>
            <li>
              <div className="category-card" style={{ '--color': '351, 83%, 61%' }}>
                <div className="card-icon">
                  <img src={category2} width="40" height="40" loading="lazy" alt="Non-Degree Programs" className="img" />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">Data Science</a>
                </h3>
                <p className="card-text">Build your career with our chosen Trainings.</p>
                <span className="card-badge">4 Courses</span>
              </div>
            </li>
            <li>
              <div className="category-card" style={{ '--color': '229, 75%, 58%' }}>
                <div className="card-icon">
                  <img src={category3} width="40" height="40" loading="lazy" alt="Off-Campus Programs" className="img" />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">Web Development</a>
                </h3>
                <p className="card-text">Build your career with our chosen Trainings.</p>
                <span className="card-badge">8 Courses</span>
              </div>
            </li>
            <li>
              <div className="category-card" style={{ '--color': '42, 94%, 55%' }}>
                <div className="card-icon">
                  <img src={category4} width="40" height="40" loading="lazy" alt="Hybrid Distance Programs" className="img" />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">Cyber Security</a>
                </h3>
                <p className="card-text">Build your career with our chosen Trainings.</p>
                <span className="card-badge">8 Courses</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <figure className="about-banner">
            <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
              <img src={aboutBanner} width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
            </div>
            <img src={aboutShape2} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
            <img src={aboutShape3} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
          </figure>
          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">The <span className="span">Algerian</span> platform for  <span className="span">Computer Science</span> enthousiasts</h2>
            <p className="section-text">Build your career in one of the highest en demend jobs with :</p>
            <ul className="about-list">
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Expert Trainers</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Online Remote Learning</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                <span className="span">Lifetime Access</span>
              </li>
            </ul>
            <img src={aboutShape4} width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
