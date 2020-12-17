
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    getFeaturedFreelancers,
    getalljobtypes,
    getalljobtypeswithskills,
    getJobTypeSkills,
    searchFreelancers
};

function getFeaturedFreelancers(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getFeaturedFreelancers()
            .then(
                data => { 
                    dispatch(success(data));
                    callback(data);
                },
                error => {
                    dispatch(failure(error.toString()));
                    callback(null);
                }
            );
    };
    function request(data) { return { type: userConstants.GENERAL_REQUEST, data } }
    function success(data) { return { type: userConstants.GENERAL_SUCCESS, data } }
    function failure(data) { return { type: userConstants.GENERAL_FAILURE, data } }
}

function getalljobtypes(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getalljobtypes()
            .then(
                data => { 
                    dispatch(success(data));
                    callback(data);
                },
                error => {
                    dispatch(failure(error.toString()));
                    callback(null);
                }
            );
    };
    function request(data) { return { type: userConstants.GENERAL_REQUEST, data } }
    function success(data) { return { type: userConstants.GENERAL_SUCCESS, data } }
    function failure(data) { return { type: userConstants.GENERAL_FAILURE, data } }
}

function getalljobtypeswithskills(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getalljobtypeswithskills()
            .then(
                data => { 
                    dispatch(success(data));
                    callback(data);
                },
                error => {
                    dispatch(failure(error.toString()));
                    callback(null);
                }
            );
    };
    function request(data) { return { type: userConstants.GENERAL_REQUEST, data } }
    function success(data) { return { type: userConstants.GENERAL_SUCCESS, data } }
    function failure(data) { return { type: userConstants.GENERAL_FAILURE, data } }
}

function getJobTypeSkills(jobtypeid,callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getJobTypeSkills(jobtypeid)
            .then(
                data => { 
                    dispatch(success(data));
                    callback(data);
                },
                error => {
                    dispatch(failure(error.toString()));
                    callback(error);
                }
            );
    };
    function request(data) { return { type: userConstants.GENERAL_REQUEST, data } }
    function success(data) { return { type: userConstants.GENERAL_SUCCESS, data } }
    function failure(data) { return { type: userConstants.GENERAL_FAILURE, data } }
}

function searchFreelancers(searchcriteria,callback) {
    console.log(searchcriteria);
    return dispatch => {
        dispatch(request({}));
        userService.searchFreelancers(searchcriteria)
            .then(
                data => { 
                    dispatch(success(data));
                    callback(data);
                },
                error => {
                    dispatch(failure(error.toString()));
                    callback(error);
                }
            );
    };
    function request(data) { return { type: userConstants.GENERAL_REQUEST, data } }
    function success(data) { return { type: userConstants.GENERAL_SUCCESS, data } }
    function failure(data) { return { type: userConstants.GENERAL_FAILURE, data } }
}