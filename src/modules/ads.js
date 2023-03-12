import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
  SelectInput,
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  UrlField,
  FileField,
  ImageField,
  SimpleForm,
  TextInput,
  FileInput,
  DeleteButton,
  EditButton,
} from 'react-admin';
import BackButton from '../BackButton';

const styles = {
  url: {},
};

const PageField = withStyles(styles)(({ classes, source, record = {}}) => {
  const mappings = {
    index: '首页',
    watch: '播放页',
    purchase: '购买页',
  }
  return (
    <span className={classes.url}>{mappings[record[source]]}</span>
  )
});

export const AdList = props => {
  return (
    <>
      <List {...props}>
        <Datagrid>
          <TextField source="id"/>
          <TextField source="sort" label="排序"/>
          <UrlField source="link" label="链接"/>
          <PageField source="page" label="页面"/>
          <TextField source="position" label="位置"/>
          {/* <TextField source="click_count" label="点击量"/> */}
          <EditButton/>
          <DeleteButton/>
        </Datagrid>
      </List>
    </>
  )
}

export const AdCreate = props => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="sort" label="排序" />
          <TextInput source="link" label="链接" />
          <FileInput source="thumbnail" label="广告图片 (390 x 76)" accept="image/*" >
            <FileField source="src" title="title" />
          </FileInput>
          <SelectInput label="页面" source="page" choices={[
              { id: 'index', name: '首页' },
              { id: 'purchase', name: '支付页' },
              { id: 'watch', name: '播放页' },
            ]}
          />
          <SelectInput label="页面" source="position" choices={[
              { id: '顶部', name: '顶部' },
              { id: '中部', name: '中部' },
              { id: '底部', name: '底部' },
            ]}
          />
          {/* <TextInput source="click_count" label="点击量" /> */}
        </SimpleForm>
      </Create>
      <BackButton/>
    </>
  )
}

export const AdEdit = props => {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="sort" label="排序" />
          <TextInput source="link" label="链接" />
          <ImageField source="thumbnail.src" label="图片预览" title="thumbnail.title" />
          <FileInput source="thumbnail" label="广告图片 (390 x 76)" accept="image/*" >
            <FileField source="src" title="title" />
          </FileInput>
          <SelectInput label="页面" source="page" choices={[
              { id: 'index', name: '首页' },
              { id: 'purchase', name: '支付页' },
              { id: 'watch', name: '播放页' },
            ]}
          />
          <SelectInput label="页面" source="position" choices={[
              { id: '顶部', name: '顶部' },
              { id: '中部', name: '中部' },
              { id: '底部', name: '底部' },
            ]}
          />
          {/* <TextInput source="click_count" label="点击量" /> */}
        </SimpleForm>
      </Edit>

      <BackButton/>
    </>
  )
}