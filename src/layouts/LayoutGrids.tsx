import * as React from "react";
import ReactGridLayout, { Layout } from "react-grid-layout";
import WindowChart from "./windows/WindowChart";
import { LayoutExtend } from "./LayoutExtendedInterface";
import LayoutWindow from "./windows/LayoutWindow";
import { Box } from "@mui/material";
import { MUIWrapperContext, direction$ } from "../MUIWrapper";

export default function LayoutGrids(props: any) {
  const [direction, setDirection] = React.useState("ltr");
  const [selectedLayoutIndex, setSelectedLayoutIndex] = React.useState<number>(0);
  let zIndexChange = false;
  const [currentLayouts, setCurrentLayouts] = React.useState<LayoutExtend[]>([
    {
      title: "layout.title1",
      zIndex:1,
      i: "a",
      x: 0,
      y: 0,
      w: 10,
      h: 10,
      component: WindowChart,
    },
    {
      title: "layout.title2",
      zIndex:2,
      i: "b",
      x: 11,
      y: 0,
      w: 7,
      h: 2,
      minW: 2,
      maxW: 4,
    },
    { title: "layout.title3",zIndex:3,i: "c", x: 4, y: 5, w: 10, h: 2 },
  ]);
  let calculateSumValue = calculateSum(currentLayouts.length);

  React.useEffect(() => {
    direction$.subscribe((dir: string) => {
      setDirection(dir);
    });
  }, [currentLayouts,selectedLayoutIndex]);
  const onLayoutChange = ():void=>{
    console.log('xxxselectedLayoutIndex',selectedLayoutIndex)
    setZindex(selectedLayoutIndex,1);
  }

  function calculateSum(n:number)
  {
      let fibo = [];
      if (n <= 0)
      return 0;
   
      fibo[0] = 0;
      fibo[1] = 1;
   
      // Initialize result
      let sum = fibo[0] + fibo[1];
   
      // Add remaining terms
      for(let i = 2; i <= n; i++)
      {
          fibo[i] = fibo[i - 1] +
                      fibo[i - 2];
          sum += fibo[i];
      }
   
      return sum;
  }
  function xxx(x:number){
console.log('xxxsssss',x)
  }
  const setZindex = (item_index:number, update_value:number) => {
    let _currentLayouts = currentLayouts;
    console.log('xxxcalculateSumValue',selectedLayoutIndex)
    _currentLayouts[item_index].zIndex = Math.max(..._currentLayouts.map(cl=>cl.zIndex)) + 1;
    setCurrentLayouts([..._currentLayouts]);
}
  const children = currentLayouts.map((val, idx) => {
    return (
      <Box
        onMouseOver={() => {setSelectedLayoutIndex(idx)}}
        zIndex={val.zIndex}
        border={"1px solid"}
        borderColor={"text.primary"}
        key={idx}
        data-grid={{
          resizeHandles: ["sw", "se"],
          x: val.x,
          y: val.y,
          w: val.w,
          h: val.h,
        }}
      >
        {val.zIndex}
        <LayoutWindow
          title={val.title}
          component={val.component}
        ></LayoutWindow>
      </Box>
    );
  });
  
  return (
    <ReactGridLayout
      // transformDirection="rtl"
      // This turns off rearrangement so items will not be pushed arround.
      onLayoutChange={()=>onLayoutChange()}
      onDragStart={()=>onLayoutChange()}
      compactType={null}
      preventCollision={true}
      allowOverlap={true}
      draggableHandle=".drag-handle"
      width={window.outerWidth}
      rowHeight={(window.outerHeight - 64) / 24}
      maxRows={17}
      cols={24}
      useCSSTransforms={true}
    >
      {children}
    </ReactGridLayout>
  );
}
