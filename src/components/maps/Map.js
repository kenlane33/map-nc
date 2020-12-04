import React from "react";
import MapSvg from "./MapSvg";
import { getPropsByRegion } from "../../helpers/regionsParts";

//import {partsByRegion, propsByRegion, regionAbbreviations} from '../data/usa_counties_by_state'
// import {getPropsByRegion} from '../../helpers/regionsParts'

//----------------------/////////---------------------
export default function Map(props) {
  const {
    regionName,
    doPick,
    region: { propsByRegion, partsByRegion }
  } = props;

  // Select properties & parts from region dataset
  const regionProps = getPropsByRegion(
    regionName,
    propsByRegion,
    partsByRegion
  );
  const parts = partsByRegion(regionName);

  //----///////////-----------------
  const doPickHere = (p, r) => {
    doPick && doPick(p, r);
  };

  return (
    <MapSvg
      key={props.regionName}
      {...props}
      parts={parts}
      regionProps={regionProps}
      doClickEnabledPart={doPickHere}
      doClickDisabledPart={doPickHere}
      highlights={{}}
      enabledParts={[]}
      blockClicks={true}
    />
  );
}
