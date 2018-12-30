'use strict'

const Comment = use('App/Model/Comment')

class CommentController {
    async store({ request }) {
        const comment = await Comment.create(request.all())

        return comment
    }
}

module.exports = CommentController
