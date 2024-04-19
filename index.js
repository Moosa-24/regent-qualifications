document.addEventListener('DOMContentLoaded', function() {
    // Get all the anchor tags in the navigation
    let navLinks = document.querySelectorAll('.nav a');

    // Loop through each anchor tag
    navLinks.forEach(function(link) {
        // Add click event listener to each anchor tag
        link.addEventListener('click', function(event) {
            // Prevent the default action of the anchor tag
            event.preventDefault();

            // Get the ID of the article to display from the href attribute
            let targetId = link.getAttribute('href').substring(1);

            // Find the article with the corresponding ID
            let targetArticle = document.getElementById(targetId);

            // Scroll to the article
            if (targetArticle) {
                targetArticle.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
