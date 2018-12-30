'use strict'

const Meme = use('App/Models/Meme')

class MemeController {

    async index() {
        return await Meme.all()
    }

    async show({ params }) {
        // return await Meme.query().where('id', params.id).with('comments').first()
        return await Meme.query().where('id', params.id).first()
    }

    async delete({ request, params }) {
        const order = await Order.find(params.id)
        order.delete()

        return { success: true }
    }
}

module.exports = MemeController
