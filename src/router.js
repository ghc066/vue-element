import Layout from './components/basic/layout'
import Container from './components/basic/container'
import Icon from './components/basic/icon'
import Button from './components/basic/button'
import Table from './components/table/table'
import Form from './components/form/form'
import UpLoad from './components/form/upload'

export default [{
	path: '/',
	redirect: '/layout',
	name: 'home'
}, {
	path: '/layout',
	name: 'layout',
	component: Layout
}, {
	path: '/container',
	name: 'container',
	component: Container
}, {
	path: '/icon',
	name: 'icon',
	component: Icon
}, {
	path: '/button',
	name: 'button',
	component: Button
}, {
	path: '/table',
	name: 'table',
	component: Table
}, {
	path: '/form',
	name: 'form',
	component: Form
}, {
	path: '/upload',
	name: 'upload',
	component: UpLoad
}, {
	path: "*",
	redirect: '/layout'
}];