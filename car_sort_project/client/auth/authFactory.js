angular.module('MotoBene').factory('AuthFactory', [
    '$cookies', '$location',
    ($cookies, $location) => {
        let userCredentials = null;

        return {
            credentials(creds) {
                if (creds) {
                    userCredentials = window.btoa(`${creds.username}:${creds.password}`);
                    $cookies.put('motobene', userCredentials);
                } else {
                    return userCredentials;
                }
            },
            logout() {
                userCredentials = null;
                $cookies.remove('motobene');
                $location.path("/login");
            },
            read() {
                return userCredentials = $cookies.get('motobene');
            },
            update(creds) {
                userCredentials = creds;
            }
        }
    }
]);
