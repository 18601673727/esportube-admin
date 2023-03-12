import React from 'react';
import {
  // Show,
  // Filter,
  // SimpleShowLayout,
  // RichTextField,
  // ReferenceManyField,
  // DateField,
  // DisabledInput,
  // LongTextInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  FileInput,
  NumberInput,
  FileField,
  NumberField,
  ImageField,
  Create,
  Edit,
  DeleteButton,
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';
import BackButton from '../BackButton';
import MyUrlField from '../MyUrlField';

export const VideoList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="title" label="标题"/>
        <NumberField source="price" label="单价"/>
        <NumberField source="viewer_count" label="点击量"/>
        <ReferenceField label="分类" source="category_id" reference="categories">
          <TextField source="chinese_name"/>
        </ReferenceField>
        <MyUrlField source="source_url" label="地址"/>
        <EditButton/>
        <DeleteButton/>
      </Datagrid>
    </List>
  )
}

export const VideoCreate = props => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="title" label="标题"/>
          <TextInput source="price" label="单价"/>
          <TextInput source="source_url" type="url" label="视频文件(绝对地址)"/>
          <NumberInput source="viewer_count" format={v => v? v : 0} label="点击量" />
          <ReferenceInput source="category_id" reference="categories" label="分类">
            <SelectInput optionText="chinese_name" />
          </ReferenceInput>
          <FileInput source="thumbnail" accept="image/*" label="封面图片 (390 x 168)">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleForm>
      </Create>
      <BackButton/>
    </>
  )
}

export const VideoEdit = props => {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="title" label="标题"/>
          <TextInput source="price" label="单价"/>
          <TextInput source="source_url" type="url" label="视频文件(绝对地址)"/>
          <NumberInput source="viewer_count" label="点击量" />
          <ReferenceInput source="category_id" reference="categories" label="分类">
            <SelectInput optionText="chinese_name" />
          </ReferenceInput>
          <ImageField source="thumbnail.src" title="thumbnail.title" label="图片预览"/>
          <FileInput source="thumbnail" accept="image/*" label="封面图片 (390 x 168)">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleForm>
      </Edit>

      <BackButton/>
    </>
  )
}