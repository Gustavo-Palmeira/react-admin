import { Admin, Resource } from 'react-admin'
import { dataProvider } from './config/providers/dataProvider'
import { UserList } from './components/features/users/UserList'
import { PostList } from './components/features/posts/PostList'
import { UserShow } from './components/features/users/UserShow'
import { PostEdit } from './components/features/posts/PostEdit'
import { PostCreate } from './components/features/posts/PostCreate'
import { Dashboard } from './Dashboard'
import { authProvider } from './config/providers/authProvider'
import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'

export const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
)
