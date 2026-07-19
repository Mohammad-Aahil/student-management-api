const objectTesting = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
];
function changeObjectValue(id, newObj) {
  let updatedObj = objectTesting.find((obj) => obj.id === id);
  Object.assign(updatedObj, newObj);
  return updatedObj;
}

console.log(changeObjectValue(1, { id: 1, name: "Aahil" }));
console.log(objectTesting);
