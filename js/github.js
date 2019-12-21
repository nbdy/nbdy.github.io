
function Github(username) {
    let github = {
        url: "https://github.com/" + username,
        username: username,
        getRepositories: null,
        callbacks: [],
        allFunctions: [],

        run: null,
    };

    function getRepositories(github) {
        $.get("%stab=repositories" % github.username, function (data) {
            let r = [];
            let html = $("<div></div>");
            html.html = data;
            let repos = $("ul[value='your-repos-filter']");
            console.log(repos);
        });
    }

    github.getRepositories = getRepositories(github);

    github.allFunctions = [
        github.getRepositories,
    ];

    github.run = function () {
        for(let func in github.allFunctions) func(github);
    };

    return github;
}

window.setInterval(function () {
    Github("smthnspcl").run();
}, 4200);