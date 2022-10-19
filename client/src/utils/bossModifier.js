const bossModifier = () => {
    let digit = Math.floor(Math.random() * 101);
    function check(num) {
        if (num <= 50) {
            return '-';
        } else if (num <= 56) {
            return '-=';
        } else if (num <= 68) {
            return '~';
        } else if (num <= 88) {
            return '+';
        } else {
            return '--';
        }
    }
    return check(digit);
}

export default bossModifier;