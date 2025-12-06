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

    // Hide button BEFORE PDF capture
    button.style.display = "none";

    // Disable button and show loading text
    downloadText.style.color = "black";
    button.disabled = true;

    const element = document.getElementById("resume-content");

    const options = {
        margin: [0.1, 0.1, 0.1, 0.1],
        filename: "Piyush_Resume.pdf",
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
        .from(element)
        .save()
        .then(() => {
            // Show button back AFTER PDF is done
            button.style.display = "block";
            downloadText.style.color = "white";
            button.disabled = false;
        })
        .catch(() => {
            button.style.display = "block";
            downloadText.style.color = "white";
            button.disabled = false;
        });}

  
  
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
