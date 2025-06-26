document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Handle mobile hamburger toggle
    hamburger?.addEventListener('click', function (e) {
        e.stopPropagation();
        navLinks?.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Close hamburger menu when clicking outside
    document.addEventListener('click', function (e) {
        const isClickInside = navLinks?.contains(e.target) || hamburger?.contains(e.target);
        if (!isClickInside) {
            navLinks?.classList.remove('active');
            hamburger?.setAttribute('aria-expanded', false);
        }
    });

    // SPA-style navigation
    navLinkItems.forEach(link => {
        link.addEventListener('click', function (e) {
            const pageToShow = this.getAttribute('data-page');

            if (pageToShow) {
                e.preventDefault(); // Only prevent default for internal SPA navigation

                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('active');
                });

                // Show selected page if exists
                const targetPage = document.getElementById(pageToShow);
                if (targetPage) {
                    targetPage.classList.add('active');
                }

                // Update active link styling
                navLinkItems.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');

                // Scroll to top and close mobile menu
                window.scrollTo(0, 0);
                navLinks?.classList.remove('active');

                // Load Power BI if needed
                if (pageToShow === 'dashboard') {
                    loadPowerBIScript();
                }
            }
            // If no data-page, it's a normal link. Let it navigate.
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

// Power BI Embed Setup
function embedPowerBIReport() {
    const config = {
        type: 'report',
        tokenType: models.PowerBITokenType.Embed,
        accessToken: 'YOUR_ACCESS_TOKEN', // Replace with real token
        embedUrl: 'YOUR_EMBED_URL',       // Replace with real URL
        id: 'YOUR_REPORT_ID',             // Replace with real report ID
        permissions: models.Permissions.All,
        settings: {
            filterPaneEnabled: true,
            navContentPaneEnabled: true,
            background: models.BackgroundType.Transparent
        }
    };

    const embedContainer = document.getElementById('powerbi-embed-container');
    const report = powerbi.embed(embedContainer, config);

    report.on('loaded', () => {
        console.log('Power BI Report loaded');
        document.querySelector('.powerbi-notice')?.style?.setProperty('display', 'none');
    });

    report.on('error', (event) => {
        console.error('Power BI error:', event.detail);
    });

    return report;
}

// Power BI Fullscreen
document.getElementById('fullscreen-btn')?.addEventListener('click', () => {
    const report = powerbi.get(document.getElementById('powerbi-embed-container'));
    report.fullscreen();
});

// Power BI Print
document.getElementById('print-btn')?.addEventListener('click', () => {
    const report = powerbi.get(document.getElementById('powerbi-embed-container'));
    report.print();
});

// Refresh Dashboard
document.getElementById('refresh-dashboard')?.addEventListener('click', () => {
    location.reload();
});

// Lazy load Power BI script
function loadPowerBIScript() {
    if (!window.powerbi) {
        const script = document.createElement('script');
        script.src = 'https://npmcdn.com/powerbi-client@2.4.7/dist/powerbi.min.js';
        script.onload = function () {
            embedPowerBIReport();
        };
        document.head.appendChild(script);
    }
}
