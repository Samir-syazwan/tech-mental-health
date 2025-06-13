<?php
$page = 'contact'; // Contact page
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | Mindful Tech</title>
    <link rel="stylesheet" href="../styles.css">
</head>

<body>
    <header>
        <nav>
            <a href="index.php" class="logo nav-link">Mindful<span>Tech</span></a>
            <ul class="nav-links">
                <li><a href="index.php" class="nav-link">Home</a></li>
                <li>
                    <a href="dashboard.php"
                        class="dashboard-button <?php echo ($page == 'dashboard') ? 'active' : ''; ?>"
                        style="color:white;">
                        Dashboard
                    </a>
                </li>
                <li><a href="about.php" class="nav-link">About</a></li>
                <li><a href="contact.php" class="nav-link active">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="contact" class="page active">
            <h1>Recommendations</h1>
            <p>Have questions about balancing technology and mental health? Reach out to some professionals.</p>
        </section>
        <section id="professional-contacts">
            <h2>Meet the Professionals</h2>
            <p>If you're looking for support with balancing technology use and mental health, here's a list of
                professionals to get in touch with:</p>

            <!-- Background Card -->
            <div class="background-card"></div>

            <!-- Contact Cards -->
            <div class="contact-card">
                <h3>Mental Health Association of Malaysia (MHAM)</h3>
                <p><strong>Details:</strong> MHAM is a national non-governmental organization dedicated to mental
                    health awareness, education, and advocacy.</p>
                <p><strong>Phone:</strong> +603-2780 6803</p>
                <p><strong>Email:</strong> <a href="mailto:info@mhm.org.my">info@mhm.org.my</a></p>
                <p><strong>Website:</strong> <a href="http://www.mhm.org.my" target="_blank">www.mhm.org.com</a></p>
            </div>

            <div class="contact-card">
                <h3>Malaysian Psychiatric Association (MPA)</h3>
                <p><strong>Details:</strong> MPA is an association of psychiatrists in Malaysia that can help you
                    find a qualified psychiatrist or psychologist specializing in mental health issues, including those
                    related to technology addiction.</p>
                <p><strong>Email:</strong> <a href="mailto:mpa@mpa.org.my">mpa@mpa.org.my</a></p>
                <p><strong>Website:</strong> <a href="http://www.mpa.org.my" target="_blank">www.mpa.org.my</a>
                </p>
            </div>

            <div class="contact-card">
                <h3>Psychology Society of Malaysia (PSYM)</h3>
                <p><strong>Details:</strong> PSYM is a professional body for psychologists in Malaysia. They
                    provide a directory of licensed psychologists who can assist with mental health and technology
                    addiction.</p>
                <p><strong>Email:</strong> <a href="mailto:secretariat@psym.org.my">secretariat@psym.org.my</a></p>
                <p><strong>Website:</strong> <a href="http://www.psym.org.my" target="_blank">www.psym.org.my</a>
                </p>
            </div>

            <div class="contact-card">
                <h3>Dr. G. Rajagopal</h3>
                <p><strong>Specialization:</strong> Clinical Psychologist</p>
                <p><strong>Details:</strong>Dr. Rajagopal is a well-known clinical psychologist in Malaysia who has
                    expertise in dealing with mental health issues related to technology usage.</p>
                <p><strong>Phone:</strong> +603-2282 1255 (Clinic)</p>
            </div>

            <div class="contact-card">
                <h3>Mind Matters Counseling</h3>
                <p><strong>Details:</strong> A counseling service that offers professional support for mental health
                    issues, including stress, anxiety, and the impact of technology.</p>
                <p><strong>Phone:</strong> +603-7733 9988</p>
                <p><strong>Email:</strong> <a href="mailto:info@mindmatters.com.my">info@mindmatters.com.my</a></p>
                <p><strong>Website:</strong> <a href="http://www.mindmatters.com.my"
                        target="_blank">www.mindmatters.com.my</a></p>
            </div>

            <div class="contact-card">
                <h3>The International Association for Digital Mental Health (IADMH)</h3>
                <p><strong>Details:</strong> Though international, IADMH works with local professionals to promote
                    digital mental health services and programs, which include managing technology use and its impact on
                    mental health.</p>
                <p><strong>Email:</strong> <a href="mailto:info@iadmh.org">info@iadmh.org</a></p>
                <p><strong>Website:</strong> <a href="http://www.iadmh.org"
                        target="_blank">www.iadmh.org</a></p>
            </div>

        </section>
    </main>

    <footer>
        <p>&copy; 2025 MindfulTech. All rights reserved.</p>
    </footer>
    <script src="../script.js"></script>
</body>

</html>