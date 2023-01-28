
async function fetchProfileData() {
    const url = 'https://github.com/MunizV650/portfolio-marcelo-muniz-junior/blob/master/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
