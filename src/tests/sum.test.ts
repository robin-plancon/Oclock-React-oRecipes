import { describe, it, expect, expectTypeOf } from 'vitest';
import sum from './example-sum';

describe('Sum function', () => {
  describe('Structure', () => {
    it('Should be a function', () => {
      // expect(typeof sum).toBe('function');
      expectTypeOf(sum).toBeFunction();
    });
    it('Should return a number', () => {
      // expect(typeof sum()).toBe('number');
      expect(typeof sum()).toBe('number');
      expect(sum()).not.toBeNaN();
    });
  });

  describe('Execution', () => {
    it('Should return 8 when given 3 and 5', () => {
      expect(sum(3, 5)).toBe(8);
    });

    it('Should take as many numbers as I want', () => {
      expect(sum(3)).toBe(3);
      expect(sum(3, 5, 7)).toBe(15);
      expect(sum(3, 5, 7, 9)).toBe(24);
    });
  });
});
