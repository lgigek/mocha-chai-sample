class MathHelper {

    constructor() {
    }

    calc(operation, n1, n2) {

        switch (operation) {
            case 'addition':
                return this.__add(n1, n2);

            case 'subtraction':
                return this.__sub(n1, n2);

            case 'multiplication':
                return this.__mult(n1, n2);

            case 'division':
                return this.__div(n1, n2);

            default:
                return undefined;
        }
    }

    __add(n1, n2) {
        return n1 + n2;
    }

    __sub(n1, n2) {
        return n1 - n2;
    }

    __mult(n1, n2) {
        return n1 * n2;
    }

    __div(n1, n2) {
        return n1 / n2;
    }
}

let expose = {
    MathHelper
};

'object' === ('undefined' == typeof exports ? 'undefined' : typeof exports) ?
    module.exports = expose :
    undefined;