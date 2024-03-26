import React, { Component, ReactChildren } from 'react'
import { LayoutExtend } from '../LayoutExtendedInterface';
import { Title } from '@mui/icons-material';
import { Props } from 'react-intl/src/components/relative';
import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
type layoutProp = Props & {
  title?:string,
  component?:any,
  zIndex?:number,
  dir?:string
};
export default function LayoutWindow(props:any) {
 const containerWrapperRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box 
        onClick={() => containerWrapperRef.current?.focus()}
        sx={{
          backgroundColor: (theme) => theme.palette.mode === "light"
              ? "#f5f5f5"
              : "blue",
        }}
        display={'flex'} flexDirection={'column'}  className="layout-grid">
      <Box className="drag-handle" paddingInline={'0.5rem'} borderBottom={'1px solid'} 
        borderColor={'text.primary'} color={'text.primary'}>
      <FormattedMessage id={props.title} defaultMessage={props.title} /></Box>
      <Box display={'flex'} flexGrow={1}>{props.component ? React.createElement(props.component) : <div></div>}</Box>
    </Box>
  )
}
