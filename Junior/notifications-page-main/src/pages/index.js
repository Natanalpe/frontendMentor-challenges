import React, { useEffect, useState } from 'react';
import { Container } from './style';
import angelaGray from '../assets/images/avatar-angela-gray.webp';
import annaKim from '../assets/images/avatar-anna-kim.webp';
import jacobThompson from '../assets/images/avatar-jacob-thompson.webp';
import kimberlySmith from '../assets/images/avatar-kimberly-smith.webp';
import markWebber from '../assets/images/avatar-mark-webber.webp';
import nathanPeterson from '../assets/images/avatar-nathan-peterson.webp';
import rizkyHasanuddin from '../assets/images/avatar-rizky-hasanuddin.webp';
import chess from '../assets/images/image-chess.webp';

function Main() {
    var readeds = document.querySelectorAll('.unreaded');
    const [numNoties, setNumNoties] = useState(readeds.length);

    function MarkAsReaded() {
        readeds.forEach(e => {
            e.classList.remove('unreaded')
        })
        setNumNoties(0)
    };
    console.log(numNoties)
    return (
        <Container>
            <div id='box'>
                <div id='top-note'>
                    <h1>Notifications {numNoties >= 1 ? <span className='number-noti'>{numNoties}</span>: ''}</h1>

                    <span className='mark-read' onClick={MarkAsReaded}>Mark all as read</span>
                </div>
                <div className="singular-noti normal unreaded">
                    <img src={markWebber} className="profile-image" alt='Avatar' />
                    <p className='text-noti'>
                        <strong className='user-name'>Mark Webber</strong> reacted to your recent post <span className='event last'>My first tournament today!</span>
                    </p>
                    <span className='time'>1m ago</span>

                </div>
                <div className="singular-noti normal unreaded">
                    <img src={angelaGray} className="profile-image" alt='Avatar' />
                    <p className='text-noti last'>
                        <strong className='user-name'>Angela Gray</strong> followed you
                    </p>
                    <span className='time'>5m ago</span>

                </div>
                <div className="singular-noti normal unreaded">
                    <img src={jacobThompson} className="profile-image" alt='Avatar' />
                    <p className='text-noti'>
                        <strong>Jacob Thompson</strong> has joined your group <span className='event last'>Chess Club</span>
                    </p>
                    <span className='time'>1 day ago</span>
                </div>
                <div className="singular-noti message">
                    <img src={rizkyHasanuddin} className="profile-image" alt='Avatar' />
                    <p className='text-noti'>
                        <strong>Rizky Hasanuddin</strong> sent you a private message
                    </p>
                    <span className='time'>5 days ago</span>
                    <div className='friend-message'>
                        Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                        I'm already having lots of fun and improving my game.
                    </div>
                </div>
                <div className="singular-noti picture">
                    <img src={kimberlySmith} className="profile-image" alt='Avatar' />
                    <div>
                        <p className='text-noti'>
                            <strong>Kimberly Smith</strong> commented on your picture
                        </p>
                        <span className='time'>1 week ago</span>
                    </div>
                    <img src={chess} alt='' className='event-image' />
                </div>
                <div className="singular-noti normal">
                    <img src={nathanPeterson} className="profile-image" alt='Avatar' />
                    <p className='text-noti'>
                        <strong>Nathan Peterson</strong> reacted to your recent post <span className='event'>5 end-game strategies to increase your win rate</span>
                    </p>
                    <span className='time'>2 weeks ago</span>
                </div>
                <div className="singular-noti normal">
                    <img src={annaKim} className="profile-image" alt='Avatar' />
                    <p className='text-noti'>
                        <strong>Anna Kim</strong> left the group <span className='event'>Chess Club</span>
                    </p>
                    <span className='time'>2 weeks ago</span>
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div>
        </Container>
    )
}

export default Main;