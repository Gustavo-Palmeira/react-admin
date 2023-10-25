import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin'
import { PostTitle } from './PostTitle'

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="userId" reference="users" link="show" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
)
