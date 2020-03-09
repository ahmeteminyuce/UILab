<!-- custom CSS -->
<style>
    body { background-color: #eceef5; }

    .theme-app.ui-x-light,.theme-app .ui-x-light:not([class*="theme-"]) { background-color: #e1eeff; }
    .theme-app.ui-light,.theme-app .ui-light:not([class*="theme-"]) { background-color: #94c3ff; }
    .theme-app.ui-dark,.theme-app .ui-dark:not([class*="theme-"]) { background-color: #0070ff; }
    .theme-app.ui-text,.theme-app .ui-text:not([class*="theme-"]) { color: #0070ff; }
    .theme-app.ui-border,.theme-app .ui-border:not([class*="theme-"]) { border-color: #0070ff; }
    .theme-app.ui-x-dark,.theme-app .ui-x-dark:not([class*="theme-"]) { background-color: #005acc; }

    .theme-app2.ui-x-light,.theme-app2 .ui-x-light:not([class*="theme-"]) { background-color: #fddee4; }
    .theme-app2.ui-light,.theme-app2 .ui-light:not([class*="theme-"]) { background-color: #f3aebb; }
    .theme-app2.ui-dark,.theme-app2 .ui-dark:not([class*="theme-"]) { background-color: #ff103b; }
    .theme-app2.ui-text,.theme-app2 .ui-text:not([class*="theme-"]) { color: #ff103b; }
    .theme-app2.ui-border,.theme-app2 .ui-border:not([class*="theme-"]) { border-color: #ff103b; }
    .theme-app2.ui-x-dark,.theme-app2 .ui-x-dark:not([class*="theme-"]) { background-color: #cf1335; }

    .col-35 { width: 35px; }

    .app { background-color: #f7f8fb; border-radius: 42px; }
    .card { height: 700px; border-radius: 36px; }
    .data-container { height: 532px; }

    .round:not(.tooltip):not(.btn-square) { border-radius: 16px; }
    .list-group.round > ul > li:first-child,.list-group.round > ul > li:first-child > a { border-top-left-radius: 16px; border-top-right-radius: 16px; }
    .list-group.round > ul > li:last-child,.list-group.round > ul > li:last-child > a { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; }

    .tab-content { border-radius: 28px; }

    .contacts { white-space: nowrap; }
    .contacts li { border: solid 3px transparent; position: relative; }
    .contacts li:after,.status:after { content: attr(data-msg); color: #fff; font-size: 11px; font-weight: bold; text-align: center; width: 18px; height: 18px; background-color: #ff103b; display: block; border: solid 2px #fff; border-radius: 50%; position: absolute; }
    .contacts li:after { bottom: -2px; right: -2px; }
    .contacts li.online:after,.status.online:after { background-color: #16ca53; }
    .status { display: inline-block; position: relative; }
    .status:after { bottom: 2px; right: 2px; }

    .messages { height: 436px; }
    .messages li { max-width: 80%; padding-left: 35px; clear: both; }
    .messages li:not(:last-child) { margin-bottom: 3px; }
    .messages li.left + .right,.messages li.right + .left { margin-top: 25px; }
    .messages li [class*="img-photo"] { margin-left: -35px; float: left; }
    .messages li > span:not([class*="img-photo"]) { padding: 6px 10px; display: inline-block; border-radius: 16px; }

    @media (min-width: 1200px) {
        .fixed { max-width: 1600px; }
    }
    @media (prefers-color-scheme: dark) {
        .app { background-color: #21242b; }
        .theme-app.ui-x-light,.theme-app .ui-x-light:not([class*="theme-"]) { background-color: #434b5a; }
        .contacts li:after,.status:after { border-color: #2f343e; }
    }
</style>

<!-- custom js -->
<script>

    lineCharts.colors = ['#0070ff', '#ff103b', '#ff6384', '#9966ff', '#4bc0c0', '#ffcd56', '#84594d', '#bbc451', '#6a6a6a', '#647bc1'];

    lineCharts.bottom = 0; // set bottom space (px)
    lineCharts.left = 6; // set left space (px)

    lineCharts.showBgGrid = false; // set showing bg grid
    lineCharts.showGridText = false; // set showing grid numbers

    lineCharts.gridStroke = 0; // set grid stroke width

    (function () {

        'use strict';
        events.onload(function () {

            function scroller() {

                var opened = selector('.open .messages')[0];
                opened.scrollTo(0, opened.offsetHeight);

            }

            scroller();
            events.on('.contacts li', 'click', scroller);

        });

    }());

</script>

<main class="container no-gutter">
    <div class="fixed padding-30-v no-scroll">

        <div class="row row-lg-gap sm-fluid padding-30-b">
            <div class="col-lg-3 col-6">

                <div class="app padding-15 theme-app">

                    <div class="card no-margin-b">

                        <div class="card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn" data-notifier>
                                        <svg class="icon ui-text"><use href="#bell"></use></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn">
                                        <svg class="icon ui-text"><use href="#settings"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="card-side padding-10">

                            <div class="row row-md-gap no-fluid ease-2nd-btn">
                                <div class="col-4">
                                    <a class="btn btn-multi no-line-height padding-10-v block round ui-x-light" href="#">
                                        <span class="ui-text x-largest">23</span>
                                        <span class="block">
                                            <span class="x-dark-ui small ellipsis">Waiting</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="btn btn-multi no-line-height padding-10-v block round ui-x-light" href="#">
                                        <span class="ui-text x-largest">258</span>
                                        <span class="block">
                                            <span class="x-dark-ui small ellipsis">Expert</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="btn btn-multi no-line-height padding-10-v block round ui-x-light" href="#">
                                        <span class="ui-text x-largest">49</span>
                                        <span class="block">
                                            <span class="x-dark-ui small ellipsis">First Audit</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div class="row row-md-gap no-fluid ease-2nd-btn">
                                <div class="col-4">
                                    <a class="btn btn-ghost btn-multi no-line-height padding-10-v block round border-dual" href="#">
                                        <span class="x-dark xx-large">19</span>
                                        <span class="block">
                                            <span class="x-dark-ui small ellipsis">Second Audit</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="btn btn-ghost btn-multi no-line-height padding-10-v block round border-dual" href="#">
                                        <span class="x-dark xx-large">20</span>
                                        <span class="block">
                                            <span class="x-dark-ui small ellipsis">Paused</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="btn btn-ghost btn-multi no-line-height padding-10-v block round border-dual" href="#">
                                        <span class="x-dark xx-large">68</span>
                                        <span class="block">
                                            <span class="x-dark-ui small ellipsis">Delayed</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class="card-side padding-15 no-padding-b">
                            <h5 class="bold">Last Week</h5>
                        </div>

                        <div class="card-side padding-15 padding-5-b">
                            <div class="line-charts margin-15-b ease-line-charts" data-size="5,15" data-x="1,2,3,4,5,6,7">
                                <ul class="line" data-name="1st" data-type="curved dotted">
                                    <li data-y="159"></li>
                                    <li data-y="120"></li>
                                    <li data-y="20"></li>
                                    <li data-y="118"></li>
                                    <li data-y="37"></li>
                                    <li data-y="0"></li>
                                    <li data-y="76"></li>
                                </ul>
                                <ul class="line" data-name="2nd" data-type="curved filled">
                                    <li data-y="55"></li>
                                    <li data-y="70"></li>
                                    <li data-y="92"></li>
                                    <li data-y="48"></li>
                                    <li data-y="166"></li>
                                    <li data-y="98"></li>
                                    <li data-y="116"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="card-side padding-15-h">
                            <h5 class="bold">Work Intensity</h5>
                        </div>

                        <div class="card-side padding-15">
                            <div class="row row-md-gap no-fluid">
                                <div class="col-4">
                                    <div class="donut-chart ease-donut-chart">
                                        <strong>SS</strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="#0070ff" data-percent="17" data-title="17%" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="donut-chart ease-donut-chart">
                                        <strong>SU</strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="#0070ff" data-percent="13" data-title="13%" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="donut-chart ease-donut-chart">
                                        <strong>SD</strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="#ff103b" data-percent="70" data-title="70%" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-side padding-15-h">
                            <h5 class="bold">Last Visited</h5>
                        </div>

                        <div class="card-side padding-15">
                            <div class="carousel" data-col="1">
                                <div class="carousel-slider ease-2nd-layout ease-layout ease-in-out">

                                    <div class="slide-content list-group no-border padding-1-h">
                                        <ul class="has-photo-sm has-icon-sm ease-list-group">
                                            <li class="round theme-gray ui-x-light">
                                                <a href="#">
                                                    <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                                    <span class="img-photo-sm circle">
                                                        <svg class="icon"><use href="#clock"></use></svg>
                                                    </span>
                                                    <b class="large block">REP-701-2019</b>
                                                    <span class="small dark">1 hour ago</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="slide-content list-group no-border padding-1-h">
                                        <ul class="has-photo-sm has-icon-sm ease-list-group">
                                            <li class="round theme-gray ui-x-light">
                                                <a href="#">
                                                    <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                                    <span class="img-photo-sm circle">
                                                        <svg class="icon"><use href="#clock"></use></svg>
                                                    </span>
                                                    <b class="large block">REP-103-2018</b>
                                                    <span class="small dark">2 hours ago</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="slide-content list-group no-border padding-1-h">
                                        <ul class="has-photo-sm has-icon-sm ease-list-group">
                                            <li class="round theme-gray ui-x-light">
                                                <a href="#">
                                                    <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                                    <span class="img-photo-sm circle">
                                                        <svg class="icon"><use href="#clock"></use></svg>
                                                    </span>
                                                    <b class="large block">REP-616-2017</b>
                                                    <span class="small dark">3 days ago</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="carousel-nav ease-1st-btn">
                                    <span class="dots dark"></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <span class="sp5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row row-no-gap no-fluid icons-lg icons-thin block-2nd ease-2nd-btn">
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle icons-semibol ui-text">
                                    <svg class="icon icon-semibold"><use href="#home"></use></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#search"></use></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui" data-notifier="2">
                                    <svg class="icon"><use href="#comment"></use></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#user"></use></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-lg-3 col-6">

                <div class="app padding-15 theme-app">

                    <div class="card no-margin-b">

                        <div class="card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn" data-notifier>
                                        <svg class="icon ui-text"><use href="#bell"></use></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn">
                                        <svg class="icon ui-text"><use href="#settings"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="card-side padding-15">
                            <div class="data-list data-striped data-hover ease-data-list">

                                <div class="form-lg ease-1st-form">
                                    <div class="text text-icon-both border-dual has-clear circle">
                                        <svg class="icon text-icon-l"><use href="#search"></use></svg>
                                        <button class="clear-form">
                                            <svg class="icon"><use href="#remove"></use></svg>
                                        </button>
                                        <input class="data-filter" type="text" placeholder="Search">
                                    </div>
                                </div>

                                <span class="sp10"></span>

                                <div class="row row-xs-gap no-fluid block-2nd ease-2nd-btn">
                                    <div class="col-5">
                                        <button class="btn align-l circle-l ui-x-light" data-sort="1">
                                            <svg class="icon"><use href="#sort"></use></svg> Report
                                        </button>
                                    </div>
                                    <div class="col-7">
                                        <button class="btn align-l circle-r ui-x-light" data-sort="2">
                                            <svg class="icon"><use href="#sort"></use></svg> Customer
                                        </button>
                                    </div>
                                </div>

                                <span class="sp5"></span>

                                <div class="data-container scroll-v">

                                    <div class="data-content no-border" data-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v theme-app2 ui-dark">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v theme-app2 ui-dark">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v theme-app2 ui-dark">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-dark">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="data-content no-border" data-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row row-no-gap-h no-fluid row-md-gap-v">
                                                <div class="col-6">
                                                    <b class="dark">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v theme-app2 ui-dark">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ease-dropdown">
                                                    <button class="btn btn-ghost btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"></use></svg>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <span class="sp5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row row-no-gap no-fluid icons-lg icons-thin block-2nd ease-2nd-btn">
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#home"></use></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle ui-text">
                                    <svg class="icon icon-semibold"><use href="#search"></use></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui" data-notifier="2">
                                    <svg class="icon"><use href="#comment"></use></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#user"></use></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-lg-3 col-6">

                <div class="app padding-15 theme-app">

                    <div class="card no-margin-b">

                        <div class="card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn" data-notifier>
                                        <svg class="icon ui-text"><use href="#bell"></use></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn">
                                        <svg class="icon ui-text"><use href="#settings"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="card-side padding-10">

                            <div class="tabs ease-tabs" data-classes="theme-app ui-border">

                                <ul class="contacts list-inline margin-5-t margin-10-b ease-1st-border scroll-h">
                                    <li class="tab circle online theme-app ui-border active">
                                        <img class="img-photo circle" src="img/profile-image.jpg" alt="">
                                    </li>
                                    <li class="tab circle online" data-msg="2">
                                        <img class="img-photo circle" src="img/profile-image2.jpg" alt="">
                                    </li>
                                    <li class="tab circle">
                                        <span class="img-photo circle ui-x-light"><span>MT</span></span>
                                    </li>
                                    <li class="tab circle">
                                        <img class="img-photo circle" src="img/profile-image3.jpg" alt="">
                                    </li>
                                    <li class="tab circle">
                                        <span class="img-photo circle ui-x-light"><span>MD</span></span>
                                    </li>
                                    <li class="tab circle">
                                        <span class="img-photo circle ui-x-light"><span>JD</span></span>
                                    </li>
                                </ul>

                                <div class="tab-content padding-10 border-dual open open-ease">
                                    <div class="row no-fluid no-margin circle theme-gray ui-x-light">
                                        <div class="col-6">
                                            <h5 class="bold">John Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="dark-ui">Online</span>
                                        </div>
                                    </div>

                                    <span class="sp10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-x-light">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-x-light">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-x-light">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-x-light">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle theme-gray ui-x-light">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row row-no-gap">
                                            <div class="text text-icon no-border padding-2 circle ease-form">
                                                <button class="icon icon-comment-dots theme-app ui-text"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 border-dual">
                                    <div class="row no-fluid no-margin circle theme-gray ui-x-light">
                                        <div class="col-6">
                                            <h5 class="bold">Mary Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="dark-ui">Online</span>
                                        </div>
                                    </div>

                                    <span class="sp10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-x-light">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-x-light">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-x-light">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-x-light">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle theme-gray ui-x-light">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row row-no-gap">
                                            <div class="text text-icon no-border padding-2 circle ease-form">
                                                <button class="icon icon-comment-dots theme-app ui-text"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 border-dual">
                                    <div class="row no-fluid no-margin circle theme-gray ui-x-light">
                                        <div class="col-6">
                                            <h5 class="bold">Mike Taylor</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="dark-ui">Today 09:22</span>
                                        </div>
                                    </div>

                                    <span class="sp10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-x-light">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-x-light">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-x-light">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-x-light">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle theme-gray ui-x-light">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row row-no-gap">
                                            <div class="text text-icon no-border padding-2 circle ease-form">
                                                <button class="icon icon-comment-dots theme-app ui-text"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 border-dual">
                                    <div class="row no-fluid no-margin circle theme-gray ui-x-light">
                                        <div class="col-6">
                                            <h5 class="bold">John Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="dark-ui">1 day ago</span>
                                        </div>
                                    </div>

                                    <span class="sp10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-x-light">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-x-light">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-x-light">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-x-light">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle theme-gray ui-x-light">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row row-no-gap">
                                            <div class="text text-icon no-border padding-2 circle ease-form">
                                                <button class="icon icon-comment-dots theme-app ui-text"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 border-dual">
                                    <div class="row no-fluid no-margin circle theme-gray ui-x-light">
                                        <div class="col-6">
                                            <h5 class="bold">Mary Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="dark-ui">2 days ago</span>
                                        </div>
                                    </div>

                                    <span class="sp10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-x-light">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-x-light">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-x-light">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-x-light">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle theme-gray ui-x-light">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row row-no-gap">
                                            <div class="text text-icon no-border padding-2 circle ease-form">
                                                <button class="icon icon-comment-dots theme-app ui-text"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 border-dual">
                                    <div class="row no-fluid no-margin circle theme-gray ui-x-light">
                                        <div class="col-6">
                                            <h5 class="bold">John Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="dark-ui">3 days ago</span>
                                        </div>
                                    </div>

                                    <span class="sp10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-x-light">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-x-light">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-x-light">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-x-light">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-x-light">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-dark">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle theme-gray ui-x-light">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row row-no-gap">
                                            <div class="text text-icon no-border padding-2 circle ease-form">
                                                <button class="icon icon-comment-dots theme-app ui-text"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <span class="sp5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row row-no-gap no-fluid icons-lg icons-thin block-2nd ease-2nd-btn">
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#home"></use></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#search"></use></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle ui-text" data-notifier="2">
                                    <svg class="icon icon-semibold"><use href="#comment"></use></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#user"></use></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-lg-3 col-6">

                <div class="app padding-15 theme-app">

                    <div class="card no-margin-b">

                        <div class="card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn" data-notifier>
                                        <svg class="icon ui-text"><use href="#bell"></use></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="btn btn-ghost btn-square circle ui-x-light ease-btn">
                                        <svg class="icon ui-text"><use href="#settings"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="card-side padding-10">

                            <div class="align-c padding-30 margin-5-t margin-15-b round border-dual">
                                <div class="status">
                                    <img class="img-photo-lg circle" src="img/profile-image.jpg" alt="">
                                </div>
                                <span class="sp20"></span>
                                <span class="x-large margin-3-l">John Doe</span>
                                <span class="sp2"></span>
                                <b class="xx-small circle padding-5-h padding-3-v theme-app2 ui-dark">SD</b>
                                <span class="x-dark margin-3-l">Audit Staff</span>
                            </div>

                            <h5 class="bold margin-10-b">Settings</h5>
                            <div class="list-group round no-border theme-gray ui-x-light">
                                <ul class="has-icon-xs ease-list-group">
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                            Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                            Notifications
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                            Privacy and Safety
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <span class="sp15"></span>

                            <h5 class="bold margin-10-b">General</h5>

                            <div class="list-group round no-border theme-gray ui-x-light">
                                <ul class="has-icon-xs ease-list-group">
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                            Data Usage
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                            Accessibility
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"></use></svg>
                                            About Reports
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <span class="sp25"></span>

                            <div class="list-group round no-border theme-gray ui-x-light">
                                <ul class="has-icon-xs ease-list-group">
                                    <li>
                                        <a class="round" href="#">
                                            <svg class="list-icon icon"><use href="#sign-out"></use></svg>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <span class="sp5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row row-no-gap no-fluid icons-lg icons-thin block-2nd ease-2nd-btn">
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#home"></use></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui">
                                    <svg class="icon"><use href="#search"></use></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle dark-ui" data-notifier="2">
                                    <svg class="icon"><use href="#comment"></use></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-multi btn-ghost padding-10-t circle ui-text">
                                    <svg class="icon icon-semibold"><use href="#user"></use></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</main>