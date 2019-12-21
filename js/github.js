{
    let BASE_URL = "https://github.com/";

    function Repository(username, repository) {
        let r = {
            url: BASE_URL + username + "/" + repository,
            created: null,
        }
    }

    function Github(username) {
        let github = {
            url: BASE_URL + username,
            username: username,
            repositories: [],
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
                github.repositories.append()
            });
        }

        github.getRepositories = getRepositories(github);

        github.allFunctions = [
            github.getRepositories,
        ];

        github.run = function () {
            for (let func in github.allFunctions) func(github);
        };

        return github;
    }
}

window.setInterval(function () {
    Github("smthnspcl").run();
}, 4200);