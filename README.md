# face-mash
Facemash for hacked-students

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Facemash</title>
    <link rel="stylesheet" href="./assets/css/style-prefix.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="header">
        <h1 id="title">FACEMASH</h1>
    </div>
    <div class="container">
        <p id="caption">Were we let into tech for our looks? No. Will we be judged on them? Yes.</p>
        <h2 id="choose-title">Who looks better? Click to Choose.</h2>
    </div>
    <div class="photos">
        <img src="img/244.png" alt="" id="left">
        <div id="or">
            <span>OR</span>
        </div>

        <img src="img/258.png" alt="" id="right">
    </div>
    <script src="app.js"></script>
    <p class="p"> Made by OUR <a href="zuck"><strong>Mark Zuckerberg</strong></a>
</body>

<body>

    <div class="overlay" data-overlay></div>

  <!--
    - MODAL
  -->

  <div class="modal" data-modal>

    <div class="modal-close-overlay" data-modal-overlay></div>

    <div class="modal-content">

      <button class="modal-close-btn" data-modal-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div class="newsletter-img">
        <img src="./n.png" alt="subscribe newsletter" width="400" height="400">
      </div>

      <div class="newsletter">

        <form action="#">

          <div class="newsletter-header">

            <h3 class="newsletter-title">New Photos Everyday.</h3>

            <p class="newsletter-desc">
              Checkout <b>Facemash</b> to see new faces everyday.
            </p>

          </div>

          <!--<input type="email" name="email" class="email-field" placeholder="Email Address" required>
          <button type="submit" class="btn-newsletter">Subscribe</button>-->

        </form>

      </div>

    </div>

  </div>

  <!--
    - custom js link
  -->
  <script src="./assets/js/script.js"></script>

  <!--
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


</body>

</html>
