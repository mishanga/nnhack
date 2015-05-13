angular.module('chat', [])

.controller('Form', function($scope) {
    var form = this;

    form.resetText = function() {
        this.text = rnText();
    }

    form.submit = function() {
        chat.add({
            name: this.name,
            text: this.text
        });
        this.resetText();
    }

    form.name = rnWord();
    form.resetText();
})

.controller('Chat', function($scope) {
    var chat = this;

    chat.add = function(post) {
        chat.list.unshift({
            author: post.name,
            text: post.text,
            date: new Date().toLocaleString()
        });
        chat.putCache();
    };

    chat.reset = function() {
        chat.dropCache();
        chat.list = [];
    };

    chat.getCache = function() {
        chat.list = angular.fromJson(window.localStorage.chat || '[]');
    }

    chat.putCache = function() {
        window.localStorage.chat = angular.toJson(chat.list);
    };

    chat.dropCache = function() {
        delete window.localStorage.chat;
    };

    chat.getCache();
    window.chat = chat; // FIXME!
});
