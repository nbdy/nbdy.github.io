let Request = {
    request: function (url, method, data, cb){
        let r = new XMLHttpRequest();
        r.addEventListener("load", cb);
        r.open(method, "https://crossorigin.me/" + url);
        r.send(data);
    },
    get: function (url, cb) {
        Request.request(url, "GET", null, cb);
    },
    post: function (url, data, cb) {
        Request.request(url, "POST", null, cb);
    }
};

function Github(username) {
    let github = {
        url: "https://github.com/" + username,
        username: username,
        repositories: [],
        getRepositories: null,
        allFunctions: [],

        _cbGetRepositories: function (data) {
            console.log(data);
        },
    };

    github.getRepositories = function getRepositories() {
        Request.get(github.url, github._cbGetRepositories);
    };

    github.allFunctions = [
        github.getRepositories,
    ];

    return github;
}