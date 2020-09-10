<?php $content = getPageContent('home'); ?>
<div>
    <h1 class="col-md-12"><?php print $content['title']; ?></h1>
</div>

<!-- 4 box layout -->

<div class="row cursor center-text-LR">
    <div class="col-md-3">
        <img
            src="assets/img/home/food-1.jpg"
            alt="food-1"
            class="food img-responsive lar-size"
            number="1"
        />
        <div class="text-box-1 hideBoxes">
            <h3 class="row-header">Choose Your Meals</h3>
            <p class="row-text">
                Curated, easy-to-follow recipes every week, customisable by you
            </p>
        </div>
    </div>

    <div class="col-md-3">
        <img
            src="assets/img/home/food-1.jpg"
            alt="food-1"
            class="food img-responsive lar-size"
            number="2"
        />
        <div class="text-box-2 hideBoxes">
            <h3 class="row-header">Choose Your Meals</h3>
            <p class="row-text">
                Curated, easy-to-follow recipes every week, customisable by you
            </p>
        </div>
    </div>

    <div class="col-md-3">
        <img src="assets/img/home/food-1.jpg" alt="food-1" class="food
          img-responsive lar-size"" number=3 />
        <div class="text-box-3 hideBoxes">
            <h3 class="row-header">Choose Your Meals</h3>
            <p class="row-text">
                Curated, easy-to-follow recipes every week, customisable by you
            </p>
        </div>
    </div>

    <div class="col-md-3">
        <img
            src="assets/img/home/food-1.jpg"
            alt="food-1"
            class="food img-responsive lar-size"
            number="4"
        />
        <div class="food text-box-4 hideBoxes">
            <h3 class="row-header">Choose Your Meals</h3>
            <p class="row-text">
                Curated, easy-to-follow recipes every week, customisable by you
            </p>
        </div>
    </div>
</div>


<!-- body section -->

<?php print $content['body']; ?>

<!-- bottom section -->

<div id="food-plan-section" class="row">
    <div class="col-md-12">
        <h2>
            Good for <b>you</b>. Better for the <b>planet</b>.<br />
            Best for your <b>wallet</b>.
        </h2>
    </div>
    <div class="col-md-12">
        <div class="col-md-6">
            <img
                src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_660/hellofresh_website/be/cms/homepage/main_section/desktop_goodforyou-v2.png"
            />
        </div>
        <div class="col-md-6">
            <i class="fas fa-comments-dollar"></i>
            <div class="food-plan-option">
                <h4>Time saver</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus!
                </p>
            </div>
            <br />
            <i class="fas fa-comments-dollar"></i>
            <div class="food-plan-option">
                <h4>Time saver</h4>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus!
                </p>
            </div>
            <br />
            <i class="fas fa-comments-dollar"></i>
            <div class="food-plan-option">
                <h4>Time saver</h4>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus!
                </p>
            </div>
            <br />
        </div>
    </div>
</div>

