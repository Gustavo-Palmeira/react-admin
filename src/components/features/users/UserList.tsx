import { Theme, useMediaQuery } from '@mui/material'
import {
  Datagrid,
  EmailField,
  List,
  SimpleList,
  TextField,
} from 'react-admin'
import UrlField from '../../shared/UrlField'

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record, index) => `${record.name} - ${index}`}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <UrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  )
}
