'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// memes
Route.get('/memes', 'MemeController.index')
Route.get('/meme/:id', 'MemeController.show')
Route.delete('/meme/:id', 'MemeController.delete')

// comment
Route.post('/comment', 'CommentController.store')
Route.delete('/comment/:id', 'CommentController.delete')

// reply
Route.post('/reply', 'ReplyController.store')
Route.delete('/reply/:id', 'ReplyController.delete')