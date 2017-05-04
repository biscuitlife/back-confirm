window.onload = function () {
    var initBox = new InterceptBox('boxDiv', 'closeBox','mustLeave');
    initBox.init();
};

function InterceptBox(targetDiv, otar, mustLeave) {
    this.boxDiv = document.getElementById(targetDiv);
    this.colseBox = document.getElementById(otar);
    this.mustLeave = document.getElementById(mustLeave);
}

InterceptBox.prototype.init = function () {
    this.pushHistory();
    this.listBcak();
    this.closeBOX();
    this.historyBack();
};

InterceptBox.prototype.pushHistory = function () {
    if (!window.history.state) {
        window.history.pushState({
            title: document.title,
            url: location.href
        }, document.title, location.href);
    }
};

InterceptBox.prototype.listBcak = function () {
    var that = this;
    setTimeout(function laterTime() {
        window.addEventListener("popstate", function (e) {
            if (e.state) {
                return
            } else {
                that.readTime();
            }
        }, false);
    }, 500)
};

InterceptBox.prototype.readTime = function (InterceptTime) {
    this.boxDiv.style.display = 'block';
};

InterceptBox.prototype.closeBOX = function (InterceptTime) {
    var that = this;
    this.colseBox.onclick = function () {
        that.boxDiv.style.display = 'none';
    };
};

InterceptBox.prototype.historyBack = function () {
    this.mustLeave.onclick = function () {
        window.history.back(-1);
    };
};
