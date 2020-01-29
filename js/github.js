let Github = function(username, cbGetInformation, cbGetRepositories) {
    this.username = username;
    this.url = "https://api.github.com/users/" + username;
    this.information = null;
    this.repositories = [];

    this.cbGetInformation = cbGetInformation;
    this.cbGetRepositories = cbGetRepositories;

    this._cbGetInformation = (data) => {
        this.information = data;
        if(this.cbGetInformation !== null) this.cbGetInformation(this);
    };

    this._cbGetRepositories = (data) => {
        this.repositories = data;
        if(this.cbGetRepositories !== null) this.cbGetRepositories(this);
    };

    this.getInformation = function () {
        $.getJSON(github.url, null, github._cbGetInformation);
    };

    this.getRepositories = function () {
        $.getJSON(github.url + "/repos", null, github._cbGetRepositories);
    }
};