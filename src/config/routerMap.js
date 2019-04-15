
import Emoji from '../pages/emoji'
import Panel from '../pages/panel'
import ImageCrop from '../pages/image-crop' 
import HighLight from '../pages/highLight'
import Move from '../pages/move'


export default [
    {path: '/admin/emoji', name: 'Emoji', component: Emoji},
    {path: '/admin/panel', name: 'Panel', component: Panel},
    {path: '/admin/image', name: 'ImageCrop', component: ImageCrop},
    {path: '/admin/highLight', name: 'HighLight', component: HighLight},
    {path: '/admin/move', name: 'Move', component: Move},
]
