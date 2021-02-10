
import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    getFeaturedFreelancers,
    getalljobtypes,
    getalljobtypeswithskills,
    getJobTypeSkills,
    getSkillsOfAllParents,
    searchFreelancers,
    submitHireTalentRequest
};

function getAccessToken(){
    let user = JSON.parse(localStorage.getItem('user'));
    const token = user.access_token;
    return token;
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
function getFeaturedFreelancers() {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getFeaturedUsers`, requestOptions).then(handleResponse);
}

function getalljobtypes() {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getalljobtypes`, requestOptions).then(handleResponse);
}

function getalljobtypeswithskills() {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getalljobtypeswithskills`, requestOptions).then(handleResponse);
}

function getJobTypeSkills(jobtypeid) {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/bm/getJobTypeSkills?jobtypeid=${jobtypeid}`, requestOptions).then(handleResponse);
}

function getSkillsOfAllParents() {
    const requestOptions = {
        crossDomain:true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`${config.apiUrl}/api/bm/getallskills`, requestOptions).then(handleResponse);
}

function searchFreelancers(searchcriteria) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchcriteria)
    };

    return fetch(`${config.apiUrl}/api/bm/searchFreelancers`, requestOptions).then(handleResponse);
}

function submitHireTalentRequest(requestdata) {
    const requestOptions = {
        crossDomain:true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestdata)
    };

    return fetch(`${config.apiUrl}/api/bm/submithiretalentrequest`, requestOptions).then(handleResponse);
}