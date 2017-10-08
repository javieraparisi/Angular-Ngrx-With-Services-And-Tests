import { ActionReducer, Action } from '@ngrx/store';

export const SHOW = 'SHOW';
export const HIDE = 'HIDE';

export function counterReducer(state: boolean = false, action: Action) {
	switch (action.type) {

		case SHOW:
			return true;

		case HIDE:
			return false;

		default:
			return state;
	}
}

export interface AppState {
  spinnerVisibility: boolean;
}
