function searchPosts() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var articles = document.querySelectorAll("article"); // Select all article elements
    articles.forEach(function(article) {
        var title = article.querySelector("h2").innerText.toLowerCase(); // Ensure you are selecting the h2 where the title is
        if (title.includes(input)) {
            article.style.display = "block"; // Show the article
        } else {
            article.style.display = "none"; // Hide the article
        }
    });
}
