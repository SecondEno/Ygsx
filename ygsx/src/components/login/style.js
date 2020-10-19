import styled from 'styled-components'

const Loginlc = styled.div`
height:100%;
width:100%;
    #preloader_2 { position: relative; left: 50%; width: 40px; height: 40px; }
#preloader_2 span { display: block; bottom: 0px; width: 20px; height: 20px; background: #9b59b6; position: absolute; }
#preloader_2 span:nth-child(1) { animation: preloader_2_1 1.5s infinite ease-in-out; }
#preloader_2 span:nth-child(2) { left: 20px; animation: preloader_2_2 1.5s infinite ease-in-out; }
#preloader_2 span:nth-child(3) { top: 0px; animation: preloader_2_3 1.5s infinite ease-in-out; }
#preloader_2 span:nth-child(4) { top: 0px; left: 20px; animation: preloader_2_4 1.5s infinite ease-in-out; }
 @-keyframes preloader_2_1 {
 0% {
-transform: translateX(0px) translateY(0px) rotate(0deg);
border-radius:0px;
}
 50% {
-transform: translateX(-20px) translateY(-10px) rotate(-180deg);
border-radius:20px;
background:#3498db;
}
 80% {
-transform: translateX(0px) translateY(0px) rotate(-360deg);
border-radius:0px;
}
 100% {
-transform: translateX(0px) translateY(0px) rotate(-360deg);
border-radius:0px;
}
}
@-keyframes preloader_2_2 {
 0% {
-transform: translateX(0px) translateY(0px) rotate(0deg);
border-radius:0px;
}
 50% {
-transform: translateX(20px) translateY(-10px) rotate(180deg);
border-radius:20px;
background:#f1c40f;
}
 80% {
-transform: translateX(0px) translateY(0px) rotate(360deg);
border-radius:0px;
}
 100% {
-transform: translateX(0px) translateY(0px) rotate(360deg);
border-radius:0px;
}
}
@-keyframes preloader_2_3 {
 0% {
-transform: translateX(0px) translateY(0px) rotate(0deg);
border-radius:0px;
}
 50% {
-transform: translateX(-20px) translateY(10px) rotate(-180deg);
border-radius:20px;
background:#2ecc71;
}
 80% {
-transform: translateX(0px) translateY(0px) rotate(-360deg);
border-radius:0px;
}
 100% {
-transform: translateX(0px) translateY(0px) rotate(-360deg);
border-radius:0px;
}
}
 @-keyframes preloader_2_4 {
 0% {
-transform: translateX(0px) translateY(0px) rotate(0deg);
border-radius:0px;
}
 50% {
-transform: translateX(20px) translateY(10px) rotate(180deg);
border-radius:20px;
background:#e74c3c;
}
 80% {
-transform: translateX(0px) translateY(0px) rotate(360deg);
border-radius:0px;
}
 100% {
-transform: translateX(0px) translateY(0px) rotate(360deg);
border-radius:0px;
}
}

`
export default Loginlc