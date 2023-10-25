import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
} from 'react-admin'

export const PostList = () => {
  const postFilters = [
    <TextInput key="search" source="q" label="Search" alwaysOn />,
    <ReferenceInput
      key="user"
      source="userId"
      label="User"
      reference="users"
    />,
  ]

  return (
    <List filters={postFilters}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" link="show" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  )
}
