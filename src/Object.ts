Object.defineProperties(Object, {
	forEach: {
		enumerable: false,
		value: function (callback: (element: any, index?: string) => any) {
			// @ts-ignore
			return Object.keys(this).forEach((key) => callback(this[key], key));
		},
	},
	map: {
		enumerable: false,
		value: function (callback: (element: any, index?: string) => any) {
			let obj = {};

			Object.keys(this).forEach((key) => {
				// @ts-ignore
				obj[key] = callback(this[key], key);
			});
			return obj;
		},
	},
	equals: {
		enumerable: false,
		writable: true,
		value: function (other: any): boolean {
			return JSON.stringify(this) === JSON.stringify(other);
		},
	},
});

// @ts-ignore
Object.equals = (x: any, y: any): boolean => x.equals(y);

declare global {
	interface Object {
		forEach(callback: (element: any, index?: string) => any): void;
		map(callback: (element: any, index?: string) => any): this;
		// @ts-ignore
		static equals(x: any, y: any): boolean;
		equals(other: any): boolean;
	}
}
export {};
