document.getElementById("icons-bag-js").addEventListener("click", function() {
    document.querySelector(".bag-js").style.display = "block"; 
    document.body.classList.add("no-scroll"); // Disable scrolling when modal is open
});

document.querySelector(".bag-js button").addEventListener("click", function() {
    document.querySelector(".bag-js").style.display = "none";
    document.body.classList.remove("no-scroll"); // Enable scrolling when modal closes
});


document.addEventListener("DOMContentLoaded", function () {
    const requestButton = document.querySelector(".request-dish");
    const modal = document.querySelector(".modal-overlay");
    const cancelButton = document.querySelector(".cancel-btn");

    // Open Modal
    requestButton.addEventListener("click", function () {
        modal.style.display = "flex";
        document.body.classList.add("modal-open"); // Prevent scrolling
    });

    // Close Modal when Clicking Cancel
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Enable scrolling
    });

    // Close Modal when Clicking Outside
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});


// Carousel 

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    const visibleItems = 3;
    let currentIndex = 0; // Start at the first item

    function updateView() {
        const offset = -(100 / visibleItems) * currentIndex;
        track.style.transform = `translateX(${offset}%)`;

        // Add 'active' class to center image
        items.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex + 1);
        });

        // Enable/disable buttons accordingly
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= totalItems - visibleItems;
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateView();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateView();
        }
    });

    updateView();
});


//Video 
document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".service-video");
    const playButton = document.querySelector(".video-btn");

    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playButton.innerHTML = "❚❚"; // Pause icon
        } else {
            video.pause();
            playButton.innerHTML = "▶"; // Play icon
        }
    });
});
