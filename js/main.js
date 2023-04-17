    // Müzik çaları etkileşimli hale getirmek için gereken elemanları seçiyoruz
    var music = document.getElementById("music");
    var playButton = document.getElementById("pause-button");
    var songName = document.getElementById("song-name");
    var albumArt = document.getElementById("album-art");
    var songList = [
  {
    songName: "Take it easy",
    songSrc: "mp3/take.mp3",
    albumArtSrc: "img/ab67616d0000b2734eb24bfd49d01e0f3c57a410.jfif"
  },
  {
    songName: "Oh Darling",
    songSrc: "mp3/darling.mp3",
    albumArtSrc: "img/artworks-000292044990-y4ouvc-t500x500.jpg"
  },
  {
    songName: "Pallet-Waltz No.1",
    songSrc: "mp3/Pallet - Waltz No. 1.mp3",
    albumArtSrc: "img/artworks-000157622224-4akdxg-t500x500.jpg"
  }];
    var currentSongIndex = 0;

    // playeri aktiv edilməsi
    function playMusic() {
        music.play();
        playButton.innerHTML = '<i id="play-pause-icon" class=" icon fa fa-pause" aria-hidden="true"></i>';
    }

    // playerin pauza funksyası
    function pauseMusic() {
        music.pause();
        playButton.innerHTML = '<i id="play-pause-icon" class=" icon fa fa-play" aria-hidden="true"></i>';
    }

    // musiqi dəyişdirmək funksiyası
    function changeSong(index) {
        currentSongIndex = index;
        music.src = songList[index].songSrc;
        songName.innerHTML = songList[index].songName;
        albumArt.src = songList[index].albumArtSrc;
        playMusic();
    }

    // geriyə getmək funksiyası
    document.getElementById("step_backward").addEventListener("click", function() {
        currentSongIndex = (currentSongIndex === 0) ? songList.length - 1 : currentSongIndex - 1;
        changeSong(currentSongIndex);
    });

    // irəliyə keçmək funksiyası
    const nextButton = document.getElementById("next-button");

    nextButton.addEventListener("click", () => {
      currentSongIndex++;
    
      if (currentSongIndex >= songList.length) {
        currentSongIndex = 0;
      }
    
      changeSong(currentSongIndex);
    });
    

    // dayandırmaq və davam etdirən funksiya
    playButton.addEventListener("click", function() {
        if (music.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });