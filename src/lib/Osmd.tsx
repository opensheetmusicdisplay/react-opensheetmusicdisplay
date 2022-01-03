import React, { useEffect, useRef, useState } from "react";
import { getRandomId, iife } from "@milkscout/react";
import { OpenSheetMusicDisplay as OSMD } from "opensheetmusicdisplay";
import { IOSMDOptions } from "opensheetmusicdisplay/build/dist/src/OpenSheetMusicDisplay/OSMDOptions";

export interface CmpProps {
  id: string;
}

const DEFAULT_OSMD_OPTIONS: IOSMDOptions = {
  autoResize: true,
};

export interface OsmdProps {
  options?: IOSMDOptions;
  file: string | Document;
}

export const Osmd = ({ options = DEFAULT_OSMD_OPTIONS, file }: OsmdProps) => {
  const [id] = useState(getRandomId());
  const renderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    iife(async () => {
      const { current: handleRenderRef } = renderRef;
      if (!handleRenderRef) {
        // reference missing
        return;
      }
      //reset rendering
      handleRenderRef.innerHTML = "";
      const osm = new OSMD(id, options);
      await osm.load(file);
      osm.render();
    });
  });
  return <div ref={renderRef} id={id} />;
};

export default Osmd;
