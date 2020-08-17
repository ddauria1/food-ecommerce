<div>
    <h1 class="col-md-12"><?php print $data["name"] ?></h1>
</div>

<button onclick="tester1()">new deals</button>

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

<style>
    #food-plan-section {
        margin-top: 120px;
    }

    #food-plan-section h2 {
        text-align: center;
    }

    .food-plan-option {
        margin-left: 60px;
    }

    .food-plan-option p {
        max-width: 400px;
    }

    #food-plan-section .fas {
        float: left;
        color: green;
        font-size: 20px;
    }
</style>
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
                    We deliver everything you need to create delicious dinners from
                    scratch so you spend less time shopping!
                </p>
            </div>
            <br />
            <i class="fas fa-comments-dollar"></i>
            <div class="food-plan-option">
                <h4>Time saver</h4>
                <p>
                    We deliver everything you need to create delicious dinners from
                    scratch so you spend less time shopping!
                </p>
            </div>
            <br />
            <i class="fas fa-comments-dollar"></i>
            <div class="food-plan-option">
                <h4>Time saver</h4>
                <p>
                    We deliver everything you need to create delicious dinners from
                    scratch so you spend less time shopping!
                </p>
            </div>
            <br />
        </div>
    </div>
</div>

<!-- check user age -->

<div class="checkAge center-text-huge">
    <div class="footer-header">
        <h3 class="pad-sm-bottom">Age Check</h3>
        <p class="pad-sm-bottom">
            Please note you must be over the age of 18
        </p>
    </div>

    <div class="form-style">
        <input
            type="number"
            name="user age"
            id="age"
            placeholder="Age"
            class="form-style-input age-form"
            required
        />
        <button class="form-style-button age-submit">
            Send
        </button>
    </div>
</div>

<p class="ageResult"></p>

<!--submit form section -->

<div class="form form-style-border">
    <h3 class="subTitle">Please enter your details below</h3>
    <p class="text">All feilds must be completed</p>

    <div class="form--input">
        <input
            type="text"
            name="first-name"
            placeholder="First Name"
            id="input--firstName"
        />

        <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            id="input--lastName"
        />

        <input
            type="email"
            name="email address"
            id="input--email"
            placeholder="Email Address"
        />

        <button class="submitForm">
            Submit
        </button>

        <p class="form--result"></p>
        <button class="box-hide">X</button>
    </div>
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