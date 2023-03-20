import * as React from 'react';
import { useId, useEffect } from 'react';
import { ui } from '@ui';

// assets
import '@less/modules/map';
import '@js/modules/map';

interface MapProps {

    sizes: any,

    defaultValue?: any,

    className?: string,
    style?: any,
}

export default function Map(

    { sizes, defaultValue, className, style }:MapProps) {

        const id = useId();

        useEffect(() => {

            // start
            ui.map.Start();

        }, []); // Runs only first render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-map' + setClassName;

        // values
        const paths = {
            "Kırklareli": "M126.269 35.73l-23.758 7.669-5.424 9.166-7.296 1.497-23.757-8.418 6.921-40.78L86.611 0l13.843 12.72 21.138-3.18 4.677 26.19z",
            "Tekirdağ": "M126.269 35.73l1.31 1.122-9.915 21.886v9.915l-3.367 4.302-10.85-2.806-10.85 1.87L80.064 87.92l-14.591 7.296.935-11.785-9.353-.935-1.87-19.642 8.23-3.554 2.619-13.656 23.757 8.418 7.296-1.497 5.424-9.166 23.758-7.67z",
            "İstanbul": "M127.578 36.852l16.836 12.907 13.469 6.173 8.417 2.432 3.18 1.87-3.18 3.93.375 2.805-1.123 3.554-2.057 1.497-1.871.187 1.31 1.496-3.368 1.123-4.49 2.058-4.115-1.684-6.36.374-.935-2.619-2.245.748-5.612-3.928-10.289-2.619-7.856 1.497v-9.915l9.914-21.886zm78.006 31.052l-14.03-2.993-11.598-3.74-5.425-.75-3.928.936-2.993 2.806.187 2.058.935 1.122-1.31.936-1.683 3.367-1.683 3.367 2.619 2.432 3.18 3.741 6.547 2.806-1.497 2.619 3.555.187 3.928-5.425 4.677-6.921 7.67 2.245 9.914-4.303.935-4.49z",
            "Edirne": "M72.955 4.864L56.306 7.108l-3.554 6.36-9.166 2.058-2.058 5.051L52.94 30.866l.561 13.468-14.59 5.051-1.31 18.52-14.778 12.72 1.122 8.605 18.333.374 1.683 2.058 11.785-3.367 1.31-5.8-1.87-19.641 8.23-3.554 2.619-13.656 6.921-40.78z",
            "Çanakkale": "M15.9 112.052l-.748 3.741h2.432l-.561 1.122-4.49.936-8.23.748L0 115.793l1.684-2.058 5.986-2.806 6.921-.56 1.31 1.683zm.936 22.822l-3.929.374 3.929 3.367h1.683l.375-2.619-2.058-1.122zm7.857-9.167l-3.742 15.527.374 6.921-5.425 9.728 3.742 2.244 24.318-3.554 3.18-8.418 2.432-1.683 6.173.187 4.303-3.555 12.907 6.174 10.663-3.555 3.928-9.353-4.49-14.965 7.857-8.605-9.727-5.425-1.684-6.36-12.72 4.115-13.094-1.87-5.987 5.612-6.92 5.612-5.052.935-.374 4.677-2.619 1.496-1.496 3.928-6.547.187zm32.362-43.211l9.353.935-.935 11.785-14.217 4.864.374 1.87-11.598 8.605-6.173 3.742.748 3.928-5.799 3.741-5.05 1.123 4.302-7.483 2.244-4.677-2.244-4.863 9.914-5.238 9.54-5.05 3.368.747 3.367-2.806 2.619.187 1.683-2.244-.748-3.367h-2.058l1.31-5.8z",
            "Balıkesir": "M90.913 112.8l11.037-.187 4.677-2.993-4.864-3.554-2.993-4.677 1.497-2.993 15.339 4.864-6.173 3.928-.374 2.619 2.432.935 10.101-2.244-4.302 9.166 1.683 9.166 7.296 16.274 10.288 8.605 9.166-1.87 3.368 9.353 7.856.187 1.123 3.367-8.605 15.527-10.289 2.431 1.684 6.735-22.822 4.676-10.85-9.54-2.058-8.979-7.67 1.122-15.9-6.921-1.683 2.619L69.4 168.17l-13.656 4.864-6.921 7.482-7.483-6.173 15.714-13.281 2.432-4.303-2.432-2.245-2.806 1.684-10.289.374 3.18-8.418 2.432-1.683 6.173.187 4.303-3.555 12.907 6.174 10.663-3.555 3.928-9.353-4.49-14.965 7.857-8.605zm10.85-21.138l-5.05-1.684-4.49 1.122v3.929l3.741.935 5.612-2.058.187-2.244z",
            "Bursa": "M121.592 108.498l21.7 3.74 9.54-1.122 9.914 2.432 5.8-4.115-5.051-2.245 2.244-4.115 8.044.748 8.605-1.122 8.044 1.122 5.238-3.367 7.67 1.496 2.805 2.432 2.245 2.058-8.044 7.295-.935 10.102-4.49 7.295.562 14.404-14.591-1.87-13.47 18.52-10.475-2.807-7.856-.187-3.368-9.353-9.166 1.87-10.288-8.605-7.296-16.461-1.683-8.98 4.302-9.165z",
            "Yalova": "M188.187 94.468l-5.799 8.23-8.605 1.123-8.044-.748-2.244 4.115-4.303.187-8.23-4.115 1.122-2.432 8.605-4.677 9.727-.374 10.476-2.245 5.799-1.87 1.496 2.806z",
            "Kocaeli": "M188.187 94.468l1.497.374 9.166-1.684 6.734.748 2.245-.935-1.123-1.683-4.115.374-3.18.56-4.303-2.431h-6.734l-4.49-.187-3.928.561-1.496-3.367 8.605-12.346 7.67 2.245 9.914-4.303.935-4.49h7.109l8.792-1.309 3.18-2.432 3.741 1.123-5.425 9.914 2.619 9.54-3.741 5.8-.749 3.366-3.367 5.612-11.598 4.864-2.806-2.432-7.67-1.496-5.237 3.367-8.044-1.122 5.8-8.231z",
            "Sakarya": "M228.219 65.473l5.05 2.619 11.599 2.806 6.734 2.618 6.734.562-.935 6.734-6.547 5.612-.374 5.986 2.806 2.058-.375 5.612-1.496 9.166-12.533.935-4.864 11.598-4.677-1.87v-3.929l-11.224.748-9.54-5.425-.187-4.863-2.245-2.058 11.598-4.864 3.367-5.612.749-3.367 3.741-5.799-2.619-9.54 5.238-9.727z",
            "Düzce": "M258.336 74.078l14.778-2.058 4.303 5.238 16.649 1.87-1.123 6.735-13.843 3.741-3.18 11.598-8.792 1.31-14.217-2.432.375-5.612-2.806-2.058.374-5.986 6.547-5.612.935-6.734z",
            "Bolu": "M294.066 79.128l9.914.749 9.166-1.871 5.612 1.684 1.497 6.173 11.41 5.612.188 8.418-9.915 1.87 1.871 5.8-23.57 14.59-14.217 2.806-9.166-5.05-13.282-1.31-4.302 8.98-11.411 5.237-8.231-1.684-5.612-9.353 4.864-11.598 12.533-.935 1.496-9.166 14.217 2.431 8.792-1.309 3.18-11.598 13.843-3.741 1.123-6.735z",
            "Zonguldak": "M273.114 72.02c0-.187 5.986-9.54 5.986-9.54l-1.122-2.62 3.554-1.122 12.534-6.173 15.339-8.23 7.108 3.74 3.555 13.47-7.857 4.115.935 12.346-9.166 1.87-9.914-.748-16.65-1.87s-4.302-5.051-4.302-5.238z",
            "Bartın": "M309.405 44.334l15.34-10.475 10.849-4.864 6.173-.561 4.303 9.353-3.555 5.612.562 1.31 4.676.56-5.612 1.684-6.173 3.742-3.928 5.986-11.972 4.863-3.555-13.468-7.108-3.742z",
            "Kastamonu": "M341.767 28.434l11.037-3.554 15.34-7.109 14.03 2.619 15.526.748 4.863-.935 8.418 1.87 2.806 8.793-1.31 5.05 15.34 2.058-.374 5.612-6.547 4.115.187 13.47-11.785 9.165-1.31 6.173 5.05 10.289-4.302 3.554-11.785 1.684-8.23-.561.748-12.908h-14.966l-5.05 4.49-5.425-5.612-9.166-.748-6.735-6.735 2.245-9.914 8.418-4.116-3.741-9.914-7.483-.748-4.49-.562-.56-1.309 3.554-5.612-4.303-9.353z",
            "Karabük": "M354.862 76.697l-1.684 4.863h-9.727l-11.785 9.915-11.411-5.612-1.497-5.986-5.612-1.871-.935-12.346 7.857-4.116 11.972-4.863 3.928-5.986 6.173-3.742 5.612-1.683 7.296.748 3.741 9.914-8.418 4.116-2.245 9.914 6.735 6.735z",
            "Çankırı": "M331.853 99.893l20.016 5.424-1.123 5.425 12.534 12.534 4.115-4.303 17.397 3.928 11.411 4.49 10.85-9.353-.936-10.476-2.431-.187.748-6.547-7.483-8.792-8.23-.561.748-12.908h-14.966l-5.05 4.49-5.425-5.612-9.166-.748-1.684 4.863h-9.727l-11.785 9.915.187 8.418z",
            "Çorum": "M396.951 92.036l11.785-1.684 4.303-3.554-5.05-10.289 1.309-6.173 11.785-9.166 8.417 1.123 13.095 7.856 7.67 5.986-3.929 14.965 4.116 9.167 6.921-1.871 14.778 9.914-7.482 19.83-8.98.935-1.496 12.346-10.476 3.18-1.496-3.554-14.778 5.05-7.483-2.805-11.598 4.115-6.547-12.346.187-2.806-5.799-4.864 10.85-9.353-.936-10.476-2.431-.187.748-6.547-7.483-8.792z",
            "Amasya": "M450.265 76.135l4.115.749 5.612 2.993 9.914-1.31.375 4.677 11.036 4.302 16.088 2.058 6.547-8.605 7.296.748-.748 3.929 4.676 1.122 3.554 5.799-4.302 2.993 2.806 10.289-9.728-1.684.375 4.303-5.986 5.05-7.857-2.245h-7.109l-1.496 4.49-14.217 8.044-2.245 4.676-4.302-.374 7.482-19.829-14.778-9.914-6.921 1.87-4.116-9.166 3.929-14.965z",
            "Sinop": "M410.981 22.074l6.734.748 5.986-1.497 5.238 1.123 9.54-.374 5.051-6.174 1.123-2.618h3.554l2.432 4.302 5.612-.561.187 1.31-3.929 1.122-.935 4.302 4.864 7.857 6.734 6.36 7.109 3.367-4.116 10.663 1.497 6.921-3.742 5.425-3.928 1.31-8.792-8.792-6.734 3.741-1.871 9.54-13.095-7.856-8.417-1.123-.187-13.469 6.547-4.115.374-5.612-15.34-2.058 1.31-5.05-2.806-8.792z",
            "Samsun": "M470.094 41.341l3.367.749 17.21-6.922 6.734 3.741 2.619 4.677.748 9.353 12.16 11.972 7.295-2.993 2.245-5.05 8.792.374 10.288 5.986 1.31 4.676 5.612 1.31-7.483 4.302-1.684 5.425-9.54 5.986-14.59 1.871-4.677-1.122.748-3.929-7.296-.748-6.547 8.605-16.088-2.058-11.036-4.302-.375-4.677-9.914 1.31-5.612-2.993-4.115-.749-7.67-5.986 1.87-9.54 6.735-3.741 8.792 8.792 3.928-1.31 3.742-5.425-1.497-7.108 3.929-10.476z",
            "Ordu": "M548.287 69.401h7.108l1.31 1.31 9.166 5.986 4.115-1.684 2.619-5.986 5.238 1.31.935 3.928 3.928 2.806 1.31 1.496 9.914.935-5.425 13.843 3.742 8.418 5.612.748-.561 4.116-8.418 2.806-.749 6.36-5.237 1.31-2.994-1.871-1.683 3.18-7.67-4.115 2.058-7.296-14.03-.935-6.734-8.792-15.34-1.871-6.734-10.476 9.54-5.986 1.684-5.425 7.296-4.115z",
            "Tokat": "M529.767 84.927l-14.59 1.871 3.553 5.799-4.302 2.993 2.806 10.289-9.728-1.684.375 4.303-5.986 5.05-7.67-2.245h-7.296l-1.496 4.49-14.217 8.044-2.245 4.676.748 3.18 6.548 5.425 12.159-1.122 7.482 9.727 28.247-1.87 5.238-14.217 17.771-3.554L564 130.384l7.108-9.353-.56-6.734 2.057-7.296-13.843-.935-6.921-8.792-15.34-1.871-6.734-10.476z",
            "Giresun": "M593.93 79.502l7.296.749 6.921 2.057 8.792-2.057 1.871-2.806 3.741 1.31 5.238-4.303 8.98-2.058 7.856-2.432-1.684 6.173.561 6.36 2.245 4.677-17.584 16.275 2.62 4.115 11.784 7.296-8.044 5.799 2.432 13.094-8.044-1.122-16.461-3.741-12.16-5.051-2.992-17.21.56-4.116-5.611-.748-3.742-8.418 5.425-13.843z",
            "Gümüşhane": "M645.747 87.172l22.448 13.282 5.612-4.303.561-5.612 3.367 1.123-.187 4.115 5.425 2.806.748-5.238 5.612 4.864-.187 5.05-7.856.188-4.116 10.85 2.432 5.611-9.353 9.915 1.496 5.238 5.986 3.367-8.043 6.36-32.737-11.037-2.432-13.094 8.044-5.8-11.785-7.295-2.619-4.115 17.584-16.275z",
            "Trabzon": "M644.625 69.962l3.367 1.87 6.173-4.489 3.929.187 5.05 5.238 6.922-.561 6.921 2.993 8.044-1.122 5.238 2.619 9.166-3.929 5.986 6.734 2.432 9.915-.936 10.288-17.584-1.496-5.612-4.864-.748 5.238-5.425-2.806.187-4.115-3.367-1.123-.561 5.612-5.612 4.303-22.448-13.282-2.245-4.676-.56-6.36 1.683-6.174z",
            "Bayburt": "M706.917 99.705l6.922-.374-2.432 8.231 2.432 2.432-4.116 3.741 1.871 2.993 10.476 1.31-6.173 8.418-8.044 5.986h-4.116l-18.145-.748-7.857 6.734-5.986-3.367-1.496-5.238 9.353-9.915-2.432-5.611 4.116-10.85 7.856-.187.187-5.051 17.584 1.496z",
            "Rize": "M699.435 72.768l4.49-4.115 11.597-3.367 7.296-7.857 10.288-3.18 8.605-6.548 8.605 11.224-11.785 19.455-12.346 8.792-5.238 7.67-7.108 4.49-6.922.373.936-10.288-2.432-9.915-5.986-6.734z",
            "Artvin": "M741.899 47.701l11.785-14.778 11.785 4.864 7.108-5.799 20.577 2.619 5.238.187 5.238 9.727-12.533 24.319-16.088-1.31-2.806 4.49v10.476l-5.425 4.676-8.979-.374-7.67 7.108-1.87-1.496-.936-9.914-8.792-4.116 11.785-19.455-8.417-11.224z",
            "Ardahan": "M798.392 34.794l2.806-8.044 9.727-1.87 1.31 4.49 7.67 3.928 12.346 7.482-.936 2.619 3.742 4.677 6.547-2.432 4.49 8.605-7.483-1.31-2.058 7.296-15.152 7.857-2.058 12.72-12.907 1.87-.374-3.367-14.965-10.475L803.63 44.52l-5.238-9.727z",
            "Kars": "M846.094 54.249l5.799 4.115 8.043 9.54.187 14.03-5.237 6.548 1.683 6.173 7.109 13.281-2.62 2.62-7.482 2.057-5.799-.187-.935 4.49-3.929.56.749 2.807-33.11 7.108-11.412-12.533-11.785-6.173 2.432-3.555 11.037-2.806 5.425-7.67.187-11.971 12.907-1.871 2.058-12.72 15.152-7.857 2.058-7.296 7.483 1.31z",
            "Erzurum": "M791.097 68.84l-16.088-1.31-2.806 4.49v10.476l-5.425 4.676-8.979-.374-7.67 7.108-1.87-1.496-.936-9.914-8.792-4.303-12.346 8.98-5.238 7.669-7.108 4.49-2.432 8.23 2.432 2.432-4.116 3.741 1.871 2.993 10.476 1.31-6.173 8.418-8.044 5.986h-4.116l-2.619 3.18 3.929 3.367 9.727 3.18 11.598 18.145-5.612 1.871-1.31 4.677 20.204-1.497 8.979 5.05 14.965.562 9.353 10.663 20.39-6.547 11.785-17.397 5.425-10.476-12.159-11.411 12.16-8.418-11.412-12.533-11.785-6.173 2.432-3.555 11.037-2.806 5.425-7.67.187-11.971-.374-3.368-14.965-10.475z",
            "Iğdır": "M861.059 110.555l3.741 3.554 11.224 1.684 14.965-3.554 13.095 6.173 16.274 14.591-1.31 2.432-8.978-7.857-4.116 5.425-5.799-.935-15.526 3.554-25.067-5.986-4.676 3.741-2.993-.561-.562-8.98-7.67-3.553-.748-2.806 3.929-.562.935-4.49 5.8.188 7.482-2.058z",
            "Ağrı": "M843.662 120.283l-33.11 7.108-12.16 8.418 12.16 11.41-5.426 10.477 12.347 11.223 7.856 21.139 10.663-6.36 6.36-19.83 10.102-5.985 16.274 9.54 6.36-10.102 11.973-1.496 1.31-4.116 11.41.749 5.05-3.18 1.123-16.275-5.799-.935-15.526 3.554-25.067-5.986-4.676 3.741-2.993-.561-.562-8.98-7.67-3.553z",
            "Van": "M887.06 155.825l11.225 14.965 3.74 16.836 4.303 15.9 1.123 11.411 8.418.936-7.857 28.808 8.418 4.676-12.908 8.605-5.05-6.36-28.995 10.289-26.19-1.123-5.05-8.792-6.36.374-2.62-32.362 4.49-2.619 5.8 8.792 7.669.187 7.857-8.044.187-7.295-6.735-3.367-3.18.374.936-2.619 6.734-11.41 5.238-1.872 10.662-7.295-5.986-3.18-10.85 2.806-6.547 2.245-2.432.187-7.108-3.18 6.36-19.83 10.102-5.985 16.274 9.54 6.36-10.102 11.973-1.496z",
            "İzmir": "M79.877 170.416l2.057 24.692-15.526 4.303 3.18 20.39 23.57 15.526 8.418-3.928 23.57 10.101 1.684 11.411-8.792-.748-5.612 6.173-30.118-2.244-16.087 6.36-2.058-5.612-12.72-7.296-3.742 1.31-3.928-10.102-6.173-.187-3.18 6.173-6.36-4.863-11.037-7.109 2.993-5.05 5.425 1.87 5.612-5.238-4.116-4.115-1.122-11.224 5.799-1.122 5.986 11.598-1.497 4.49 2.245 7.295 1.87-5.986 5.052 4.49 12.907-3.368 2.619-2.993-8.044.187-6.547-12.16-.374-5.985 14.404-8.418-10.663-4.677 3.554-7.67-4.302-6.173 6.921-7.482 13.656-4.864 10.476 2.245z",
            "Manisa": "M81.56 167.797l-1.683 2.619 2.057 24.692-15.526 4.303 3.18 20.39 23.57 15.526 8.418-3.928 23.57 10.101 1.684 11.411 18.893-7.67.375-26.188 12.346-5.238-17.584-26.376-22.822 4.676-10.85-9.54-2.058-8.979-7.67 1.122-15.9-6.921z",
            "Kütahya": "M156.947 159.38l1.123 3.366-8.605 15.527-10.289 2.431 1.684 6.735 17.584 26.376 33.297-8.605 11.037 11.41 12.533-11.784 1.871-9.915 9.166-6.547-2.245-16.462-14.216-11.972-14.591-3.741.187-10.663-14.591-1.87-13.47 18.52-10.475-2.807z",
            "Aydın": "M126.83 252.911l15.34 8.792.56 14.966-13.468 15.9-14.778-5.05-20.39 3.554-19.455-7.109-4.677 5.612 1.123 4.864-9.728 1.87-.935-9.166-1.684-1.683 1.684-5.986-6.922-5.051 6.548-1.497 4.863-4.863 1.31-5.612 16.087-6.36 30.118 2.244 5.612-6.173 8.792.748z",
            "Uşak": "M202.778 216.62l-12.72 14.779-5.425 6.173-2.62 9.728-11.223-4.303-25.067 2.245.375-26.19 12.346-5.237 33.297-8.605 11.037 11.41z",
            "Denizli": "M190.058 231.399l11.037 8.418 2.993 11.224-18.707 14.217 8.98 13.281-17.959 7.483 3.741 13.843-17.023 31.427-7.856-.749-26.002-37.974 13.468-15.9-.56-14.966-15.34-8.792 18.893-7.67 25.067-2.244 11.224 4.303 2.619-9.728 5.425-6.173z",
            "Muğla": "M71.085 294.44l-2.245 2.432 2.058 1.683 2.618-1.122 7.857 4.864-5.986 3.928.935 4.115-13.655-1.496-2.432 10.475 5.238-2.057 8.605 1.87 19.08-.187 21.513-.374-8.418 6.922-5.986-.936-.187 7.483-21.326-1.31-13.468 5.8 2.431 2.805h12.534l2.619-5.237 19.08-.188v3.742l-6.173 1.683 5.05 3.929-7.295 2.057 2.993 2.62 7.857-2.058 6.36-10.102-.935-4.115 8.044 2.806.187-4.303 2.432-.187 1.87 5.612 5.425-.748 1.497 5.799 9.353 7.295 2.432-5.612 2.806-3.18 8.605 5.8-4.49 3.74 4.303 4.116-1.684 10.101 8.044 5.238 4.115-9.353 12.908-7.483 10.101-19.267-.935-3.929-4.864-2.244-10.662 6.921-6.174-1.496-7.856-.749-26.002-37.974-14.778-5.05-20.39 3.554-19.455-7.109-4.677 5.612 1.123 4.864z",
            "Burdur": "M194.36 278.54l9.915 2.057 14.217-6.173 18.145 14.404 8.418 17.023-5.051 6.921-19.455-1.122-9.54-4.677-20.39 8.792-5.8 12.346-4.863-2.244-10.662 6.921-6.174-1.496 17.023-31.427-3.741-13.843 17.958-7.483z",
            "Bilecik": "M239.63 131.132l-19.455 17.023-11.598 2.245 1.31 9.54-14.591-3.741.187-10.663-.562-14.404 4.49-7.295.935-10.102 8.044-7.295.187 4.863 9.54 5.425 11.224-.748v3.928l4.677 1.871 5.612 9.353z",
            "Eskişehir": "M247.86 132.816l9.728 5.799 32.736 3.367 9.354 10.85 5.986 35.355-11.785 8.605-9.915.935-13.281-4.115-2.806-7.857-18.52 5.238-23.009-2.619-2.245-16.462-14.216-11.972-1.31-9.54 11.598-2.245 19.455-17.023 8.23 1.684z",
            "Ankara": "M259.272 127.578l-11.411 5.238 9.727 5.799 32.736 3.367 9.354 10.85 5.986 35.355-11.785 8.605 29.743 11.037 25.44-17.023 17.024 10.101-.187-3.18 7.108 9.728-1.87.935v7.483l6.172 5.612.749-5.425 4.49 5.612-.562 3.18 1.684 1.496 2.431-1.496 3.742-10.663-2.806-5.425 5.05-4.676-20.577-21.513-8.043-16.275 6.173-20.764 11.598-4.676 3.554-17.959-17.397-3.928-4.115 4.303-12.534-12.534 1.123-5.425-20.016-5.424-9.915 1.87 1.871 5.8-23.57 14.59-14.217 2.806-9.166-5.05-13.282-1.31-4.302 8.98z",
            "Afyonkarahisar": "M283.964 197.727l-4.302 31.988-15.714 10.663-6.921-5.238-33.485 19.642-19.267 25.815-9.915-2.058-8.979-13.281 18.707-14.217-2.993-11.224-11.037-8.418 12.72-14.778 12.533-11.785 1.871-9.915 9.166-6.547 23.01 2.619 18.519-5.238 2.806 7.857 13.281 4.115z",
            "Isparta": "M263.948 240.378l3.18 8.792 14.591 13.469-1.683 2.993-8.231 3.18.935 15.152-6.36 5.8-1.496 13.655-19.83 2.432-8.417-17.023-18.145-14.404-14.217 6.173 19.267-25.815 33.485-19.642 6.921 5.238z",
            "Konya": "M293.879 196.792l-9.915.935-4.302 31.988-15.714 10.663 3.18 8.792 14.591 13.469-1.683 2.806-8.231 3.367.935 15.152-6.36 5.8-1.496 13.655 21.325 3.367 35.542 39.658 20.39-12.346-8.979-10.289 6.922-14.591 18.706-11.411 9.166 5.238 16.649-12.72 16.088 20.202-.936 13.469 22.074-8.418-.935-4.49-4.677-17.77 3.18-8.044-15.713-17.023-33.86 2.057-9.352-21.138 7.856-14.965-11.785-9.54 3.555-12.534 5.799-1.87 1.683-2.245-1.496-7.109-17.023-10.101-25.441 17.023-29.743-11.037z",
            "Antalya": "M158.63 368.143l7.11 5.051 20.95 5.238 18.894-7.109L217.182 376l6.36-6.547-2.057-4.864 5.612-12.533 2.057-15.153 20.016.936 11.598 1.31 23.01 12.533 17.583 8.792 11.598 17.584 14.217 8.979.187-17.023-5.612-23.57-35.542-39.658-21.325-3.367-19.83 2.432-5.05 6.921-19.455-1.122-9.54-4.677-20.39 8.792-5.8 12.346.936 3.929-10.101 19.267-12.908 7.483-4.115 9.353z",
            "Karaman": "M399.757 323.996l-10.85 7.857-42.276 8.792 12.533 17.77.187 2.994-5.799-2.058-3.554 5.8-22.635 4.863-5.612-23.57 20.39-12.346-8.979-10.289 6.922-14.591 18.706-11.411 9.166 5.238 16.649-12.72 16.088 20.202-.936 13.469z",
            "Mersin": "M327.363 370.014l-.187 17.023 10.289 3.554 14.965-2.058 16.462-3.554 15.9-.187 7.296-9.914 6.547 2.619 5.799-9.167 28.808-25.253 12.159 4.49 11.785-4.303-2.993-8.231 1.497-6.547-6.174-1.871-2.806-7.296-9.727-13.094-16.087 4.864.935 4.49-22.074 8.417-10.85 7.857-42.276 8.792 12.533 17.77.187 2.994-5.799-2.058-3.554 5.8-22.635 4.863z",
            "Aksaray": "M392.088 204.088l5.799.374 10.475 13.842 4.116 5.051.187 6.922 8.418 5.799-2.806 6.734 1.87 11.037-16.461 14.404-33.86 2.057-9.352-21.138 7.856-14.965 6.922 3.741 1.31 3.367 3.18-5.986 1.496-2.619 5.238-.935-2.993-3.928.187-1.497 2.431-1.496 3.742-10.663-2.806-5.425 5.05-4.676z",
            "Kırıkkale": "M384.792 122.901l-3.554 17.959-11.598 4.676-6.173 20.764 8.043 16.275 15.9-7.295 17.21-18.707 3.742-9.166-6.547-12.346.187-2.806-5.799-4.864-11.411-4.49z",
            "Kırşehir": "M404.62 156.573l16.088 6.922 10.102 16.835-2.993 8.231 6.173.374-11.972 19.08-4.303 6.922-9.353 3.367-10.475-13.842-5.8-.374-20.577-21.513 15.9-7.295 17.21-18.707z",
            "Yozgat": "M495.908 145.723l7.296 22.635-14.217 18.145-17.023 9.728 1.31 4.302-10.85 7.109-12.346-1.684-6.174-17.584-13.094-8.044-10.102-16.835-16.087-6.922 3.741-9.166 11.598-4.115 7.483 2.806 14.778-5.051 1.496 3.554 10.476-3.18 1.497-12.346 8.979-.936 4.302.374.748 3.18 6.548 5.425 12.159-1.122 7.482 9.727z",
            "Sivas": "M628.911 132.629l-.935 5.799-17.023 1.683 4.49 7.857-4.49 43.96-26.189 5.986-2.058 5.8-12.533-2.058 3.928 15.526-10.662 11.785-28.621 4.116 9.914-30.305-12.72-8.792-40.78.374-2.245-7.857 14.217-18.145-7.296-22.635 28.247-1.87 5.238-14.217 17.771-3.554L564 130.384l7.108-9.353-.56-6.734 7.669 4.115 1.683-3.18 2.994 1.87 5.237-1.309.749-6.36 8.418-2.806 2.993 17.21 12.159 5.05 16.461 3.742z",
            "Nevşehir": "M450.078 205.958l2.431 27.125-9.54 14.03-24.692-4.303 2.806-6.734-8.418-5.8-.187-6.92-4.116-5.052 9.353-3.367 16.275-26.002-6.173-.374 2.993-8.23 13.094 8.043 6.174 17.584z",
            "Kayseri": "M534.818 233.083l-14.404 20.203-10.663-9.354-30.304 26.564-1.497 14.965-17.397-2.245.561-23.757-18.145-12.347 9.54-14.03-2.431-27.124 12.346 1.684 10.85-7.109-1.31-4.302 17.023-9.728 2.245 7.857 40.78-.374 12.72 8.792-9.914 30.305z",
            "Kahramanmaras": "M563.439 228.967l-3.929 6.173 25.815 17.21-5.986 17.771-9.353 18.333 10.102 8.23-4.116 8.418-22.448 13.095-9.166-10.476-10.101 8.231-7.857-10.101-14.591 1.122 1.87-23.757 6.735-29.93 14.404-20.203 28.62-4.116z",
            "Osmaniye": "M513.68 283.216l-11.598 3.928-9.354 31.427 9.54.374.749 9.54 20.39 5.051 2.245-10.475 8.605-7.109-7.857-10.101-14.591 1.122 1.87-23.757z",
            "Adana": "M520.414 253.286l-10.663-9.354-30.304 26.564-1.497 14.965-17.397-2.245-16.649 6.173-6.92 16.836 9.726 13.094 2.806 7.296 6.174 1.87-1.497 6.548 2.993 8.23-11.785 4.303 18.52 10.102 4.489 1.31 12.533-1.123 5.238-8.605-5.05-1.87 2.431-.75 6.547-.373 8.792-9.728 4.116-8.043-.748-9.54-9.54-.375 9.353-31.427 11.598-3.928 6.734-29.93z",
            "Niğde": "M418.277 242.81l1.87 11.037-16.461 14.404 15.713 17.023-3.18 8.043 4.677 17.772 16.087-4.864 6.921-16.836 16.65-6.173.56-23.757-18.145-12.347-24.692-4.302z",
            "Hatay": "M503.017 328.486l-4.116 8.043 10.476 7.109.561 11.41-16.461 12.16-4.116 7.295 9.54 17.585-2.805 4.676 13.842 6.735 9.54-11.224 1.31-12.347s14.965-1.496 14.965-1.87c0-.374-6.921-15.714-6.921-15.714l4.676-21.886-10.101-6.922-20.39-5.05z",
            "Gaziantep": "M523.407 333.536l2.245-10.475 8.605-7.109 10.101-8.23 9.166 10.475 22.448-13.095 4.116-8.417 18.706 1.87-6.921 17.397 11.036 20.203-22.634 10.102-10.663-4.303-.748 3.367-16.088-12.533-3.367-6.734-4.49.56-11.41 13.844-10.102-6.922z",
            "Kilis": "M533.508 340.458l18.52 4.676.561 4.303 14.404-.187 5.612 2.245 7.67-5.238-10.663-4.303-.748 3.367-16.088-12.533-3.367-6.734-4.49.56-11.41 13.844z",
            "Malatya": "M610.953 191.928l16.462 5.986.561 16.275-8.23 1.31-5.8 15.9 38.723 10.85-1.31 8.605-13.468 10.662-23.945-11.223-12.533 7.856 3.367 7.857-25.44 4.115 5.985-17.77-25.815-17.21 3.929-6.174 10.662-11.785-3.928-15.526 12.533 2.057 2.058-5.799 26.19-5.986z",
            "Erzincan": "M610.953 191.928l4.49-43.96-4.49-7.857 17.023-1.683.935-5.8 8.044 1.123 32.737 11.037 8.043-6.36 7.857-6.734 18.145.748-2.619 3.18 3.929 3.367 9.727 3.18 11.598 18.145-5.612 1.871-9.54.374-31.427-2.806-9.166 9.54-35.917 9.354-7.295 19.267-16.462-5.986z",
            "Tunceli": "M711.407 162.56l-16.088 15.526-4.676-.749-1.87 12.534-5.613 16.087-16.649 6.735-28.808-7.109-10.288-7.67 7.295-19.267 35.917-9.353 9.166-9.54 31.614 2.805z",
            "Adıyaman": "M579.34 270.121l-9.354 18.333 10.102 8.23 18.706 1.871 32.175-8.23L645 276.481l8.605-15.714 5.05-9.353-7.295-.561-13.468 10.662-23.945-11.223-12.533 7.856 3.367 7.857-25.44 4.115z",
            "Şanlıurfa": "M598.794 298.555l-6.921 17.397 11.036 20.203 11.786-4.676 22.447 10.85 24.88 1.683 25.067-3.928 25.253-12.72-21.325-38.91-5.986-20.016-31.427-7.67-8.605 15.714-14.03 13.842-32.175 8.231z",
            "Elazığ": "M627.415 198.101l.561 16.088-8.23 1.31-5.8 15.9 38.723 10.85 22.447-.187 33.298-13.469-2.619-40.78-17.023 2.058-5.612 16.087-16.649 6.735-28.995-7.109-10.101-7.483z",
            "Bingöl": "M720.76 162.185l-9.353.374-16.088 15.527-4.676-.749-1.87 12.534 17.022-2.058 2.619 40.78 4.677-.374 3.367-9.54 33.297-8.792 6.547-20.952-7.67-18.52-8.978-5.05-20.203 1.497 1.31-4.677z",
            "Muş": "M748.633 170.416l7.67 18.52-6.548 20.95 12.16 13.095 10.288-3.367 16.836-5.612 9.54-18.894 26.75-5.05-7.856-21.139-12.347-11.223-11.785 17.397-20.39 6.547-9.353-10.663-14.965-.561z",
            "Bitlis": "M843.1 186.878l-3.367 2.431 2.806 3.368 1.871-.749-1.122-2.431 3.928.56-1.31 4.677-5.799 2.806-17.958 1.31-10.475 5.612.935 6.921-7.109 8.044 7.109-1.87 16.649 2.431 2.619 32.362-3.555 4.303-25.815-17.958-9.353 4.302-14.59-4.864-6.361-18.52 16.836-5.611 9.54-18.894 26.75-5.05 10.663-6.36 7.108 3.18z",
            "Batman": "M772.203 219.614l-10.289 3.367-13.655 50.695 5.986 12.346 18.332-1.87 16.275-11.225-23.945-17.21 13.656-17.584-6.36-18.52z",
            "Siirt": "M778.563 238.133l-13.656 17.584 23.945 17.21 20.39 2.806 16.649-11.972 13.468 5.8 3.929-8.793-5.051-8.792-6.36.374-3.555 4.303-25.815-17.958-9.353 4.302-14.59-4.864z",
            "Mardin": "M691.017 288.454l21.325 38.91 10.476-8.793 21.886-8.418 36.852-.748.936-9.54h-5.238l.374-10.85 11.41-3.18-.186-12.908-16.275 11.224-18.332 1.87-5.986-12.345-32.924 13.468-24.318 1.31z",
            "Şırnak": "M788.852 272.927l.187 12.908-11.411 3.18-.374 10.85h5.238l-.936 9.54 19.642-6.547 8.418-8.044 6.547 2.619 1.31 7.482 9.914-3.928 8.418-11.972 31.427-1.87 2.245-25.254-26.19-1.123-3.928 8.792-13.468-5.799-16.65 11.972-20.39-2.806z",
            "Hakkari": "M869.477 261.89l-2.245 25.254 16.649 4.116 11.223-1.684 7.857-7.108 10.663 2.619-1.87 11.598 2.244 5.237 16.649-14.217 9.353 1.31-.374-9.166-11.037-9.915-1.31-16.648-10.85-3.929-12.907 8.605-5.05-6.36-28.995 10.289z",
            "Diyarbakır": "M652.669 242.249l-1.31 8.605 7.296.56-5.051 9.354 31.427 7.67 5.986 20.016 24.318-1.31 32.924-13.468 13.655-50.695-12.159-13.094-33.297 8.792-3.367 9.54-4.677.374-33.298 13.469-22.447.187z"
        }

        const loadedPaths = [];
        let emptyPaths = [];

        return (
            <div className={classes} style={style}>
                <svg viewBox="0 0 940 405" className="ui-text ui-ease-1st-svg">
                    {
                        <>
                            {
                                Object.keys(sizes).map((value, i, arr) => {

                                    const val = JSON.stringify(value).replace(/\"/g, '');

                                    let size = sizes[val] ? sizes[val] : 0;
                                    let info = '';

                                    if (size instanceof Object) { // check inner arrays

                                        info = '<strong class="ui-m-5-b ui-block">' + val + ': ' + size[defaultValue] + '</strong>';

                                        Object.keys(size).map((val: any, i: number, arr: any) => {

                                            if (val !== defaultValue) {

                                                info += val + ': ' + size[val];
                                                if (i + 1 < arr.length) info += '<br>';

                                            }

                                        });

                                        size = size[defaultValue];

                                    } else info = '<strong>' + val + '</strong>: ' + size;

                                    const unescaped = UnescapedUnicode(value);
                                    loadedPaths.push(unescaped);

                                    if (i + 1 === arr.length) emptyPaths = Object.keys(paths).filter(name => !loadedPaths.includes(name));

                                    return <path
                                        key={id + 1 + i}
                                        name={info}
                                        data-ui-size={size}
                                        data-ui-tooltip
                                        d={paths[unescaped]}
                                    />

                                })
                            }
                            {
                                emptyPaths.map((value: any, i: number) => {

                                    const size = sizes[value] ? sizes[value] : 0;
                                    const info = '<strong>' + value + '</strong>: ' + size;

                                    return <path
                                        key={id + 2 + i}
                                        name={info}
                                        data-ui-size={size}
                                        data-ui-tooltip
                                        d={paths[value]}
                                    />

                                })
                            }
                        </>
                    }
                </svg>
            </div>
        );

    }

const UnescapedUnicode = (value: any) => {

    let find = '';

    for (const char of value) {

        const code = char.codePointAt(0);
        if (code >= 0x80) find += `&#${code};`; else find += char;

    }

    const unescaped = find
        .replace(/&#305;&#775;/g, 'i') // ı + upper dot

        .replace(/&#304;/g, 'İ')
        .replace(/&#105;/g, 'i')

        .replace(/&#73;/g, 'I')
        .replace(/&#305;/g, 'ı')

        .replace(/&#350;/g, 'Ş')
        .replace(/&#351;/g, 'ş')

        .replace(/&#286;/g, 'Ğ')
        .replace(/&#287;/g, 'ğ')

        .replace(/&#199;/g, 'Ç')
        .replace(/&#231;/g, 'ç')

        .replace(/&#220;/g, 'Ü')
        .replace(/&#252;/g, 'ü')

        .replace(/&#214;/g, 'Ö')
        .replace(/&#246;/g, 'ö');

    return unescaped;

}