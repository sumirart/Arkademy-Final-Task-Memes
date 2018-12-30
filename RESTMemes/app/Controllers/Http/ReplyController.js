'use strict'

const Reply = use('App/Model/Reply')

class ReplyController {
    async store({ request }) {
        console.log(request)
        const reply = await Reply.create(request.all())

        return reply
    }
}

module.exports = ReplyController
