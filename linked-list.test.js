const LinkedList = require('./LinkedList'); // Adjust the path as needed

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('push', () => {
    test('should append new nodes to the tail', () => {
      list.push(3);
      list.push(5);
      list.push(8);
      expect(list.average()).toBeCloseTo(5.33333); // Check average after pushes
    });
  });

  describe('pop', () => {
    test('should remove and return the tail value', () => {
      list.push(3);
      list.push(5);
      list.push(8);
      expect(list.pop()).toBe(8);
      expect(list.average()).toBe(4); // Check average after pop
    });

    test('should throw error if list is empty', () => {
      expect(() => list.pop()).toThrow('List is empty');
    });
  });

  describe('shift', () => {
    test('should remove and return the head value', () => {
      list.push(3);
      list.push(5);
      expect(list.shift()).toBe(3);
      expect(list.average()).toBe(5); // Check average after shift
    });

    test('should throw error if list is empty', () => {
      expect(() => list.shift()).toThrow('List is empty');
    });
  });

  describe('getAt', () => {
    test('should retrieve value at valid index', () => {
      list.push(3);
      list.push(5);
      expect(list.getAt(0)).toBe(3);
      expect(list.getAt(1)).toBe(5);
    });

    test('should throw error for invalid index', () => {
      expect(() => list.getAt(1)).toThrow('Index is invalid');
      expect(() => list.getAt(-1)).toThrow('Index is invalid');
    });
  });

  describe('setAt', () => {
    test('should set value at valid index', () => {
      list.push(3);
      list.push(5);
      list.setAt(1, 10);
      expect(list.getAt(1)).toBe(10);
   
    });
});
});