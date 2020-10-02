import React from 'react';

import SvgIcon from './svgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const FIRE_SVG_PATH =
  'M8.08,15.92A6.58,6.58,0,0,1,1.51,9.34a4.88,4.88,0,0,1,2.2-4.25.74.74,0,0,1,1,.34,6,6,0,0,1,4-5.3A.74.74,0,0,1,9.4.22a.73.73,0,0,1,.33.61v.31A15.07,15.07,0,0,0,10,4.93a3.72,3.72,0,0,1,2.3-1.7.74.74,0,0,1,.66.12.75.75,0,0,1,.3.6A6.21,6.21,0,0,0,14,6.79a5.78,5.78,0,0,1,.68,2.55A6.58,6.58,0,0,1,8.08,15.92ZM3.59,7.23A4.25,4.25,0,0,0,3,9.34a5.07,5.07,0,1,0,10.14,0,4.6,4.6,0,0,0-.54-1.94,8,8,0,0,1-.76-2.32A2,2,0,0,0,11.07,7a.75.75,0,0,1-1.32.58C8.4,6,8.25,4.22,8.23,2c-2,1.29-2.15,3.58-2.09,5.85A7.52,7.52,0,0,1,6.14,9a.74.74,0,0,1-.46.63.77.77,0,0,1-.76-.11A4.56,4.56,0,0,1,3.59,7.23Z';

const IconFire = React.forwardRef(function IconFire(
  props: Props,
  ref: React.Ref<SVGSVGElement>
) {
  return (
    <SvgIcon {...props} ref={ref}>
      <path d={FIRE_SVG_PATH} />
    </SvgIcon>
  );
});

IconFire.displayName = 'IconFire';

export {IconFire, FIRE_SVG_PATH};
