document.addEventListener("DOMContentLoaded", function() {
    // Function to handle search button click
    document.getElementById("searchButton").addEventListener("click", function() {
        // Get the value of the search input
        var searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();
        
        // Redirect based on search query
        switch (searchQuery) {
            case "science":
                window.location.href = "science.html";
                break;
            case "animal":
                window.location.href = "animal.html";
                break;
            case "history":
                window.location.href = "history.html";
                break;
            case "cartoon":
                window.location.href = "cartoon.html";
                break;
            case "animation":
                window.location.href = "cartoon.html";
                break;
            case "general knowledge":
                window.location.href = "gk.html";
                break;
            case "nature":
                window.location.href = "science.html";
                break;
            case "sports":
                window.location.href = "sports.html";
                break;

            default:
                // If search query doesn't match any category, do something else or show a message
                alert("No matching category found for: " + searchQuery);
        }
    });
});
