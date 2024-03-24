import React, { Component, ReactChildren } from 'react'
import { LayoutExtend } from '../LayoutExtendedInterface';
import { Title } from '@mui/icons-material';
import { Props } from 'react-intl/src/components/relative';
import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
type layoutProp = Props & {
  title?:string,
  component?:any
};
export default class LayoutWindow extends Component<Props> {
  children;
  props:layoutProp;
    constructor(props: layoutProp,children:React.ReactNode) {
        super(props);
        this.props = props;
        this.children = children;
      }
  render() {
    return (
      <Box display={'flex'} flexDirection={'column'}  className="drag-handle">
        <Box paddingInline={'0.5rem'} borderBottom={'1px solid'} borderColor={'text.primary'}>
        <FormattedMessage id={this.props.title} defaultMessage={this.props.title} /></Box>
        <div>{this.props.component ? React.createElement(this.props.component) : <div></div>}</div>
      </Box>
    )
  }
}
