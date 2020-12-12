
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    forgotpassword,
    getAll,
    checkresetpasswordtoken,
    resetpassword,
    getalljobtypes,
    getallcountires,
    getalllanguages,
    getallskills,
    saveUserProfile,
    getUserProfileDetails,
    getUserSkillsDetails,
    saveUserSkills,
    getUserEducationsDetails,
    saveUserEducation,
    saveUserEducationsList,
    saveUserEmployment,
    getUserEmploymentsDetails,
    saveUserEmploymentsList,
    getUserOnboardingStatus,
    saveUserProfilePhoto,
    getUserProfilePhoto,
    getUserTitleOverviewDetails,
    saveUserTitleOverview,
    resendEmailConfirmation,
    getUserBio,
    saveUserBio,
    getUserVerification,
    removeUserProfilePhoto,
    updatepassword
};

function login(email, password, rememberme, from) {
    return dispatch => {
        dispatch(request({ email }));
        userService.login(email, password)
            .then(
                user => { 
                    if(rememberme){
                        localStorage.setItem('rem_email', email);
                    } else {
                        localStorage.removeItem('rem_email');
                    }
                    dispatch(success(user));
                    //console.log('userlogin',user.user_onboarding_completed);
                    if(user.user_onboarding_completed === '1'){
                        history.push('/my-profile');
                    } else {
                        history.push('/user-profile');
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function forgotpassword(user) {
    return dispatch => {
        dispatch(request(user));

        userService.forgotpassword(user)
            .then(
                user => { 
                    dispatch(success());
                    //history.push('/login');
                    dispatch(alertActions.success('Password reset mail sent successfully.'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.FORGOTPASSWORD_REQUEST, user } }
    function success(user) { return { type: userConstants.FORGOTPASSWORD_SUCCESS, user } }
    function failure(error) { return { type: userConstants.FORGOTPASSWORD_FAILURE, error } }
}

function register(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                u => { 
                    dispatch(success());
                    //history.push('/login');
                    //dispatch(alertActions.success(u.message));
                    //console.log(u);
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback({
                        message: error.toString(),
                        status: 'error', 
                        hideontop: true
                    });
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function checkresetpasswordtoken(token, callback) {
    return dispatch => {
        dispatch(request({ token }));
        userService.checkresetpasswordtoken(token)
            .then(
                user => { 
                    dispatch(success(user));
                    callback(user);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    callback(null);
                }
            );
    };

    function request(user) { return { type: userConstants.VALIDATETOKEN_REQUEST, user } }
    function success(user) { return { type: userConstants.VALIDATETOKEN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.VALIDATETOKEN_FAILURE, error } }
}

function resetpassword(user, email) {
    return dispatch => {
        const userdata = {
            'email': email,
            'password': user.password,
            'confirm_password': user.confirm_password
        }
        dispatch(request(userdata));

        userService.resetpassword(userdata)
            .then(
                user => { 
                    dispatch(success());
                    dispatch(alertActions.success('Your password has been changed successfully'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.RESETPASSWORD_REQUEST, user } }
    function success(user) { return { type: userConstants.RESETPASSWORD_SUCCESS, user } }
    function failure(error) { return { type: userConstants.RESETPASSWORD_FAILURE, error } }
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

function getallcountires(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getallcountires()
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

function getalllanguages(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getalllanguages()
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

function getallskills(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getallskills()
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

function saveUserProfile(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserProfile(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Profile details saved successfully'));
                    setTimeout(function(){
                        history.push('/user-skills'); 
                        }, 1000);
                    
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function getUserProfileDetails(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserProfileDetails()
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

function getUserSkillsDetails(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserSkillsDetails()
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

function saveUserSkills(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserSkills(user)
            .then(
                u => { 
                    if(user.on_edit)
                    {
                        dispatch(success());
                        callback(u);
                    }
                    else{
                        dispatch(success());
                        //dispatch(alertActions.success('Skills details saved successfully'));
                        setTimeout(function(){
                            history.push('/user-education');
                            }, 1000);
                        callback(u);
                    }
                    
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function getUserEducationsDetails(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserEducationsDetails()
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

function saveUserEducation(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserEducation(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Education details saved successfully'));
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function saveUserEducationsList(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserEducationsList(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Education details saved successfully'));
                    setTimeout(function(){
                        history.push('/user-employment');
                        }, 1000);
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function getUserOnboardingStatus(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserOnboardingStatus()
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



function saveUserEmployment(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserEmployment(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Employment details saved successfully'));
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}



function getUserEmploymentsDetails(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserEmploymentsDetails()
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



function saveUserEmploymentsList(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserEmploymentsList(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Employment details saved successfully'));
                    setTimeout(function(){
                        history.push('/user-title-overview');
                        }, 1000);
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function searchUserByNameEmail(currentPage,rpp,searchValue, callback) {
    return dispatch => {
        dispatch(request({}));
        userService.searchUserByNameEmail(currentPage,rpp,searchValue)
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

function saveUserProfilePhoto(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserProfilePhoto(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Profile Photo saved successfully'));
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function getUserProfilePhoto(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserProfilePhoto()
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


function saveUserTitleOverview(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserTitleOverview(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Title & Overview details saved successfully'));
                    setTimeout(function(){
                        history.push('/my-profile');
                    }, 2000);
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function getUserTitleOverviewDetails(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserTitleOverviewDetails()
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

function resendEmailConfirmation(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.resendEmailConfirmation(user)
            .then(
                u => { 
                    dispatch(success());
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function getUserBio(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserBio()
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

function saveUserBio(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.saveUserBio(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Education details saved successfully'));
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };
}

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
  
function getUserVerification(callback) {
    return dispatch => {
        dispatch(request({}));
        userService.getUserVerification()
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

function removeUserProfilePhoto(user, callback) {
    return dispatch => {
        dispatch(request(user));

        userService.removeUserProfilePhoto(user)
            .then(
                u => { 
                    dispatch(success());
                    //dispatch(alertActions.success('Profile Photo saved successfully'));
                    callback(u);
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
                    console.log(error);
                    callback(error);
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_REQUEST, user } }
    function success(user) { return { type: userConstants.PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_FAILURE, error } }
}

function updatepassword(user, email) {
    return dispatch => {
        const userdata = {
            'email': email,
            'crtpassword': user.current_password,
            'password': user.password,
            'confirm_password': user.confirm_password
        }
        dispatch(request(userdata));

        userService.updatepassword(userdata)
            .then(
                user => { 
                    dispatch(success());
                    dispatch(alertActions.success('Your password has been changed successfully'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.RESETPASSWORD_REQUEST, user } }
    function success(user) { return { type: userConstants.RESETPASSWORD_SUCCESS, user } }
    function failure(error) { return { type: userConstants.RESETPASSWORD_FAILURE, error } }
}