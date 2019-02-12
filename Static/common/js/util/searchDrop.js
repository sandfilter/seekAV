define(['jquery'], function($) {
    var SearchDrop = function(m, n, curIndex) {
        this.m = m;
        this.n = n;
        this.curIndex = curIndex;
        this.moveUp = function() {
                var m = this.m;
                var n = this.n;
                var curIndex = this.curIndex;
                if (n > 1) {
                    n = n - 1;
                    curIndex = 3 * (n - 1) + m - 1;
                } else {
                    n = 0;
                    curIndex = -1;
                }
                this.n = n;
                this.curIndex = curIndex;
            },
            this.moveDown = function() {
                var m = this.m;
                var n = this.n;
                var curIndex = this.curIndex;
                if (n < 15) {
                    n = n + 1;
                }
                if (n == 1) {
                    m = 1;
                }
                curIndex = m == 3 ? 3 * n - 1 : 3 * (n - 1) + m - 1;
                this.m = m;
                this.n = n;
                this.curIndex = curIndex;
            },
            this.moveLeft = function() {
                var m = this.m;
                var n = this.n;
                if (m > 1) {
                    m = m - 1;
                }
                this.curIndex = 3 * (n - 1) + m - 1;
                this.m = m;
            },
            this.moveRight = function() {
                var m = this.m;
                var n = this.n;
                if (m < 3) {
                    m = m + 1;
                }
                this.curIndex = 3 * (n - 1) + m - 1;
                this.m = m;
            }
    }

    return SearchDrop;
});