'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meme extends Model {
    comments() {
        return this.hasMany('App/Models/Comment')
    }
}

module.exports = Meme
