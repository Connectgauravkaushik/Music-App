const music = new Audio('audio/2.mp3');

const songs = [
    {
        id: 1,
        songName: `Lo_aay_barsaty<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/1.jpg",

    },
    {
        id: 11,
        songName: `Maan Meri Jaan<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/11.jpg",

    },
    {
        id: 12,
        songName: `Malang Sajna<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/12.jpg",

    },
    {
        id: 13,
        songName: `Mission-Raniganj<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/13.jpg",

    },
    {
        id: 14,
        songName: `O piya<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/14.jpg",

    },
    {
        id: 15,
        songName: `Pyaar Hota Kayi Baar Hai<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/15.jpg",

    },
    {
        id: 16,
        songName: `Raataan Lambiyan<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/16.jpg",

    },
    {
        id: 8,
        songName: `Bariya <br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/17.jpg",

    },
    {
        id: 9,
        songName: `Saawan Aa Gaya <br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/18.jpg",

    },
    {
        id: 10,
        songName: `Tere Hawaale<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/19.jpg",

    },
    {
        id: 20,
        songName: `Tere Pyaar Mein<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/20.jpg",

    },
    {
        id: 12,
        songName: `Tu hai toh mujhe phir<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/21.jpg",

    },
    {
        id: 13,
        songName: `herriye <br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/herriye_song_image.jpg",

    },
    {
        id: 14,
        songName: `Ram Siya Ram <br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/2.jpg",

    },
    {
        id: 15,
        songName: `Hanuman Chaliasa<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/8.jpg",

    },

    {
        id: 16,
        songName: `Dhokha<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/3.jpg",

    },
    {
        id: 17,
        songName: `Gone Girl<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/7.jpg",

    },
    {
        id: 18,
        songName: `Cheques <br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/6.jpg",

    },

    {
        id: 7,
        songName: `Har Har Shambhu<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/9.jpg",

    },
    {
        id: 19,
        songName: `Hum-Toh-Deewane<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/10.jpg",

    },
    // {
    //     id: 20,
    //     songName: `Kesariya<br>
    //     <div class="subtitle">Arjit singh</div>
    // `,
    //     poster: "image/Kesariya-Audio-Teaser-From-Brahmastra.jpg",

    // },
    {
        id: 21,
        songName: `Kya Loge Tum<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/Kya-Loge-Tum-Hindi.jpg",

    },
    {
        id: 22,
        songName: `Chaleya<br>
        <div class="subtitle">Arjit singh</div>
    `,
        poster: "image/5.jpg",

    }

];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wavess = document.getElementById('waves');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wavess.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    } else {
        music.pause();
        wavess.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let Pop_Song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    Pop_Song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    Pop_Song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index
        })
        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

    });

})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let minutes = Math.floor(music_dur / 60);
    let Seconds = Math.floor(music_dur % 60);
    if (Seconds < 10) {
        Seconds = `0${Seconds}`
    }
    currentEnd.innerText = `${minutes}:${Seconds}`;

    let StartMin = Math.floor(music_curr / 60);
    let StartSec = Math.floor(music_curr % 60);

    if (StartSec < 10) {
        StartSec = `0${StartSec}`
    }
    currentStart.innerText = `${StartMin}:${StartSec}`;

    let Progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = Progressbar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let volo_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    volo_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songItem')).length;
console.log(index);
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
})

next.addEventListener('click', () => {
    index++;
    if(index >  Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
})
