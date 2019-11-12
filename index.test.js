const { assert } = require("chai");
const { Node, Tree } = require("./index");

test("It is possible to create new Node", () => {
  // ACT
  const result = new Node(13);

  // ASSERT
  assert.exists(result);
  assert.strictEqual(result.value, 13);
  assert.isNull(result.left);
  assert.isNull(result.right);
});

test("It is possible to create new Tree", () => {
  // ACT
  const result = new Tree();

  // ASSERT
  assert.exists(result);
  assert.isNull(result.root);
});

test("It is possible to add nodes to the tree", () => {
  // ARRANGE
  const target = new Tree();
  const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];

  // ACT
  nums.forEach(value => target.add(value));

  // ASSERT
  const objs = target.toObject();

  expect(objs.value).toEqual(3);

  expect(objs.left.value).toEqual(1);
  expect(objs.left.left).toBeNull();

  expect(objs.left.right.value).toEqual(2);
  expect(objs.left.right.left).toBeNull();
  expect(objs.left.right.right).toBeNull();

  expect(objs.right.value).toEqual(7);

  expect(objs.right.left.value).toEqual(4);
  expect(objs.right.left.left).toBeNull();

  expect(objs.right.left.right.value).toEqual(6);
  expect(objs.right.left.right.left.value).toEqual(5);
  expect(objs.right.left.right.left.right).toBeNull();
  expect(objs.right.left.right.left.left).toBeNull();

  expect(objs.right.right.value).toEqual(10);
  expect(objs.right.right.right).toBeNull();

  expect(objs.right.right.left.value).toEqual(9);
  expect(objs.right.right.left.right).toBeNull();

  expect(objs.right.right.left.left.value).toEqual(8);
  expect(objs.right.right.left.left.right).toBeNull();
  expect(objs.right.right.left.left.left).toBeNull();
});