module.exports = function toReadable (number) {
    const units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
      };
    
      const teens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
      };
    
      const tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
      };
    
    const stringFromNumber = String(number);

    switch (stringFromNumber.length) {
        case 1:
            return getUnits(stringFromNumber);
        case 2:
            return `${addTens(stringFromNumber)}${addUnit(stringFromNumber)}`;
        case 3:
            return `${addHundred(stringFromNumber)}${addUnit(stringFromNumber.slice(1))}`;
        }

    function getUnits(key) {
        return units[key];
    }

    function addTens(i) {
        const first = i[0];

        return first === "1" ? getTeens(i) : getTens(first);
    }

    function addUnit(i) {
        const first = i[0];
        const last = i.slice(1);

        return first > 1 && last !== "0" ? ` ${getUnits(last)}` : "";
    }

    function getTeens(key) {
        return teens[key];
    }

    function getTens(key) {
        return tens[key];
    }

    function addHundred(i) {
        const first = i[0];
        const last = i.slice(1);

        return last === "00" ? `${getUnits(first)} hundred` : `${getUnits(first)} hundred ${addNumber(last)}`;
    }

    function addNumber(i) {
        return i < 10 ? `${getUnits(i[1])}` : addTens(i);
    }
}
