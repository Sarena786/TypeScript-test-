import { ToMerge } from './merge';


console.log(typeof ToMerge);
describe('ToMerge', () => {
    test('test1', () => {
        const result = ToMerge([1, 4], [2, 5], [6, 3]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('test2', () => {
        const result = ToMerge([], [], []);
        expect(result).toEqual([]);
    });

    test('test3', () => {
        const result = ToMerge([1, 2, 3], [], []);
        expect(result).toEqual([1, 2, 3]);
    });

    test('test4', () => {
        const result = ToMerge([1, 2], [3, 4], [6, 5]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('test5', () => {
        const result = ToMerge([1, 3], [2, 3], [3, 1]);
        expect(result).toEqual([1, 1, 2, 3, 3, 3]);
    });
});
