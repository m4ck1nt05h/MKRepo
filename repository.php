<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M4CK Files - Repository</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="pipboy_logo.png" alt="Vault Files Logo">
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="repository-section">
        <h1>Repository</h1>
        <form action="uploads.php" method="POST" enctype="multipart/form-data">
            <input type="file" name="fileInput">
            <button type="submit" name="submit">Upload File</button>
        </form>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <div class="contact-info">
                <p>Email: m4ck.1nt05h@gmail.com</p>
            </div>
            <p class="copyright">© 2024 M4CK. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script> <!-- Adicionando o script JavaScript -->
</body>
</html>
