document.addEventListener("DOMContentLoaded", function() {
    // 卡片切换
    const buttons = document.querySelectorAll(".button-group button");
    const cards = document.querySelectorAll(".content-card");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-target");
            cards.forEach(card => card.classList.remove("active"));
            const targetCard = document.getElementById(targetId);
            if (targetCard) {
                targetCard.classList.add("active");
            }
        });
    });

    // 背景音乐控制
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");

    musicBtn.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "Play Music";
        }
    });
});
