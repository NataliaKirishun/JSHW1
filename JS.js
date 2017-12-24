(function () {
    'use strict';
    printDuplicateNumbers(1, 2, 5, 8, 7, 2, 1, 8, 12, 8, 8, 8, 8, 9, -5, 1, 8, -5, 12, 12, 12, -5, 0, 0, 0,125,856,125);
    function printDuplicateNumbers() {
        let array = [...arguments];
        array.sort(function (a, b) {
            return a - b;
        });
        let count = 1;
        for (let i = 0; i < array.length-1; i++) {
            if (array[i] === array[i + 1]) {
                count += 1;
                if ((array[i] !== array[i + 2]) && (count > 1)) {
                    console.log(`${array[i]}-${count}`);
                    count = 1;
                }
            }
        }
    }
}());
