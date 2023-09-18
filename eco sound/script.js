document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPause = document.getElementById("playPause");
    const player = document.getElementById("player");

    playPause.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        playPause.src = "svg/pause.svg";
      } else {
        audio.pause();
        playPause.src = "svg/play.svg";
      }
    });

    document.querySelectorAll("nav a").forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        let bird = this.getAttribute("data-bird");
        audio.src = `sound/${bird}.mp3`;
        player.style.backgroundImage = `url(img/${bird}.jpg)`;
        audio.play();
        playPause.src = "svg/pause.svg";
      });
    });
  });
  logo.addEventListener('mouseover', function() {
    this.setAttribute('src', 'svg/logo-hover.svg');
});

logo.addEventListener('mouseout', function() {
    this.setAttribute('src', 'svg/logo.svg');
});


const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function() {
    links.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuButton = document.getElementById("mobile-menu");
  const nav = document.getElementById("nav");

  mobileMenuButton.addEventListener("click", function() {
    nav.classList.toggle("active");
    this.classList.toggle("active");
  });
});