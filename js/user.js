// user.js

export const displayUserInfo = () => {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const userDOB = localStorage.getItem('userDateOfBirdthday');
    const userCUIL = localStorage.getItem('userCUIL');
    const userRoles = localStorage.getItem('userRoles');

    if (userName) {
        document.getElementById('userName').textContent = userName;
        document.getElementById('userNameInfo').textContent = userName;
        document.getElementById('userEmail').textContent = userEmail;
        document.getElementById('userDateOfBirdthday').textContent = userDOB;
        document.getElementById('userCUIL').textContent = userCUIL;
        document.getElementById('userRoles').textContent = userRoles;
    } else {
        document.getElementById('userName').textContent = 'Invitado';
    }
};
