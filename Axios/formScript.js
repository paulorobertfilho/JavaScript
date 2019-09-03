

axios.get('https://api.github.com/users/paulorobertfilho')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
