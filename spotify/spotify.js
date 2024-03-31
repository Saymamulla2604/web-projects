console.log("welcome to spotify");
//initialize the variables
let SongIndex=0;
let audioElement=new Audio('life-goes-on.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar');

let gif = document.getElementById('gif');
let songs= [
    {songname:"Life-goes-on",filePath: "songs/life-goes-on.mp3",coverPath:"covers/life-goes-on.jpg"},
    {songname:"My-universe",filePath: "songs/01-MyUniverse",coverPath:"covers/life-goes-on.jpg"},
    {songname:"Bad-decisions",filePath: "songs/bad-decisions.mp3",coverPath:"covers/life-goes-on.jpg"},
    {songname:"Dynamite",filePath: "songs/BTS-Dynamite.mp3",coverPath:"covers/life-goes-on.jpg"},
    {songname:"Yet-to-come",filePath: "songs/yet-to-come.mp3",coverPath:"covers/life-goes-on.jpg"},
    {songname:"Butter",filePath: "songs/BTS-Butter.mp3",coverPath:"covers/life-goes-on.jpg"},
    {songname:"Fake-love",filePath: "songs/Fake-Love.mp3",coverPath:"covers/life-goes-on.jpg"},
    {songname:"BTS-on",filePath: "songs/BTS-ON.mp3",coverPath:"covers/life-goes-on.jpg"},
]

//audioElement.play();

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressbar.value=progress;
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value *audioElement.duration /100;
})
const makeallplays = () =>{
    Array.from( document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
    })
}

Array.from( document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click',(e)=>{
       /*console.log(e.target);*/
       makeallplays();
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
    })
});