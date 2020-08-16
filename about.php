<!DOCTYPE html>
<html>
  <head>
    <title>Food | E-Commerce v5</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
      integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
      crossorigin="anonymous"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossorigin="anonymous"
    ></script>

    <script src="assets/js/config.js"></script>
    <script src="assets/js/app.js"></script>
    <link rel="stylesheet" href="assets/css/style.css" />
    <script
      src="https://kit.fontawesome.com/30511564b5.js"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.datatables.net/v/dt/dt-1.10.21/af-2.3.5/b-1.6.3/r-2.2.5/sc-2.0.2/datatables.min.css"
    />

    <script
      type="text/javascript"
      src="https://cdn.datatables.net/v/dt/dt-1.10.21/af-2.3.5/b-1.6.3/r-2.2.5/sc-2.0.2/datatables.min.js"
    ></script>
  </head>
  <body>

  <?php

if(isset($_GET["p"]) && $_GET["p"]=="about"){  header("Location:about.php");
   exit();} 

 if(isset($_GET["p"]) && $_GET["p"]=="contact"){  header("Location:contact.php");
    exit();} 

$data = [
  "name" => "Home | Commernce"
];

if(isset($_GET["p"])){
$data ["name"] = ucfirst($_GET["p"]). " | Commernce";

}

?>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a id="foodStoreName" class="navbar-brand" href="#"
            >Food | E-Commerce</a
          >
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li <?php if(!isset($_GET["p"])){ print "class='active'"; } ?>><a href="index.php">Home</a></li>
            <li <?php if(isset($_GET["p"]) && $_GET["p"]=="about"){ print " class='active' ";} ?> ><a href="index.php?p=about" >About</a></li>
            <li <?php if(isset($_GET["p"]) && $_GET["p"]=="contact"){ print " class='active' ";} ?>><a href="index.php?p=contact">Contact</a></li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
    <main class="container" style="margin-top: 100px;">
      <div>
        <h1 class="col-md-12"><?php print $data["name"] ?></h1>
      </div>

      <!-- currenct table  -->
      <table id="table_id">
        <thead>
          <tr>
            <th>Country</th>
            <th>Currency</th>
            <th>Converstion</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr-test">
            <td>UK</td>
            <td>Pound</td>
            <td>£</td>
          </tr>

          <tr class="tr-test">
            <td>Italy</td>
            <td>Euro</td>
            <td>€</td>
          </tr>

          <tr class="tr-test">
            <td>Australia</td>
            <td>Dollar</td>
            <td>$</td>
          </tr>

          <tr class="tr-test">
            <td>UK</td>
            <td>Pound</td>
            <td>£</td>
          </tr>

          <tr class="tr-test">
            <td>Italy</td>
            <td>Euro</td>
            <td>€</td>
          </tr>

          <tr class="tr-test">
            <td>Australia</td>
            <td>Dollar</td>
            <td>$</td>
          </tr>

          <tr class="tr-test">
            <td>UK</td>
            <td>Pound</td>
            <td>£</td>
          </tr>

          <tr class="tr-test">
            <td>Italy</td>
            <td>Euro</td>
            <td>€</td>
          </tr>

          <tr class="tr-test">
            <td>Australia</td>
            <td>Dollar</td>
            <td>$</td>
          </tr>
        </tbody>
      </table>


    </main>

    <footer class="container">
      <!-- line between -->

      <div class="space-line"></div>

      <!-- top section of footer -->

      <div class="footer-top pad-sm-bottom">
        <div class="footer-header">
          <h3 class="pad-sm-bottom">Stay Updated</h3>
          <p class="pad-sm-bottom">
            Keep up to date with delicious recipes, offers and news
          </p>
        </div>

        <div>
          <input
            type="email"
            name="Email address"
            id="email"
            placeholder="email address"
          />
          <button class="border-button">Send</button>
        </div>
      </div>

      <!-- line between -->

      <div class="space-line"></div>

      <!-- middle section of footer -->
      <div class="row pad-sm-bottom center-text-LR">
        <div class="col-md-2">
          <hi class="title"> Hello Fresh</hi>
          <div class="list">
            <ul>
              <li class="pad-sm-top"><a href="#">Gift cards</a></li>
              <li><a href="#">Unidays</a></li>
              <li><a href="#">Student Beans</a></li>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Affiliate</a></li>
            </ul>
          </div>
        </div>

        <div class="col-md-2">
          <hi class="title"> Our Company</hi>
          <div class="list">
            <ul class="line-height-sm">
              <li class="pad-sm-top"><a href="#">Hello Fresh Group</a></li>
              <li>
                <a href="#">Careers </a>
                <strong class="border"> we're hiring!</strong>
              </li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>

        <div class="col-md-2">
          <hi class="title"> Help</hi>
          <div class="list">
            <ul class="line-height-sm">
              <li class="pad-sm-top"><a href="#">Find an answer</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div class="col-md-2"></div>

        <div class="col-md-4">
          <hi class="title"> Download our App</hi>
          <div class="list">
            <ul>
              <li class="pad-sm-bottom pad-sm-top">
                Manage your deliveries from anywhere, anytime.
              </li>
            </ul>
            <img
              src="assets/img/app-store.png"
              alt="apple store"
              class="med-size"
            />
            <img
              src="assets/img/google-app.png"
              alt="google store"
              class="med-size"
            />
          </div>
        </div>
      </div>

      <!-- line between -->

      <div class="space-line"></div>

      <!-- bottom section of footer -->
      <div class="row2 center-text-LR2 center-text-TP">
        <div class="col-md-2">
          <hi> &copy; Hello Fresh 2020</hi>
        </div>

        <div class="col-md-4">
          <a href="#" class="textColor spacing-sm hov underline"
            >Terms and Conditions</a
          >
          <a href="#" class="textColor spacing-sm hov underline">Privacy</a>
          <a href="#" class="textColor hov underline"
            >Modern Slavery Statement</a
          >
        </div>

        <div class="col-md-2 hov">
          <p class="country-location"></p>
        </div>

        <div class="col-md-4 position-right">
          <i class="fab fa-facebook-square fa-3x spacing-med"></i>
          <i class="fab fa-twitter-square fa-3x spacing-med"></i>
          <i class="fab fa-instagram-square fa-3x"></i>
        </div>
      </div>
    </footer>
  </body>
</html>
