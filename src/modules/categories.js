import React from 'react';
import {
  // Show,
  // Filter,
  // SimpleShowLayout,
  // RichTextField,
  // ReferenceField,
  // ReferenceManyField,
  // DateField,
  // DisabledInput,
  // LongTextInput,
  // ReferenceInput,
  // SelectInput,
  SimpleForm,
  TextInput,
  Create,
  Edit,
  DeleteButton,
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';
import BackButton from '../BackButton';

export const CategoryList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name" label="名称"/>
        <TextField source="chinese_name" label="中文名"/>
        <EditButton/>
        <DeleteButton/>
      </Datagrid>
    </List>
  )
}

export const CategoryCreate = props => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="name" label="名称" />
          <TextInput source="chinese_name" label="中文名" />
        </SimpleForm>
      </Create>
      <BackButton/>
    </>
  )
}

export const CategoryEdit = props => {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="name" label="名称" />
          <TextInput source="chinese_name" label="中文名" />
        </SimpleForm>
      </Edit>

      <BackButton/>
    </>
  )
}