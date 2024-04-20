// Function to toggle article visibility
function toggleArticleVisibility(article) {
    let articles = document.querySelectorAll('article');
    articles.forEach(function(article) {
        article.classList.remove('show-article');
    });
    article.classList.toggle('show-article');

    // Show the close button
    let closeButton = article.querySelector('.close-button');
    if (closeButton) {
        closeButton.style.display = 'block';
    }
}

// Function to close the image viewer
function closeImageViewer() {
    let articles = document.querySelectorAll('article');
    articles.forEach(function(article) {
        article.classList.remove('show-article');
        // Hide the close button
        let closeButton = article.querySelector('.close-button');
        if (closeButton) {
            closeButton.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            let targetArticle = document.getElementById(targetId);

            if (targetArticle) {
                toggleArticleVisibility(targetArticle);
            }
        });
    });

    // Check if the page is accessed via a link with an anchor
    if (window.location.hash) {
        let articleId = window.location.hash.substring(1);
        let article = document.getElementById(articleId);
        if (article) {
            toggleArticleVisibility(article);
        }
    }
});
