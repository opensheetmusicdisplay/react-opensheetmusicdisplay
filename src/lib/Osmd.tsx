import React, { useEffect, useState } from "react";
import { getRandomId, iife } from "@milkscout/react";
import { OpenSheetMusicDisplay as OSMD } from "opensheetmusicdisplay";
import { IOSMDOptions } from "opensheetmusicdisplay/build/dist/src/OpenSheetMusicDisplay/OSMDOptions";

export interface CmpProps {
  id: string;
}

const Cmp = React.memo(({ id }: CmpProps) => {
  return <div id={id} />;
});

const DEFAULT_OSMD_OPTIONS: IOSMDOptions = {
  autoResize: true,
};

export interface OsmdProps {
  options?: IOSMDOptions;
  file: string | Document;
}

export const Osmd = ({ options = DEFAULT_OSMD_OPTIONS, file }: OsmdProps) => {
  const [id] = useState(getRandomId());

  useEffect(() => {
    iife(async () => {
      const osm = new OSMD(id, options);
      await osm.load(file);
      osm.render();
    });
  });
  return <Cmp id={id} />;
};

export default Osmd;
