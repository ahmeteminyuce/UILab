<main class="ui-container ui-no-gutter loading-mask-page">
    <div class="ui-fixed ui-p-30-t">
        <div class="ui-row">
            <div class="ui-col-12">

                <h3 class="ui-h3">Showing/Hiding Loading Masks</h3>
                <div class="ui-p-30-b ui-theme-base">

                    <pre class="ui-pre ui-round">ui.loadingMask.toggle(id);</pre>
                    <pre class="ui-pre ui-round">ui.loadingMask.toggle(classname);<br><br>- or -<br><br>var variable = ui.find(element);<br>ui.loadingMask.toggle(variable);</pre>

                </div>

                <h3 class="ui-h3">Loading Mask with Buttons</h3>
                <div class="ui-p-30-b ui-theme-base">

                    <div class="ui-form-lg ui-ease-1st-btn">
                        <button id="loading-mask-btn" class="ui-btn ui-btn-xs-fluid ui-p-25-h ui-round ui-theme-sub ui-fill-dark-100 ui-ease-btn">Button</button>
                    </div>

                    <pre class="ui-pre ui-round ui-m-10-t ui-m-5-b">ui.loadingMask.toggle('#loading-mask-btn');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('#loading-mask-btn');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="ui-form-lg ui-ease-1st-btn">
                        <a href="#" class="loading-mask-btn ui-btn ui-btn-xs-fluid ui-p-25-h ui-round ui-theme-sub ui-fill-dark-100">Link</a>
                        <button class="loading-mask-btn ui-btn ui-btn-xs-fluid ui-p-25-h ui-round ui-theme-sub ui-fill-dark-100" onclick="alert('Javascript Alert');">Javascript Alert</button>
                    </div>

                    <pre class="ui-pre ui-round ui-m-10-t ui-m-5-b">ui.loadingMask.toggle('.loading-mask-btn');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loading-mask-btn');">Run Code</button>

                </div>

                <h3 class="ui-h3">Loading Mask with Forms</h3>
                <div class="ui-p-30-b ui-theme-base">

                    <div class="ui-form-lg">
                        <div class="loading-mask-text1 ui-input ui-border-dual ui-round ui-form-inline ui-ease-form">
                            <input type="text" placeholder="Enter name">
                        </div>
                    </div>
                    <pre class="ui-pre ui-round ui-m-10-t ui-m-5-b">ui.loadingMask.toggle('.loading-mask-text1');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loading-mask-text1');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="ui-form-lg">
                        <div class="loading-mask-text2 ui-input ui-form-icon-l ui-m-10-b ui-round ui-border-dual ui-form-inline ui-ease-form">
                            <svg class="ui-icon"><use href="#search"/></svg>
                            <input type="text" placeholder="Left icon">
                        </div>
                    </div>
                    <pre class="ui-pre ui-round ui-m-10-t ui-m-5-b">ui.loadingMask.toggle('.loading-mask-text2');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loading-mask-text2');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="ui-form-lg">
                        <div class="loading-mask-select ui-select ui-round ui-border-dual ui-form-inline ui-ease-form">
                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select your age</option>
                                <option>Under 20</option>
                                <option>21- 30</option>
                                <option>31 - 40</option>
                            </select>
                        </div>
                    </div>
                    <pre class="ui-pre ui-round ui-m-10-t ui-m-5-b">ui.loadingMask.toggle('.loading-mask-select');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loading-mask-select');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="loading-mask-textarea ui-textarea ui-round ui-border-dual ui-ease-form">
                        <textarea rows="4" placeholder="Placeholder Example"></textarea>
                    </div>
                    <pre class="ui-pre ui-round ui-m-10-t ui-m-5-b">ui.loadingMask.toggle('.loading-mask-textarea');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loading-mask-textarea');">Run Code</button>

                </div>

                <h3 class="ui-h3">Loading Mask with Whole Page</h4>
                <div class="ui-p-30-b ui-theme-base">

                    <pre class="ui-pre ui-round ui-m-10-t ui-m-5-b">ui.loadingMask.toggle('.loading-mask-page');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loading-mask-page');">Run Code</button>

                </div>

            </div>
        </div>
    </div>
</main>
