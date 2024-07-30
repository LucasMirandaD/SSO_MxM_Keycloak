// user.js

export const displayUserInfo = () => {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const userDOB = localStorage.getItem('userDOB');
    const userCUIL = localStorage.getItem('userCUIL');
    const userRoles = localStorage.getItem('userRoles');

    if (userName) {
        document.getElementById('userName').textContent = userName;
        document.getElementById('userNameInfo').textContent = userName;
        document.getElementById('userEmail').textContent = userEmail;
        document.getElementById('userCUIL').textContent = userCUIL;
        document.getElementById('userRoles').textContent = userRoles;
        document.getElementById('userDOB').textContent = userDOB;
    } else {
        document.getElementById('userName').textContent = 'Invitado';
    }
};
