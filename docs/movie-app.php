<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/movie-app.css"/>

<main class="container no-gutter">
    <div class="col-static no-fluid">
        <div class="col-200 set-relative hidden-md">
            <div class="sidebar col-200 full-h set-fixed set-l padding-5 ui-dark hidden-md scroll-v">

                <div class="align-l padding-10 icons-no-opacity icons-margin-10-r form-lg add-mobile-menu-l">
                    <h5 class="x-light padding-15 margin-5-b">LIBRARY</h5>
                    <ul class="list-unstyled list-spacer-15 large font-bold block-2nd ease-2nd-btn">
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#tv"></use></svg>
                                TV Shows
                            </a>
                        </li>
                        <li>
                            <a class="btn circle selected" href="#">
                                <svg class="icon"><use href="#film"></use></svg>
                                Films
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#trophy-star"></use></svg>
                                Sports
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#music"></use></svg>
                                Concerts
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#face-smile"></use></svg>
                                Comedy
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#video"></use></svg>
                                Others
                            </a>
                        </li>
                    </ul>

                    <span class="sp-30"></span>

                    <h5 class="x-light padding-15 margin-5-b">NEWS &amp; EVENTS</h5>
                    <ul class="list-unstyled list-spacer-15 x-light large block-2nd ease-2nd-btn">
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#news"></use></svg>
                                News
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#network"></use></svg>
                                Community
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost circle" href="#">
                                <svg class="icon"><use href="#calendar-days"></use></svg>
                                Events
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="row row-no-gap">
            <div class="col-12">

                <div class="padding-30 no-padding-b md-no-padding">

                    <header class="row row-no-gap-t sticky-md icons-no-opacity form-lg" data-classes="shadow-lg">
                        <div class="col-6 hidden-md ease-1st-form">
                            <div class="text text-icon-both margin-15-b circle no-border theme-gray ui-light has-clear">
                                <svg class="icon text-icon-l"><use href="#search"></use></svg>
                                <button type="button" class="clear-form">
                                    <svg class="icon"><use href="#remove"></use></svg>
                                </button>
                                <input type="text" placeholder="Search for movies, TV shows...">
                            </div>
                        </div>
                        <div class="col-6 align-r">
                            <span class="align-c x-dark margin-20-r sm-no-margin ease-1st-btn">
                                <button class="btn btn-square btn-ghost margin-10-l circle left show-mobile-menu-l visible-md">
                                    <svg class="icon"><use href="#bars-left"></use></svg>
                                </button>
                                <button class="btn btn-square btn-ghost circle ease-btn visible-md" onclick="modal.open({source: '.search', bg: 'false'});" data-tooltip data-only="desktop" title="Search">
                                    <svg class="icon"><use href="#search"></use></svg>
                                </button>
                                <button class="btn btn-square btn-ghost circle">
                                    <svg class="icon"><use href="#user"></use></svg>
                                </button>
                                <button class="btn btn-square btn-ghost circle" data-notifier>
                                    <svg class="icon"><use href="#bell"></use></svg>
                                </button>
                                <button class="btn btn-square btn-ghost circle">
                                    <svg class="icon"><use href="#setting"></use></svg>
                                </button>
                                <button class="btn btn-square btn-ghost circle">
                                    <svg class="icon"><use href="#help"></use></svg>
                                </button>
                            </span>
                            <span class="inline-block right no-float-sm">
                                <img class="img-photo img-photo-sm circle margin-10-l sm-no-margin right" src="img/profile-image.jpg" alt="">
                                <span class="margin-3-t inline-block hidden-sm">aeminyuce</span>
                                <span class="small x-dark block hidden-sm">Premium</span>
                            </span>
                        </div>
                    </header>

                </div>
                <div class="padding-15">
                    <div class="padding-10 md-no-padding-h">
                        <div class="padding-10 md-no-padding-h">

                            <div class="col-static">
                                <div class="col-350">
                                    <div class="round set-relative">
                                        <button class="full-w set-absolute set-all opacity-more ease-layout" onclick="modal.open({source: 'https://www.imdb.com/videoembed/vi4235180569', size: '722x300', type: 'iframe'});">
                                            <svg class="icon icon-xxl icon-default xx-light set-absolute set-c"><use href="#video"></use></svg>
                                        </button>
                                        <img class="img-fluid round shadow-lg" src="img/video-poster.jpg" alt="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 padding-30-l no-padding-v md-no-padding">
                                        <span class="sp-15 visible-md"></span>
                                        <h2 class="font-bold">Related Video</h2>
                                        <b class="large">Captain Marvel (2019)</b>
                                        <p class="margin-10-v">
                                            After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls.
                                        </p>
                                        <div class="photos-holder padding-15-h hover-scale-more-2nd ease-2nd-layout">
                                            <a href="#"><img class="img-photo border-lg circle" src="img/profile-image.jpg" alt=""></a>
                                            <a href="#"><img class="img-photo border-lg circle" src="img/profile-image2.jpg" alt=""></a>
                                            <a href="#"><img class="img-photo border-lg circle" src="img/profile-image3.jpg" alt=""></a>
                                            <a class="btn btn-lg circle ease-btn" href="#">+38</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="padding-15">
                    <h2 class="font-bold padding-15-h md-no-padding">Now Showing</h2>
                </div>

                <div class="carousel half-sized margin-15-h md-no-margin" data-col-xl="8" data-col-lg="6" data-col="3" data-col-md="4" data-col-sm="4" data-col-xs="2">
                    <div class="carousel-slider block-2nd hover-scale-2nd ease-layout ease-2nd-layout ease-slow ease-in-out">
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_01.jpg" alt="">
                                <b class="large">Captain Marvel</b>
                                <span class="x-dark margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    7,0 <span class="dark">/10</span> &nbsp; 7+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_02.jpg" alt="">
                                <b class="large">Avengers: Endgame</b>
                                <span class="x-dark margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    8,7 <span class="dark">/10</span> &nbsp; 8+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_03.jpg" alt="">
                                <b class="large">Captain America</b>
                                <span class="x-dark margin-5-b block">2014 &nbsp; Action, Sci-Fi</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    7,8 <span class="dark">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_04.jpg" alt="">
                                <b class="large">Ant-Man</b>
                                <span class="x-dark margin-5-b block">2015 &nbsp; Action, Comedy</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    7,3 <span class="dark">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_05.jpg" alt="">
                                <b class="large">Venom</b>
                                <span class="x-dark margin-5-b block">2018 &nbsp; Action, Thriller</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    6,7 <span class="dark">/10</span> &nbsp; 15+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_06.jpg" alt="">
                                <b class="large">Justice League</b>
                                <span class="x-dark margin-5-b block">2017 &nbsp; Action, Fantasy</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    6,4 <span class="dark">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_01.jpg" alt="">
                                <b class="large">Captain Marvel</b>
                                <span class="x-dark margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    7,0 <span class="dark">/10</span> &nbsp; 7+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_02.jpg" alt="">
                                <b class="large">Avengers: Endgame</b>
                                <span class="x-dark margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    8,7 <span class="dark">/10</span> &nbsp; 8+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_03.jpg" alt="">
                                <b class="large">Captain America</b>
                                <span class="x-dark margin-5-b block">2014 &nbsp; Action, Sci-Fi</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    7,8 <span class="dark">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_04.jpg" alt="">
                                <b class="large">Ant-Man</b>
                                <span class="x-dark margin-5-b block">2015 &nbsp; Action, Comedy</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    7,3 <span class="dark">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_05.jpg" alt="">
                                <b class="large">Venom</b>
                                <span class="x-dark margin-5-b block">2018 &nbsp; Action, Thriller</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    6,7 <span class="dark">/10</span> &nbsp; 15+
                                </span>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_06.jpg" alt="">
                                <b class="large">Justice League</b>
                                <span class="x-dark margin-5-b block">2017 &nbsp; Action, Fantasy</span>
                                <svg class="icon icon-xs font-yellow"><use href="#star-fill"></use></svg>
                                <span class="inline-block margin-2-l margin-10-r">
                                    6,4 <span class="dark">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-nav ease-1st-btn">
                        <button class="carousel-prev btn btn-ghost btn-square round">
                            <svg class="icon"><use href="#angle-left"></use></svg>
                        </button>
                        <span class="dots dark"></span>
                        <button class="carousel-next btn btn-ghost btn-square round">
                            <svg class="icon"><use href="#angle-right"></use></svg>
                        </button>
                    </div>
                </div>

                <span class="sp-15"></span>

                <div class="padding-15">
                    <h2 class="font-bold padding-15-h md-no-padding">Categories</h2>
                </div>

                <div class="carousel half-sized margin-15-h md-no-margin" data-col-xl="6" data-col-lg="6" data-col="3" data-col-md="4" data-col-sm="4" data-col-xs="2">
                    <div class="carousel-slider block-2nd hover-scale-2nd ease-layout ease-2nd-layout ease-slow ease-in-out">
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_01.jpg" alt="">
                                <b class="large">Action</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_02.jpg" alt="">
                                <b class="large">Adventure</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_03.jpg" alt="">
                                <b class="large">Comedy</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_04.jpg" alt="">
                                <b class="large">Sci-Fi</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_05.jpg" alt="">
                                <b class="large">Animation</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_06.jpg" alt="">
                                <b class="large">Horror</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_01.jpg" alt="">
                                <b class="large">Action</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_02.jpg" alt="">
                                <b class="large">Adventure</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_03.jpg" alt="">
                                <b class="large">Comedy</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_04.jpg" alt="">
                                <b class="large">Sci-Fi</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_05.jpg" alt="">
                                <b class="large">Animation</b>
                            </a>
                        </div>
                        <div class="slide-content padding-15">
                            <a class="ease-default" href="#">
                                <img class="img-fluid round block margin-15-b shadow" src="img/movie_category_06.jpg" alt="">
                                <b class="large">Horror</b>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-nav ease-1st-btn">
                        <button class="carousel-prev btn btn-ghost btn-square round">
                            <svg class="icon"><use href="#angle-left"></use></svg>
                        </button>
                        <span class="dots dark"></span>
                        <button class="carousel-next btn btn-ghost btn-square round">
                            <svg class="icon"><use href="#angle-right"></use></svg>
                        </button>
                    </div>
                </div>

                <span class="sp-30"></span>

            </div>
        </div>
    </div>
</main>

<!-- mobile menu -->
<div class="mobile-menu show-l ui-dark ease-layout ease-slow ease-in-out">
    <div class="mobile-menu-title padding-20-v x-large border-b">
        <button class="btn btn-square btn-lg btn-ghost round ease-btn close-mobile-menu">
            <svg class="icon no-opacity"><use href="#remove"></use></svg>
        </button>
        Categories
    </div>
    <div class="mobile-menu-content no-padding scroll-v"></div>
</div>

<!-- modal search -->
<div class="search modal form-lg">
    <div class="modal-container xs-no-padding">

        <form action="#successful">
            <h2>Search</h2>
            <p class="large x-light xs-align-c">Search for movies, TV shows...</p>

            <div class="col-static no-fluid">
                <div class="row row-no-gap-h">
                    <div class="col-12 ease-1st-form">
                        <div class="text text-icon has-clear round-l no-border shadow-in-sm theme-gray ui-x-light ease-form">
                            <button type="button" class="clear-form">
                                <svg class="icon"><use href="#remove"></use></svg>
                            </button>
                            <input class="required" type="text" placeholder="Search">
                        </div>
                        <p class="required-msg large">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="col-100 col-xs-50 padding-10-v">
                    <button class="btn block round-r theme-default2 ui-dark ease-btn" type="submit">
                        <svg class="icon"><use href="#search"></use></svg>
                    </button>
                </div>
            </div>

            <div class="row no-fluid icons-xxl block-2nd icons-no-opacity icons-margin-5-v hover-t-more-2nd theme-gray ease-2nd-btn">
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <svg class="icon"><use href="#tv"></use></svg>
                        <span class="block margin-5-v">TV Shows</span>
                        <span class="dark">1024</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <svg class="icon"><use href="#film"></use></svg>
                        <span class="block margin-5-v">Films</span>
                        <span class="dark">775</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <svg class="icon"><use href="#trophy-star"></use></svg>
                        <span class="block margin-5-v">Sports</span>
                        <span class="dark">316</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <svg class="icon"><use href="#music"></use></svg>
                        <span class="block margin-5-v">Concerts</span>
                        <span class="dark">589</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <svg class="icon"><use href="#face-smile"></use></svg>
                        <span class="block margin-5-v">Comedy</span>
                        <span class="dark">219</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <svg class="icon"><use href="#video"></use></svg>
                        <span class="block margin-5-v">Others</span>
                        <span class="dark">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>