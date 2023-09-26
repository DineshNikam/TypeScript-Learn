"use strict";
class KeyValuePair {
    constructor(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
}
let pair = new KeyValuePair("1", "asd");
function wrapInArray(value) {
    return [value];
}
let number = wrapInArray(1);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
ArrayUtils.wrapInArray("sa");
ArrayUtils.wrapInArray(1);
//# sourceMappingURL=generic.js.map