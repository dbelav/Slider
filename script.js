(function slider() {
    let visible = 0;
    let som = 0;
    let childImg = document.getElementById('container_inner');
    let childImgLength = childImg.children.length;
    let leftButton = document.getElementById('click_left');
    let rightButton = document.getElementById('click_right');

    leftButton.onclick = function () {
        if (visible === 0) {
            visible += childImgLength - 1;
            som += (childImgLength - 1) * 100 - som;
            childImg.children[0].style.marginLeft = `${-som}%`;
        } else {
            visible--;
            som = 0;
            som -= (visible) * 100
            childImg.children[0].style.marginLeft = `${som}%`;
        }
    }

    rightButton.onclick = function () {
        if (visible === childImgLength - 1) {
            visible -= childImgLength - 1;
            som = 0
            childImg.children[0].style.marginLeft = `${som}%`;
        } else {
            som -= 100;
            childImg.children[0].style.marginLeft = `${som}%`;
            visible++;
        }
    }
})();