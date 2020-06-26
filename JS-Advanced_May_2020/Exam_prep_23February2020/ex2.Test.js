class Article {

    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
    }

    get likes() {
        let message = ''
        if (this._likes.length === 0) {
            return message = `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return message = `${this._likes[0]} likes this article!`
        } else {
            return message = `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error ('You can\'t  like the same article twice!')
        } else if (username === this.creator) {
            throw new Error ('You can\'t like you own articles!')
        } else {
            this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this article!')
        } else {
            this._likes.pop(username)
            return `${username} disliked ${this.title}`
        }
    }

    comment(username, content, id) {
        if (id === undefined || !(this._comments.find((c) => c.id === id))) {
            let newId;
            if (this._comments.length === 0) {
                newId = 1;
            } else {
                newId = this._comments.length + 1
            }
            this._comments.push({ id: newId, username: username, content: content, replies: [] })
            return `${username} commented on ${this.title}`
        } else if (this._comments.find((c) => c.id = id)) {
            let returnMessage = ''

            this._comments.map(comment => {
                if (comment.id === id) {
                    let replyNewId;
                    if (comment.replies.length === 0) {
                        replyNewId = `${comment.id}.1`
                    } else {
                        replyNewId = `${comment.id}.${comment.replies.length + 1}`
                    }

                    comment.replies.push({ id: replyNewId, username: username, content: content })


                    returnMessage = `You replied successfully`;
                }
            })
            return returnMessage;
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`

        let sortingParameter = {
            'asc': (a, b) => a.id - b.id,
            'desc': (a, b) => b.id - a.id,
            'username': (a, b) => a.username.localeCompare(b.username)
        }

        let sorting = sortingParameter[sortingType]
        this._comments.sort(sorting).map(currentElement => {
            result += `\n-- ${currentElement.id}. ${currentElement.username}: ${currentElement.content}`
            if(currentElement.replies.length > 0){
                currentElement.replies.sort(sorting).map(currentEl =>{
                    result += `\n--- ${currentEl.id}. ${currentEl.username}: ${currentEl.content}`
                })
            }
        })

        return result;
    }

}


let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
