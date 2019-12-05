class coolMath {
    data: number;
    goldenRatio: number;
    constructor(data: number) {
        this.data = data;
        this.goldenRatio = 1.61803398875;
    }

    /**
     * @returns {number}  the value of a number rounded to the nearest integer.
     */
    round(): number {
        return Math.round(this.data);
    }

    /**
     * @returns {number} returns the largest integer less than or equal to a given number.
     */
    floor(): number {
        return Math.floor(this.data);
    }

    /**
     * @returns {number} rounds to the next largest whole number
     */
    ceil(): number {
        return Math.ceil(this.data);
    }

    /**
     * @param x a number to pad before the number
     * @param y a number to pad after the number
     */
    pad(x: number, y: number): string {
        const padLeft = "0".repeat(x);
        const padRight = "0".repeat(y);
        return `${padLeft}${this.data}${padRight}`;
    }

    /**
     * @param degrees a number
     * @returns {number} returns a number
     */
    degToRad(degrees: number): number {
        const pi = Math.PI;
        return degrees * (pi / 180);
    }

    /**
     *
     * @param radians a number
     * @returns {number} to degrees
     */
    radToDeg(radians: number): number {
        const pi = Math.PI;
        return radians * (180 / pi);
    }

    intFormat(): number {
        //Not right now
        return 0;
    }

    /**
     * @returns a string
     */
    toDollars(): string {
        const strVal = this.data.toString();
        const firstValue = Array.from(strVal)[0];
        if (+firstValue !== 0) {
            return `$${this.data}`;
        }
        return ` ¢${this.data}`;
    }

    /**
     * @param price the price of the item
     * @param quantity the quantity
     * @returns the tax
     */
    tax(price: number, quantity: number): number {
        const salesTax = 0.1;
        const totalPrice = price * quantity * (1 + salesTax);
        return totalPrice;
    }

    /**
     * @param  {number} rate the rate of this tax
     */
    withTax(rate: number) {
        return this.data * rate;
    }

    /**
     * @param total the total amount of interest
     * @param years the total amount of years to pay of the interest
     * @param ratePercent the rate at which someone needs to be there debt off
     * @param roundToPlaces how many places to round to
     */
    interest(
        total: number,
        years: number,
        ratePercent: number,
        roundToPlaces: number
    ): number {
        const interestRate = ratePercent / 100 + 1;
        return +(total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
    }

    /**
     * @param principalAmount the starting amount
     * @param numbOfPayments number of payments
     * @param interest the amount of interest
     */

    mortage(
        principalAmount: number,
        numbOfPayments: number,
        interest: number
    ): number {
        return (
            (principalAmount * interest * Math.pow(1 + interest, numbOfPayments)) /
            (Math.pow(1 + interest, numbOfPayments) - 1)
        );
    }

    /**
     * Converts an integer to a hex code
     * @returns {string} a hex code
     */
    intToHex(): string {
        return this.data.toString(16);
    }

    /**
     * @returns {number} a random number
     */
    random(): number {
        return Math.random();
    }

    /**
     *
     * @param min the minumum number
     * @param max the maximum number
     */
    randomRange(min: number, max: number): number {
        const minInt = Math.ceil(min);
        const maxInt = Math.floor(max);
        return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    }

    /**
     * @returns {string} a hex code
     */
    randomColor(): string {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

module.exports = CustomMath;