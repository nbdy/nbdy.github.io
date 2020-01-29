let Github = function(
    username,
    cbGetInformation,
    cbGetRepositories,
    cbGetCommits,
    cbGetGazer
) {
    this.username = username;
    this.url = "https://api.github.com/users/" + username;
    this.information = null;
    this.repositories = [];
    this.commitSum = 0;
    this.gazerSum = 0;

    this.cbGetInformation = cbGetInformation;
    this.cbGetRepositories = cbGetRepositories;
    this.cbGetCommits = cbGetCommits;
    this.cbGetGazer = cbGetGazer;

    this._cbGetInformation = (data) => {
        this.information = data;
        this.cbGetInformation(this);
    };

    this._cbGetRepositories = (data) => {
        this.repositories = data;
        this.cbGetRepositories(this);
    };

    this._cbGetCommits = (data) => {
        this.commitSum += data.length;
        this.cbGetCommits(this);
    };

    this._cbGetGazer = (data) => {
        this.gazerSum += data.length;
        this.cbGetGazer(this);
    };

    this.getInformation = function () {
        $.getJSON(github.url, null, github._cbGetInformation);
    };

    this.getRepositories = function () {
        $.getJSON(github.url + "/repos?per_page=500", null, github._cbGetRepositories);
    };

    this.getCommits = function (url) {
        $.getJSON(url, null, github._cbGetCommits);
    };

    this.getGazer = function (url) {
        $.getJSON(url, null, github._cbGetGazer);
    }
};