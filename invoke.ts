const invoke = (object, path, func, args) => {
  const splittedPath = path.split(".");
  // console.log(splittedPath, "splittedPath");
  const target = splittedPath.reduce((acc, key) => {
    // console.log(object["a"], "a");
    // console.log(acc["b"], "b");
    // console.log((acc = object[key]));
    acc = acc[key] ? acc[key] : object[key];
    console.log(acc, "my");
    return acc;
  }, {});
  console.log(target, "target");

  return Array.prototype[func].apply(target, args);
};
const data = { a: { b: [1, 2, 3] } };
// console.log(
invoke(data, "a.b", "splice", [1, 2]);
// ); // [2, 3]
