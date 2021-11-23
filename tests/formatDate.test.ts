import {formatDate} from '../src/dataGenScripts/formatDate';

test('makes date type format correctly for db insertion operation.', () => {
	expect(formatDate(2, 12, 2019)).toBe('2019-12-02');
});
test('makes date type format correctly for db insertion operation if passed wrong data.', () => {
	expect(formatDate(0, 32, 2023)).toBe('0000-00-00');
});
