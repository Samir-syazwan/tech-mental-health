<?php
$page = 'about'; // About page
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About | Mindful Tech</title>
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
                <li><a href="about.php" class="nav-link active">About</a></li>
                <li><a href="contact.php" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about" class="page active">
            <div class="about-wrapper">
                <!-- Video -->
                <video class="about-video" autoplay muted playsinline loop style="border: 1px solid #ccc;">
                    <source src="../img/Video_on_Digital_Device_Health.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

                <!-- Content Card -->
                <div class="about-card">
                    <h1>About MindfulTech</h1>

                    <h2>Our Mission</h2>
                    <p>At MindfulTech, we believe technology should enhance life, not detract from it. Our mission is to
                        help people develop healthier relationships with their digital devices.</p>

                    <h2>The Problem We Solve</h2>
                    <p>Excessive screen time and compulsive technology use have been linked to increased anxiety,
                        depression, and sleep disturbances. Yet in our modern world, completely disconnecting isn't
                        realistic for most people.</p>

                    <p>We provide the tools to find balance and helping you use technology intentionally rather than
                        compulsively.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 MindfulTech. All rights reserved.</p>
    </footer>
    <script src="../script.js"></script>
</body>

</html>