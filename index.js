// Function to toggle the visibility of an article
function toggleArticleVisibility(article) {
    // Get all articles on the page
    let articles = document.querySelectorAll('article');
    
    // Hide all articles
    articles.forEach(function(article) {
        article.classList.remove('show-article');
    });
    
    // Show the clicked article
    article.classList.toggle('show-article');

    // Show the close button for the clicked article
    let closeButton = article.querySelector('.close-button');
    if (closeButton) {
        closeButton.style.display = 'block';
    }
}

// Function to close the image viewer
function closeImageViewer() {
    // Get all articles on the page
    let articles = document.querySelectorAll('article');
    
    // Hide all articles and their close buttons
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
    // Get all navigation links
    let navLinks = document.querySelectorAll('.nav a');

    // Add click event listeners to all navigation links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();
            
            // Get the target article's ID from the link's href attribute
            let targetId = this.getAttribute('href').substring(1);
            let targetArticle = document.getElementById(targetId);

            // If the target article exists, toggle its visibility
            if (targetArticle) {
                toggleArticleVisibility(targetArticle);
            }
        });
    });

    // Check if the page is accessed via a link with an anchor
    if (window.location.hash) {
        // Get the ID of the article specified in the anchor
        let articleId = window.location.hash.substring(1);
        let article = document.getElementById(articleId);
        
        // If the article exists, toggle its visibility
        if (article) {
            toggleArticleVisibility(article);
        }
    }
});
