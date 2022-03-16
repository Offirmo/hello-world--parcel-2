export function add<T = number>(a: Readonly<T>, b: Readonly<T>): Readonly<T> {
	return a + b;
}
