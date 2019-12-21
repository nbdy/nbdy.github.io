

function Github(username) {
    let github = {
        url: "https://github.com/" + username,
        username: username,
        repositories: [],
        getRepositories: null,
        allFunctions: [],
    };

    github.getRepositories = function getRepositories() {
        let url = github.url + "stab=repositories";
        console.log(url);
        $.get(url, function (data) {
            let html = $("<div></div>");
            html.html = data;
            console.log(data);
            let repos = $("ul[value='your-repos-filter']");
            console.log(repos);
        });
    };

    github.allFunctions = [
        github.getRepositories,

    ];

    return github;
}