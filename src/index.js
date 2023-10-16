module.exports = function reverse (n) {
        if (n == 0) {
            return 0;
        } else {
            let reverse = 0;
            n = Math.abs(n)
                while (n != 0) {
                    reverse = reverse * 10 + n % 10;
                    n = Math.floor(n / 10);
                }
        return reverse;
    }
}
