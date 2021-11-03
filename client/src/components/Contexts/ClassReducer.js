import {
	CLASSES_LOADED_SUCCESS,
	CLASSES_LOADED_FAIL,
	ADD_CLASS,
} from './Constants'

export const ClassReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case CLASSES_LOADED_SUCCESS:
			return {
				...state,
				classes: payload,
				classesLoading: false
			}

		case CLASSES_LOADED_FAIL:
			return {
				...state,
				classes: [],
				classesLoading: false
			}

		case ADD_CLASS:
			return {
				...state,
				classes: [...state.classes, payload]
			}



		default:
			return state
	}
}