// Function to toggle the visibility of an article
function toggleArticleVisibility(article) {
    // Get all articles on the page
    let articles = document.querySelectorAll('article');
    
    // Hide all articles
    articles.forEach(function(article) {
        article.classList.remove('show-article');
    });
    
    // Add a delay before showing the clicked article to ensure the transition effect
    setTimeout(function() {
        // Show the clicked article
        article.classList.toggle('show-article');

        // Show the close button for the clicked article
        let closeButton = article.querySelector('.close-button');
        if (closeButton) {
            closeButton.style.display = 'block';
        }
    }, 125); // 0.5 seconds delay (500 milliseconds)
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
    // Get all navigation buttons
    let navButtons = document.querySelectorAll('.nav button');

    // Add click event listeners to all navigation buttons
    navButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Prevent the default button behavior
            event.preventDefault();
            
            // Get the target article's ID from the button's onclick attribute
            let targetId = this.getAttribute('onclick').match(/#(\w+)/)[1];
            let targetArticle = document.getElementById(targetId);

            // If the target article exists, toggle its visibility
            if (targetArticle) {
                toggleArticleVisibility(targetArticle);
            }
        });
    });

    // Add click event listener to the close buttons
    let closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', closeImageViewer);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeSwitcher = document.getElementById('theme-switcher');

    themeSwitcher.addEventListener('click', function() {
        const body = document.body;

        // Toggle between light and dark themes
        body.classList.toggle('light');
        body.classList.toggle('dark');
    });
});

