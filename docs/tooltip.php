<main class="container no-gutter">
    <div class="fixed">
        <div class="row padding-30-v">

            <div class="col-12">

                <h4>Positioning</h4>
                <div class="ease-1st-btn theme-default padding-30-b">
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="t" title="Tooltip <b>Top</b>">Tooltip <b>Top</b></button>
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="b" title="Tooltip <u>Bottom</u>">Tooltip <b>Bottom</b></button>
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="r" title="Tooltip <i>Right</i>">Tooltip <b>Right</b></button>
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="l" title="Tooltip <em>Left</em>">Tooltip <b>Left</b></button>
                    <span class="sp-30"></span>
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="tr" title="Tooltip <b>Top Right</b>">Tooltip <b>Top Right</b></button>
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="tl" title="Tooltip <u>Top Left</u>">Tooltip <b>Top Left</b></button>
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="br" title="Tooltip <i>Bottom Right</i>">Tooltip <b>Bottom Right</b></button>
                    <button class="btn margin-5-b round ui-bg-dark-100" data-tooltip="bl" title="Tooltip <em>Bottom Left</em>">Tooltip <b>Bottom Left</b></button>
                </div>

                <h4>Preventing Actions on Touch</h4>
                <div class="theme-default2 ease-1st-btn padding-30-b">
                    <a href="http://www.google.com/" target="_blank" class="btn margin-5-b round ui-bg-dark-100" data-tooltip="t" title="Open link now!">Link</a>
                    <button onclick="alert('Test');" class="btn margin-5-b round ui-bg-dark-100" data-tooltip="t" title="Run javascript aler now!">Javascript</button>
                </div>

                <h4>data-only Attributes</h4>
                <div class="theme-default ease-1st-btn padding-30-b">
                    <a href="http://www.google.com/" target="_blank" class="btn margin-5-b round ui-bg-dark-100" data-tooltip="t" data-only="mobile" title="Open link now!">Link (mobile)</a>
                    <a href="http://www.google.com/" target="_blank" class="btn margin-5-b round ui-bg-dark-100" data-tooltip="t" data-only="desktop" title="Open link now!">Link (desktop)</a>
                    <span class="sp-10"></span>
                    <button onclick="alert('Test');" class="btn margin-5-b round ui-bg-dark-100" data-tooltip="t" data-only="mobile" title="Run javascript aler now!">Javascript (mobile)</button>
                    <button onclick="alert('Test');" class="btn margin-5-b round ui-bg-dark-100" data-tooltip="t" data-only="desktop" title="Run javascript aler now!">Javascript (desktop)</button>
                </div>

                <h4>Using with Icons</h4>
                <div class="theme-default2 icons-xl ui-color padding-30-b hover-t-more-1st ease-1st-layout">
                    <svg class="icon" data-tooltip title="Like!"><use href="#heart"/></svg>
                    <svg class="icon" data-tooltip title="Somewhere on Earth!"><use href="#marker"/></svg>
                    <svg class="icon" data-tooltip title="Call us now 555 55 55"><use href="#phone"/></svg>
                    <svg class="icon" data-tooltip title="Add favorites!"><use href="#star"/></svg>
                </div>

                <h4>Using with Forms</h4>
                <div class="ease-1st-form padding-30-b form-lg ease-1st-form">
                    <div class="text text-icon round border-dual ease-form">
                        <svg class="icon" data-tooltip="tl" title="Your message here!"><use href="#question-circle-fill"/></svg>
                        <input type="text" placeholder="Placeholder Text">
                    </div>
                    <span class="sp-15"></span>
                    <div class="text text-icon-l round border-dual ease-form">
                        <svg class="icon" data-tooltip="tr" title="Your message here!"><use href="#question-circle-fill"/></svg>
                        <input type="text" placeholder="Placeholder Text">
                    </div>
                </div>

                <h4>Using with Paragraphs</h4>
                <div class="ease-1st-form">
                    Lorem ipsum dolor sit amet, <b class="theme-red ui-bg-light-100 ui-color" data-tooltip title="<b>Nulla facilisi.</b><br>Sed purus ligula, commodo vel nisi et, lobortis ultrices erat.<br>Maecenas ac venenatis enim.">consectetur adipiscing elit.</b> Integer vitae enim quis ante lacinia tincidunt nec sed metus. Donec vitae diam non mi pharetra venenatis quis id nisl. Nunc auctor efficitur nunc nec porta. Nullam ut interdum nulla. Duis dapibus, lacus sed lacinia aliquam, orci ex congue magna, eget euismod lectus lacus ac turpis. Vestibulum facilisis tempus nunc, nec auctor risus cursus vitae. Nam cursus tristique orci non vehicula.
                    <br><br>
                    Proin ultrices metus non ligula ultrices venenatis. <a href="#" class="theme-orange ui-bg-light-100 ui-color" data-tooltip title="Please, click following link for details."><b>Etiam id dapibus sapien.</b></a> Sed ac enim tristique, cursus quam id, vehicula dui. Duis vestibulum, velit sit amet auctor tristique, massa elit commodo dui, eu ultricies felis arcu non enim. Cras id semper risus, eu ultrices enim. Aenean ullamcorper eleifend pharetra. Vestibulum varius, libero a congue aliquet, tortor erat suscipit lectus, id consequat nisl tellus vitae risus. Phasellus vestibulum porttitor leo. Maecenas scelerisque tempor lorem a facilisis. Fusce eu dictum eros. Aenean consequat quam est, sit amet cursus enim ultricies et.
                </div>

        </div>
    </div>
</main>