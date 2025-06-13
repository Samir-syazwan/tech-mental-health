document.addEventListener('DOMContentLoaded', function() {
    // Select necessary elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Page navigation (managing active class and page visibility)
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the page to show from the data-page attribute
            const pageToShow = this.getAttribute('data-page');
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageToShow).classList.add('active');
            
            // Update active nav link
            navLinkItems.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            
            // Scroll to top
            window.scrollTo(0, 0);

            // Load Power BI script if navigating to the dashboard page
            if (pageToShow === 'dashboard') {
                loadPowerBIScript(); // Call this function only when the dashboard page is clicked
            }
        });
    });

    // Simple form submission (for the contact form)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

});

// Power BI Embed Configuration
function embedPowerBIReport() {
    // Configuration object for your Power BI report
    const config = {
        type: 'report',
        tokenType: models.PowerBITokenType.Embed,
        accessToken: 'YOUR_ACCESS_TOKEN', // Replace with your token
        embedUrl: 'YOUR_EMBED_URL',       // Replace with your embed URL
        id: 'YOUR_REPORT_ID',             // Replace with your report ID
        permissions: models.Permissions.All,
        settings: {
            filterPaneEnabled: true,
            navContentPaneEnabled: true,
            background: models.BackgroundType.Transparent
        }
    };

    // Get reference to the HTML element
    const embedContainer = document.getElementById('powerbi-embed-container');
    
    // Embed the report
    const report = powerbi.embed(embedContainer, config);
    
    // Add event handlers
    report.on('loaded', function() {
        console.log('Report loaded successfully');
        document.querySelector('.powerbi-notice').style.display = 'none';
    });
    
    report.on('error', function(event) {
        console.error('Power BI error:', event.detail);
    });

    return report;
}

// Fullscreen functionality for Power BI
document.getElementById('fullscreen-btn')?.addEventListener('click', function() {
    const report = powerbi.get(document.getElementById('powerbi-embed-container'));
    report.fullscreen();
});

// Print functionality for Power BI
document.getElementById('print-btn')?.addEventListener('click', function() {
    const report = powerbi.get(document.getElementById('powerbi-embed-container'));
    report.print();
});

// Refresh functionality for Power BI
document.getElementById('refresh-dashboard')?.addEventListener('click', function() {
    location.reload();
});

// Load Power BI script and embed when ready
function loadPowerBIScript() {
    if (!window.powerbi) {
        const script = document.createElement('script');
        script.src = 'https://npmcdn.com/powerbi-client@2.4.7/dist/powerbi.min.js';
        script.onload = function() {
            embedPowerBIReport();
        };
        document.head.appendChild(script);
    }
}
