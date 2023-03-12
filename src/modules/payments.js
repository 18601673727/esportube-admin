import React from 'react';
import {
  // Show,
  // SimpleShowLayout,
  // RichTextField,
  // ReferenceManyField,
  // DateField,
  // DisabledInput,
  // LongTextInput,
  // ReferenceField,
  // ReferenceInput,
  // DateTimeInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Create,
  Edit,
  DeleteButton,
  List,
  Filter,
  Datagrid,
  TextField,
  NumberField,
} from 'react-admin';
import BackButton from '../BackButton';
import DateRangeMode from '../dateRangeMode';
import PaymentAggregate from '../PaymentAggregate';

const PaymentFilter = props => {
  return (
    <Filter {...props}>
      <SelectInput alwaysOn label="类型" source="type" choices={[
          { id: '单次', name: '单次' },
          { id: '包月', name: '包月' },
        ]}
      />
      <DateRangeMode alwaysOn source="created_at"/>
    </Filter>
  )
}

export const PaymentList = props => {
  return (
    <>
      <List {...props} filters={<PaymentFilter />}>
        <Datagrid>
          <TextField source="id"/>
          <TextField source="type" label="类型"/>
          <NumberField source="amount" label="金额"/>
          <TextField source="gateway" label="网关名称"/>
          <TextField source="gateway_pay_number" label="网关流水号"/>
          <TextField source="gateway_order_number" label="网关订单号"/>
          {/* <DateField source="created_at" label="建单于" showTime /> */}
          {/* <DateField source="completed_at" label="成功于" showTime /> */}
          {/* <TextField source="refuned_at"/> */}
          <DeleteButton/>
        </Datagrid>
      </List>
      <PaymentAggregate {...props}/>
    </>
  )
}

export const PaymentCreate = props => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="amount" label="金额"/>
          <SelectInput label="类型" source="type" choices={[
              { id: '单次', name: '单次' },
              { id: '包月', name: '包月' },
            ]}
          />
          {/* <TextInput source="gateway"/> */}
          {/* <DateTimeInput source="created_at" label="建单于"/> */}
          {/* <DateTimeInput source="completed_at" label="成功于"/> */}
          {/* <DateTimeInput source="refuned_at"/> */}
        </SimpleForm>
      </Create>
      <BackButton/>
    </>
  )
}

export const PaymentEdit = props => {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="amount" label="金额"/>
          <SelectInput label="类型" source="type" choices={[
              { id: '单次', name: '单次' },
              { id: '包月', name: '包月' },
            ]}
          />
          {/* <TextInput source="gateway"/> */}
          {/* <DateTimeInput source="created_at" label="建单于"/> */}
          {/* <DateTimeInput source="completed_at" label="成功于"/> */}
          {/* <DateTimeInput source="refuned_at"/> */}
        </SimpleForm>
      </Edit>

      <BackButton/>
    </>
  )
}