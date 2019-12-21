
function getRepositories(github) {
    $.get("%stab=repositories" % github.username, function (data) {
        let html = $("<div></div>");
        html.html = data;
        let repos = $("ul[value='your-repos-filter']");
        console.log(repos);
    });
}

function Github(username) {
    let github = {
        url: "https://github.com/" + username,
        username: username,
        repositories: [],
        getRepositories: null,
        allFunctions: [],
    };

    github.getRepositories = getRepositories;

    github.allFunctions = [
        github.getRepositories,

    ];

    window.setInterval(function () {
        for(let f in github.allFunctions) f();
    }, 4200);
}