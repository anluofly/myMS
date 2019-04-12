
import Buttons from '../pages/ui/buttons'
import Modals from '../pages/ui/modals'
import Loadings from '../pages/ui/loadings'
import Notification from '../pages/ui/notification'
import Messages from '../pages/ui/messages'
import Tabs from '../pages/ui/tabs'
import Gallery from '../pages/ui/gallery'
import Carousel from '../pages/ui/carousel'
import FormLogin from '../pages/form/login'
import FormRegister from '../pages/form/register'
import BasicTable from '../pages/table/basicTable'
import HighTable from '../pages/table/highTable'

export default [
    {path: '/admin/form/login', name: 'FormLogin', component: FormLogin},
    {path: '/admin/ui/buttons', name: 'Buttons', component: Buttons, auth: true},
    {path: '/admin/ui/modals', name: 'Modals', component: Modals},
    {path: '/admin/ui/modals', name: 'Modals', component: Modals},
    {path: '/admin/ui/loadings', name: 'Loadings', component: Loadings, auth: true},
    {path: '/admin/ui/notification', name: 'Notification', component: Notification, auth: true},
    {path: '/admin/ui/messages', name: 'Messages', component: Messages, auth: true},
    {path: '/admin/ui/tabs', name: 'Tabs', component: Tabs},
    {path: '/admin/ui/gallery', name: 'Gallery', component: Gallery, auth: true},
    {path: '/admin/ui/carousel', name: 'Carousel', component: Carousel, auth: true},
    {path: '/admin/form/register', name: 'FormRegister', component: FormRegister, auth: true},
    {path: '/admin/table/basic', name: 'BasicTable', component: BasicTable},
    {path: '/admin/table/high', name: 'HighTable', component: HighTable}
]
