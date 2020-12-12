
import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
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
    getUserEmploymentsDetails,
    saveUserEmployment,
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

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/api/bm/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
           
            //console.log(user.user);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user.user));

            return user.user;
        });
}

function getAccessToken(){
    let user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    return token;
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/signup`, requestOptions).then(handleResponse);
    /*return fetch(`${config.apiUrl}/api/signup`, requestOptions)
    .then(response => response.json())
    .then(jsondata => console.log(jsondata));*/
}

function forgotpassword(user) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/sendResetPasswordLink`, requestOptions).then(handleResponse);
}

function checkresetpasswordtoken(token) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(token)
    };

    return fetch(`${config.apiUrl}/api/bm/checkPasswordResetToken`, requestOptions).then(handleResponse);
}

function resetpassword(user) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/resetPassword`, requestOptions).then(handleResponse);
}

function getalljobtypes() {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getalljobtypes`, requestOptions).then(handleResponse);
}

function getallcountires() {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getallcountries`, requestOptions).then(handleResponse);
}

function getalllanguages() {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getalllanguages`, requestOptions).then(handleResponse);
}

function getallskills() {
    /*const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getallskills`, requestOptions).then(handleResponse);*/

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getallskillsforuser`, requestOptions).then(handleResponse);
}

function saveUserProfile(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveuserprofile`, requestOptions).then(handleResponse);
}

function getUserProfileDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getuserprofiledetails`, requestOptions).then(handleResponse);
}


function saveUserSkills(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveuserskills`, requestOptions).then(handleResponse);
}

function getUserSkillsDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getuserskillsdetails`, requestOptions).then(handleResponse);
}

function saveUserEducation(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveusereducation`, requestOptions).then(handleResponse);
}

function saveUserEducationsList(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveusereducationslist`, requestOptions).then(handleResponse);
}


function getUserEducationsDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getusereducationsdetails`, requestOptions).then(handleResponse);
}

function getUserOnboardingStatus() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getuseronboardingstatus`, requestOptions).then(handleResponse);
}

function saveUserProfilePhoto(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveuserprofilephoto`, requestOptions).then(handleResponse);
}

function getUserProfilePhoto() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getuserprofilephoto`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.json().then(jsondata => {
        //console.log(jsondata);
        if(jsondata.errors){
            return Promise.reject(jsondata.errors[Object.keys(jsondata.errors)[0]]);
        } else if(jsondata.status){
            if(jsondata.status == 'success'){
                return jsondata;
            } else {
                if(jsondata.message){
                    return Promise.reject(jsondata.message);
                } else {
                    return jsondata;
                }
            }
        } else {
            return jsondata;
        }
        /*const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload();
            }
            const error = (data && data.message) || response.statusText;
            console.log(response);
            return Promise.reject(error);
        }
        return data;*/
    });
}

function saveUserEmployment(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveuseremployment`, requestOptions).then(handleResponse);
}



function saveUserEmploymentsList(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveuseremploymentslist`, requestOptions).then(handleResponse);
}

function searchUserByNameEmail(currentPage,rpp,searchValue) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/listusers?page=${currentPage}&pagesize=${rpp}&s=${searchValue}`, requestOptions).then(handleResponse);
}

function getUserEmploymentsDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getuseremploymentsdetails`, requestOptions).then(handleResponse);
}


function getUserTitleOverviewDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getusertitleoverviewdetails`, requestOptions).then(handleResponse);
}

function saveUserTitleOverview(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveusertitleoverview`, requestOptions).then(handleResponse);
}

function resendEmailConfirmation(user) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/resendemailconfirmation`, requestOptions).then(handleResponse);
}

function getUserBio() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getuserbio`, requestOptions).then(handleResponse);
}

function saveUserBio(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/saveuserbio`, requestOptions).then(handleResponse);
}

function getUserVerification() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/bm/getuserbackgroundreferencebilling`, requestOptions).then(handleResponse);
}

function removeUserProfilePhoto(user) {
    const token = getAccessToken();
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/removephoto`, requestOptions).then(handleResponse);
}

function updatepassword(user) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/bm/updatePassword`, requestOptions).then(handleResponse);
}