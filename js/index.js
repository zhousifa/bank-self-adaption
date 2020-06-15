(function () {
    function changeRootFont() {
        var designWidth = 750,
            rem2px = 100;
        document.documentElement.style.fontSize = ((window.innerWidth / designWidth) * rem2px) + 'px';
        //iphone6: (375 /750) * 100 + 'px';
    }
    changeRootFont();
    window.addEventListener('resize', changeRootFont, false);
})();