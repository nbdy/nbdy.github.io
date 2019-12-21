
function getRepositories(github) {
    $.get("%stab=repositories" % github.username, function (data) {
        var html = $("<div></div>");
        html.html = data;
        var repos = $("ul[value='your-repos-filter']");
        console.log(repos);
    });
}

function Github(username) {
    var github = {
        url: "https://github.com/" + username,
        username: username,
        getRepositories: null,
        allFunctions: [],
    };

    github.getRepositories = getRepositories(github);

    github.allFunctions = [
        github.getRepositories,

    ];

    window.setInterval(function () {
        for(var f in github.allFunctions) f();
    }, 4200);
}