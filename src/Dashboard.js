import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

export default () => (
  <>
    <Card>
      <CardHeader title="视频数据" />
      <CardContent>
        <Grid container>
          <Grid item xs style={{ textAlign: 'center' }}>
            <Typography variant="h4" component="span">
              123
            </Typography>
            <Typography variant="caption" component="h3">
              视频内容
            </Typography>
          </Grid>
          <Grid item xs style={{ textAlign: 'center' }}>
            <Typography variant="h4" component="span">
              3
            </Typography>
            <Typography variant="caption" component="h3">
              视频分类
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

    <Card style={{ marginTop: 30 }}>
      <CardHeader title="收入数据" />
      <CardContent>
        <Grid container>
          <Grid item xs style={{ textAlign: 'center' }}>
            <Typography variant="h4" component="span">
              35233
            </Typography>
            <Typography variant="caption" component="h3">
              总收入
            </Typography>
          </Grid>
          <Grid item xs style={{ textAlign: 'center' }}>
            <Typography variant="h4" component="span">
              9870
            </Typography>
            <Typography variant="caption" component="h3">
              广告数量
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </>
);