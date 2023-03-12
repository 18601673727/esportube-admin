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

export const ConfigList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="key"/>
        <TextField source="value"/>
        <EditButton/>
        <DeleteButton/>
      </Datagrid>
    </List>
  )
}

export const ConfigCreate = props => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="key" />
          <TextInput source="value" />
        </SimpleForm>
      </Create>
      <BackButton/>
    </>
  )
}

export const ConfigEdit = props => {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="key" />
          <TextInput source="value" />
        </SimpleForm>
      </Edit>

      <BackButton/>
    </>
  )
}