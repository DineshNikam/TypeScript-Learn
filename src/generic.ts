// generic classes
class KeyValuePair<K, V> {
  constructor(public Key: K, public Value: V) {}
}

let pair = new KeyValuePair<string, string>("1", "asd");

//Generic Functions
function wrapInArray<T>(value: T) {
  return [value];
}

let number = wrapInArray(1);

//  Generic Methods

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
ArrayUtils.wrapInArray("sa");
ArrayUtils.wrapInArray(1);
