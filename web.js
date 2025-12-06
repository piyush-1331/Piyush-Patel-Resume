// Animate skill bars on page load
window.addEventListener("load", function () {
    const skillFills = document.querySelectorAll(".skill-fill");
    skillFills.forEach((fill, index) => {
      setTimeout(() => {
        const width = fill.getAttribute("data-width");
        fill.style.width = width + "%";
      }, index * 200);
    });
});

// Download resume function
function downloadResume() {
    const button = document.querySelector(".download-btn");
    const downloadText = document.getElementById("download-text");
    const resume = document.getElementById("resume-content");

    // Lock layout height to prevent shifting
    const originalHeight = resume.offsetHeight;
    resume.style.height = originalHeight + "px";

    // Hide download button
    button.style.display = "none";

    // Get current date for filename
    const today = new Date();
    const dateStr = today.getFullYear() + '-' + 
                    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(today.getDate()).padStart(2, '0');

    const options = {
        margin: [0.1, 0.1, 0.1, 0.1],
        filename: "Piyush_Patel-Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollX: 0,
            scrollY: 0,
            backgroundColor: "#ffffff"
        },
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf()
        .set(options)
        .from(resume)
        .save()
        .then(() => {
            // Show button again
            button.style.display = "block";
            resume.style.height = "auto";
        })
        .catch((error) => {
            console.error("PDF generation error:", error);
            button.style.display = "block";
            resume.style.height = "auto";
        });
}

// Print functionality
function printResume() {
    window.print();
}

// Add keyboard shortcut for printing
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        printResume();
    }
});
