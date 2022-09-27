import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import redDot from '../assets/images/reddot.png';
export const Container = styled.div`

    @font-face {
    font-family: 'PlusJakartaSansMedium';
    src: url('../assets/fonts/static/PlusJakartaSans-ExtraBold.ttf') format('ttf');
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    }

    * {
        font-family: 'PlusJakartaSansMedium', sans-serif;
    }
    
    .attribution {
        margin: 20px 0 0 0;
    }

    background: hsl(210, 60%, 98%);
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 5px;

    #box {
        background: hsl(0, 0%, 100%);
        max-width: 801px;
        height: 90%;
        border-radius: 15px;
        padding: 25px 20px;

        @media(max-width: 650px){
            max-width: 600px;
        }
    }

    .unreaded {
        background: hsl(210, 60%, 98%);
        display: flex;

        .last::after {
            content: url(${redDot});
            margin: 1px;
        }
    }

    #top-note {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: content-box;
        margin: 0 0 20px 0;

        h1 {
            color: black;
            font-size: 25px;

            span {
                padding: 3px 9px;
                background: hsl(219, 85%, 26%);
                font-size: 18px;
                color: hsl(0, 0%, 100%);
                border-radius: 6px;
            }
        }

        .mark-read {
            cursor: pointer;
            color: hsl(219, 14%, 63%);

                :hover {
                color: hsl(219, 85%, 26%);
            }
        }
    }

    .singular-noti {
        margin: 10px 0;
    }

    .normal {
        place-content: center;
        display: grid;
        grid-template-columns: 75px 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'imageProfile textNoti'
                             'imageProfile timeNoti';
        border-radius: 7px;
        padding: 10px;
        cursor: pointer;

        :hover {
            background: hsl(205, 33%, 90%);
        }
    }

    .profile-image {
        width: 50px;
        height: 50px;
        grid-area: imageProfile;
    }

    .text-noti {
        grid-area: textNoti;
        color: hsl(219, 14%, 63%);

        strong {
            color: #252525;

            :hover {
                color: hsl(219, 85%, 26%);
                cursor: pointer;
            }
        }
    }

    .time {
        color: hsl(219, 12%, 42%);
        grid-area: timeNoti;
        font-size: 14px;
    }

    .event {
        color: hsl(224, 21%, 14%);

        :hover {
                color: hsl(219, 85%, 26%);
            }
    }

    .message {
        display: grid;
        grid-template-columns: 75px 1fr;
        grid-template-rows: 25px 25px 1fr;
        grid-template-areas: 'imageProfile textNoti'
                             'imageProfile timeNoti'
                             'imageProfile friendMessage';
        padding: 10px;
        cursor: pointer;

        .profile-image {
            grid-area: imageProfile;
        }

        .text-noti {
            grid-area: textNoti;
        }

        .time {
            grid-area: timeNoti;

            @media(max-width: 650px) {
                margin: 13px 0 0 0
            }
            
        }

        .friend-message {
            grid-area: friendMessage;
            border-radius: 7px;
            border: 1px solid hsl(219, 12%, 42%);
            padding: 10px;
            font-family: 'PlusJakartaSansMedium', sans-serif;
            color: hsl(219, 12%, 42%);

            :hover {
                background: hsl(205, 33%, 90%);
            }

            @media(max-width: 650px) {
                margin: 13px 0 0 0
            }
        }
    }

    .picture {
        display: grid;
        grid-template-columns:  75px 1fr 75px;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'profileImage textNoti eventImage'
                             'profileImage time eventImage';
        cursor: pointer;
        padding: 10px;
        border-radius: 7px;

        :hover {
            background: hsl(205, 33%, 90%);
        }
        
        .profile-image {
            grid-area: profileImage;
        }

        .text-noti {
            grid-area: textNoti;
        }

        .event-image {
            grid-area: eventImage;
            width: 50px;
            height: 50px;
        }

        .time {
            grid-area: time;
        }
    }

`;