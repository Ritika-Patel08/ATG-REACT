import React from 'react'
import Homeing1 from '../images/Homeimg1.png';
import Nav from './nav2.js'
import Post from './posts.js'
import Post1 from '../images/post1.png';
import Post2 from '../images/post2.png';
import Post3 from '../images/post3.png';
import Rec1 from '../images/recc1.png';
import Rec2 from '../images/recc2.png';
import Rec3 from '../images/recc3.png';
import Rec4 from '../images/recc4.png';
import '../App.css';
import Reccomend from './Reccomend.js';

export const body = () => {
    return (
        <>
            <div>
                <img className='Homeimg' src={Homeing1} alt="Not found" />
            </div>
            <Nav />
            <div className='lg:flex' >
                <div>
                    <Post type="✍️ Article" img={Post1} title="What if famous brands had regular fonts? Meet RegulaBrands!" text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" name="Sarthak Kamra" />
                    <Post type="🔬️ Education" img={Post2} title="Tax Benefits for Investment under National Pension Scheme launched by Government" text="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" name="Sarah West" />
                    <Post type="🗓️ Meetup" img={Post3} title="Finance & Investment Elite Social Mixer @Lujiazui" text="" name="Ronal Jones" />
                </div>
                <div className='ml-20 mt-20 mr-40 lg:visible  '>
                    <input className='postinput' value="Noida, India" />
                    <hr />
                    <p>Your location will help us serve better and extend a personalised experience.</p>
                    <p><b>Recommended Groups </b>👍</p>
                    <Reccomend img={Rec1} name="Ritika" />
                    <Reccomend img={Rec2} name="Ritika" />
                    <Reccomend img={Rec3} name="Ritika" />
                    <Reccomend img={Rec4} name="Ritika" />
                </div>
            </div>
            <script src="https://kit.fontawesome.com/7222c65f87.js" crossorigin="anonymous"></script>
        </>
    )
}

export default body
