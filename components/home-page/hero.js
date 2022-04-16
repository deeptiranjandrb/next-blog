import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';
function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/AvatarMaker.svg" alt="An image showing deeptiranjan" width={300} height={300} />
        </div>
        <h1>Hi, I am deeptiranjan</h1>
        <p>
            I blog about web development - ranging from frontend frameworks like react to backend frameworks like express js
            and everything in between.
        </p>
    </section>
  )
}

export default Hero