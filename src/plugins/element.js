import Vue from 'vue'
import { Button,Form,FormItem,Input,Message,Container,
  Header,Aside,Main,Menu,MenuItem,
  Submenu,Breadcrumb,BreadcrumbItem,Card,
  Row,Col,Table,TableColumn,Pagination,Switch,
  Tooltip,Dialog,MessageBox,Tag,Tree } from 'element-ui'
  
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message