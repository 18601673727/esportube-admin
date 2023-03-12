import React from 'react';
import {
  DateField,
  ReferenceField,
  SimpleForm,
  Create,
  Edit,
  List,
  Filter,
  Datagrid,
  TextField,
  NumberField,
} from 'react-admin';
import BackButton from '../BackButton';
import DateRangeMode from '../dateRangeMode';

const OrderFilter = props => {
  return (
    <Filter {...props}>
      <DateRangeMode alwaysOn source="created_at"/>
    </Filter>
  )
}

export const OrderList = props => {
  return (
    <>
      <List {...props} filters={<OrderFilter />}>
        <Datagrid>
          <TextField source="id"/>
          <ReferenceField label="视频" source="video_id" reference="videos">
            <TextField source="title"/>
          </ReferenceField>
          <ReferenceField label="金额" source="payment_id" reference="payments">
            <NumberField source="amount"/>
          </ReferenceField>
          <ReferenceField label="类型" source="payment_id" reference="payments">
            <TextField source="type"/>
          </ReferenceField>
          <DateField source="created_at" label="建单于" showTime />
          <DateField source="last_used_at" label="使用于" showTime />
        </Datagrid>
      </List>
    </>
  )
}

export const OrderCreate = props => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          {/* <TextInput source="id" label="ID" />
          <TextInput source="video_id" label="视频" />
          <TextInput source="payment_id" label="收入" />
          <DateTimeInput source="created_at" label="建单于"/>
          <DateTimeInput source="last_used_at" label="成功于"/> */}
        </SimpleForm>
      </Create>
      <BackButton/>
    </>
  )
}

export const OrderEdit = props => {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          {/* <TextInput source="id" label="ID" />
          <TextInput source="video_id" label="视频" />
          <TextInput source="payment_id" label="收入" />
          <DateTimeInput source="created_at" label="建单于"/>
          <DateTimeInput source="last_used_at" label="成功于"/> */}
        </SimpleForm>
      </Edit>

      <BackButton/>
    </>
  )
}