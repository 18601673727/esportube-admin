import React from 'react';
import PropTypes from 'prop-types';

const MyUrlField = ({ source, record = {} }) => <a href={record[source]} target="__blank">链接地址</a>;

MyUrlField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default MyUrlField;