import styles from '../styles/Home.module.css';
import Image from "next/image";
import { useRouter } from "next/router";
import ShunyaLogo from "../assets/logo_white.webp";
import Arithmania from "../assets/arithmania.webp";
import cubes from "../assets/cubes.json";
import Lottie from "lottie-react";
import BlogComponent from '../components/BlogComponent';
import BlogImage from "../assets/blogimg.webp";

export default function Home() {

  const router = useRouter()

  return (
    <div className={styles.home}>
      <div className={styles.home__main}>
        <div className={styles.home__maincontain}>
          <div className={styles.home__shunyalogo}>
            <Image className={styles.home__shunyaimg} src={ShunyaLogo} alt="Shunya Logo" />
          </div>
          <div className={styles.home__shunyatitle}>
            <h1>The Official Math Club of <br/> PES University</h1>
            <h2>We break down the myth of mathematics being mundane and inapplicable by discovering its practicality as a step-by-step process.</h2>
          </div>
        </div>
      </div>

      <div className={styles.home__about}>
        <div className={styles.home__aboutcontain}>
          <div className={styles.home__abouttitle}>About Shunya</div>

          <div className={styles.home__aboutcontent}>
            <div className={styles.home__aboutpara}>We are an analysis-driven and
              research-oriented club.
              We host fun activities and events related to a variety of branches of applied
              math.<br /><br />
              Shunya promises much more than just fun mathematics. We are a community of extraordinary youth
              joining
              together to develop their explorative, creative, and inventive skills. Shunya is a place to
              learn,
              explore, develop and research.<br /><br />
              We are on a journey to capture the beauty of mathematics in its true essence. The club is open
              to all
              those curious minds, to learn more about mathematics, regardless of their course or background.
            </div>
            <div className={styles.home__aboutcubes}>
              <Lottie
                loop={true}
                animationData={cubes}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.home__events}>
        <div className={styles.home__eventscontain}>
          <div className={styles.home__eventstitle}>Club Events</div>
          <div className={styles.home__eventsbody}>
            <div className={styles.home__eventsleft}>
              <div className={styles.home__eventslefttitle}>Checkout our<br />Upcoming and Past events</div>
              <button className={styles.home__eventsleftbtn} onClick={() => router.push('/events')}>Go to Events Page</button>
            </div>

            <div className={styles.home__eventsright}>
              <div className={styles.home__eventsrighttitle}>Recent Event</div>

              <div className={styles.home__eventsrightbody}>
                <div className={styles.home__eventsinfo}>
                  <div className={styles.home__eventsinfotitle}>Arithmania 2022</div>
                  <div className={styles.home__eventsinfopara}>A 30 hour hackathon with
                    problem statements based on
                    applied mathematics domains. The part of math which is ingrained into solving the problem statements
                    makes a huge impact on how practical math is in everyone’s own life and gives a new outlook on how
                    to
                    understand the subject and approach it practically.</div>
                </div>

                <div className={styles.home__eventsimgcon}>
                  <Image src={Arithmania} alt="Arithmania" className={styles.home__eventsimg} />
                  <div className={styles.home__eventsimghov}>Know More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.home__blogs}>
        <div className={styles.home__blogscontain}>
          <div className={styles.home__blogstitle}>Blogs</div>
          <div className={styles.home__blogslist}>
            <BlogComponent date="6 July 2022" title="Math to descibe black holes." description="A new set of equations can precisely describe..." tag="BLACK HOLES" image={BlogImage} />
          </div>
        </div>
      </div>
      
    </div>
  )
}
