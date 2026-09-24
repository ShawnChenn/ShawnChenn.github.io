document.addEventListener("DOMContentLoaded", function () {
    const newsList = document.getElementById("news-list");
    const toggle = document.getElementById("news-toggle");
    if (!newsList || !toggle) return;

    const olderNews = Array.from(newsList.children).slice(5);
    if (olderNews.length === 0) return;

    olderNews.forEach(function (item) {
        item.hidden = true;
    });
    toggle.hidden = false;

    toggle.addEventListener("click", function () {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        olderNews.forEach(function (item) {
            item.hidden = expanded;
        });
        toggle.setAttribute("aria-expanded", String(!expanded));
        toggle.textContent = expanded ? "Show more" : "Show less";
    });
});
