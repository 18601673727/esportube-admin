import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
import { DateInput, withDataProvider } from 'react-admin';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 22,
    marginLeft: 6,
  },
  activeButton: {
    marginTop: 22,
    marginLeft: 6,
    background: '#666',
    color: '#fff',
  }
};

const DateBetweenInput = (props) => {
  // const modes = [
  //   { key: 'custom', value: '自定义' },
  //   { key: 'today', value: '今数据' },
  //   { key: 'yesterday', value: '昨数据' },
  //   { key: 'sevendays', value: '周数据' },
  //   { key: 'thirtydays', value: '月数据' },
  // ]
  // const [dateRange, setDateRange] = React.useState('custom');
  // const handleDateRange = (event, newDateRange) => {
  //   setDateRange(newDateRange);
  // };
  console.log(props)

  return (
    <span style={styles.row}>
      <DateInput
        source={`created_at._gt`}
        label={`开始日期`}
      />
      &nbsp;
      <DateInput
        source={`created_at._lt`}
        label={`结束日期`}
      />
      {/* {
        modes.map((mode, k) => (
          <Button
            key={k}
            style={dateRange === mode.key ? styles.activeButton : styles.button }
            type="button"
            onClick={(event) => handleDateRange(event, mode.key)}
          >{mode.value}</Button>
        ))
      } */}
    </span>
  );
}

// DateBetweenInput.defaultProps = {
//   addLabel: true,
//   label: 'createdAt',
// };

DateBetweenInput.propTypes = {
  dataProvider: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  record: PropTypes.object,
  // label: PropTypes.string,
  // addField: PropTypes.bool,
};

// export default addField(DateBetweenInput);
export default withDataProvider(DateBetweenInput);