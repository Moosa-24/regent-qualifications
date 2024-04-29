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

// Create the SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "50");
svg.setAttribute("height", "40");
svg.style.border = "none";
svg.style.zIndex = "2";
svg.style.position = "absolute";
svg.style.bottom = "45px";
svg.style.borderRadius = "0 20px 20px 0";
svg.style.backgroundColor = "red";
svg.style.cursor = "pointer";

// Create a text element inside the SVG for the emoji
const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute("x", "17");
text.setAttribute("y", "23");
text.setAttribute("font-size", "14");
text.setAttribute("fill", "#828FA3");
text.textContent = "⚡";

// Append the text element to the SVG
svg.appendChild(text);

// Append the SVG to the document body
document.body.appendChild(svg);
svg.style.marginTop = "130px";

// Add an event listener to the SVG to toggle the sidebar when clicked
svg.addEventListener("click", function() {
    //toggleSidebar(true); // Open the sidebar when clicked
    svg.style.display = "none"; // Hide the SVG after clicking
});
