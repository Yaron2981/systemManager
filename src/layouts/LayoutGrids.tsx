import * as React from "react";
import ReactGridLayout, { Layout } from "react-grid-layout";
import WindowChart from "./windows/WindowChart";
import { LayoutExtend } from "./LayoutExtendedInterface";
import LayoutWindow from "./windows/LayoutWindow";
import { Box } from "@mui/material";
import { MUIWrapperContext ,direction$} from "../MUIWrapper";

export default class LayoutGrids extends React.Component<any> { 
  state = {
    direction: 'ltr', 
  }
  componentDidMount(){
    direction$.subscribe((dir:string)=>{
      console.log('xxx',dir)
      this.setState({direction: dir});
    });
  }
  constructor(props:any){
    super(props);
  
  }
  layouts: LayoutExtend[] = [
        {
          title: "layout.title1",
          i: "a",
          x: 0,
          y: 0,
          w:10,
          h:10,
          component: WindowChart,
        },
        { title: "layout.title2", i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { title: "layout.title3", i: "c", x: 4, y: 0, w:10, h: 2 }
      ];




  children = this.layouts.map((val, idx) => {
    return (<Box border={'1px solid'} borderColor={'text.primary'} key={idx} data-grid={{ x: val.x, y: val.y, w: val.w, h: val.h }}>
      
      <LayoutWindow 
      title={val.title} 
      component={val.component}></LayoutWindow></Box>)
  });
    
render() {
  return (<div>{this.state.direction}<ReactGridLayout  

    draggableHandle=".drag-handle"
    width={window.innerWidth} 
    rowHeight={window.innerHeight/24}
    compactType={undefined}
    cols={24} >{this.children}</ReactGridLayout></div>);
  }
}
