import React from 'react'
import './MouseFollower.css'
import gsap from 'gsap'

const MouseFollower = () => {
    function mousefollow(){
        let cursor = document.querySelector('.cursor');
        let body = document.querySelector('body');

        body.addEventListener('mousemove',(e)=>{
            gsap.to(cursor,{
                x:e.x+'px',
                y:e.y+'px'
            })
        })
    }
    mousefollow();
  return (
    <div>
        <div className="cursor"></div>
    </div>
  )
}

export default MouseFollower