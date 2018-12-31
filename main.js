/**
 * Api
 */
axios.get('https://api.github.com/users/fernandodemoraes')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (resolve) {
        console.log(resolve);
    });