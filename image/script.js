document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button-group button");
    const cards = document.querySelectorAll(".content-card");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = button.getAttribute("data-target");

            // 移除所有 active
            cards.forEach(card => card.classList.remove("active"));

            // 给目标卡片添加 active
            const targetCard = document.getElementById(targetId);
            if (targetCard) {
                targetCard.classList.add("active");
            }
        });
    });
});
