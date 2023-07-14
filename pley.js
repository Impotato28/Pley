console.log("hello pley");
// initialising variables
let songindex = 0;
let audioelement = new Audio('songs/susume.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementById('mastersongname');
let main_img = document.getElementById('main_img');
let description = document.getElementById('description');
let random = document.getElementById('random');
let again = document.getElementById('again');
let mini_pley = document.getElementsByClassName('mini_pley');

// array of songs
let songs = [
    {songname:"Suzume" , description:"RADWIMPS, Toaka"  , filePath:"songs/susume.mp3" , coverPath:"coverImg/susume.jpg"},
    {songname:"Falling" , description:"Trevor Daniel" ,filePath:"songs/falling.mp3" , coverPath:"coverImg/falling.png"},
    {songname:"Arcade" , description:"Duncan Laurence" , filePath:"songs/arcade.mp3" , coverPath:"coverImg/arc.png"},
    {songname:"Levitating" , description:"Dua Lipa" , filePath:"songs/Levitating.mp3" , coverPath:"coverImg/levi.jpg"},
    {songname:"Runaway" , description:"Aurora" , filePath:"songs/Runaway.mp3" , coverPath:"coverImg/run.jpg"},
    {songname:"Perfect" , description:"ED Sheeran" , filePath:"songs/Perfect.mp3" , coverPath:"coverImg/soy.jpg"},
    {songname:"Industrial baby" , description:"Lil Nas X, Jack harlow" , filePath:"songs/Industrialbaby.mp3" , coverPath:"coverImg/indbby.jpg"},
    {songname:"Until I Found You" , description:"Stephen sanchez" , filePath:"songs/Untilifoundyou.mp3" , coverPath:"coverImg/until.png"}
]

//  play/pause or click
masterplay.addEventListener('click', ()=>{
    if (audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }

    time_end.innerHTML = audioelement.duration/60;
})
audioelement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)* 100);
    // console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})
// next and previous song
document.getElementById('previous').addEventListener('click',()=>{
    if (songindex <= 0 ){
        songindex = 7
    }
    else {
        songindex -= 1;
    } 
    audioelement.src = songs[songindex].filePath;
    main_img.src = songs[songindex].coverPath;
    mastersongname.innerText = songs[songindex].songname;
    description.innerText = songs[songindex].description;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})
document.getElementById('next').addEventListener('click',()=>{
    if (songindex >= 7 ){
        songindex = 0
    }
    else {
        songindex += 1;
    } 
    audioelement.src = songs[songindex].filePath;
    main_img.src = songs[songindex].coverPath;
    mastersongname.innerText = songs[songindex].songname;
    description.innerText = songs[songindex].description;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
random.addEventListener('click' ,()=>{
    let ran = Math.floor(Math.random() * 8);
    audioelement.src = songs[ran].filePath;
    main_img.src = songs[ran].coverPath;
    mastersongname.innerText = songs[ran].songname;
    description.innerText = songs[ran].description;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
again.addEventListener('click' ,()=>{
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

const makeallplays = ()=>{
    Array.from(mini_pley).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}

// mini play icon
Array.from(mini_pley).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeallplays();
        let index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = songs[index].filePath;
        audioelement.currentTime = 0;
        audioelement.play();
        main_img.src = songs[index].coverPath;
        mastersongname.innerText = songs[index].songname;
        description.innerText = songs[index].description;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})