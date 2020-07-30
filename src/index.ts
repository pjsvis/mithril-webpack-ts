// App entry point
import './index.scss'
import * as m from 'mithril'
import home from './components/home'
import Test from './components/test'
import about from './components/about'
import testtsx from './components/testtsx'

m.route(document.body, '/', {
	'/': home,
	'/test': Test,
	'/testtsx': testtsx,
	'/about': about
})

///////////////////////////////////////////////////////////////////////////////
// For webpack HMR
// NOTE: this won't work for more complex apps. However you can always
// hit refresh in your browser after making code changes.
// What this does is allow live CSS updates as well as simple code updates.
declare const module: any // tslint:disable-line no-reserved-keywords
if (module.hot) {
	module.hot.accept()
}
