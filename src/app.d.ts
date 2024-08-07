// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import 'unplugin-icons/types/svelte';

declare global {
	namespace App {
		interface Error {
			cause: {
				code: string;
			};
		}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Session {
			token: string;
		}
	}
	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			onclick_outside?: CompositionEventHandler<T>;
		}
	}
}

// declare namespace App {
// 	// user-specific information passed to each query
// }
