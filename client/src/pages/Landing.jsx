import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components/";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby pop-up heirloom solarpunk hot chicken keffiyeh prism banh
            mi gorpcore tofu craft beer cardigan iceland taiyaki flexitarian
            XOXO. Keytar you probably haven't heard of them wayfarers waistcoat
            lo-fi kinfolk pour-over listicle cray. Meditation pinterest
            lumbersexual DSA chambray XOXO pitchfork. Synth keffiyeh humblebrag,
            blackbird spyplane polaroid venmo cliche edison bulb la croix ugh
            neutra brunch semiotics dreamcatcher.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
