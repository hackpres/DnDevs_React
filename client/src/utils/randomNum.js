

export default function randNum(length, usedIndex) {
    let number = Math.floor(Math.random() * length);
    if (usedIndex.includes(number)) {
        return randNum(length, usedIndex);
    }
    return number;
}