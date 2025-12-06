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
  
    // Disable button and show loading state
    button.disabled = true;
    downloadText.style.color = "black"
    downloadText.textContent = "Generating PDF...";
  
  
    const element = document.getElementById("resume-content");
    const options = {
      margin: [0.1, 0.1, 0.1, 0.1],
      filename: "Piyush Resume.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
    };
  
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        // Reset button state  
        button.disabled = false;
        downloadText.style.color = "white"
        downloadText.textContent = "Download Resume";
        button.style.display = "block";
        
        
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        alert("Error generating PDF. Please try again.");
        // Reset button state
        button.disabled = false;
        downloadText.style.color = "white"
        downloadText.textContent = "Download Resume";
        button.style.display = "block";
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