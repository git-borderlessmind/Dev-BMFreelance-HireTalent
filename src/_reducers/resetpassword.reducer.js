import { userConstants } from '../_constants';

export function resetpassword(state = {}, action) {
    switch (action.type) {
        case userConstants.RESETPASSWORD_REQUEST:
            return { processing: true };
        case userConstants.RESETPASSWORD_SUCCESS:
            return {};
        case userConstants.RESETPASSWORD_FAILURE:
            return {};
        default:
            return state
    }
}