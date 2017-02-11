import test from 'ava';
import objectToArray from './';

test('fail when input is not an object', t => {
	t.throws(() => objectToArray(), 'Expected object, got undefined');
});

test('convert object to array', t => {
	const obj = {
		first: 'first value',
		second: 'second value'
	};

	const arr = objectToArray(obj);
	t.deepEqual(arr, [
		['first', 'first value'],
		['second', 'second value']
	]);
});
