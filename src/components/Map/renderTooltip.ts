import { PickingInfo } from '@deck.gl/core/typed';
import { TooltipContent } from '@deck.gl/core/typed/lib/tooltip';

export const generateTooltip = (info: PickingInfo): TooltipContent => {
  const { object } = info;
  if (info && object) {
    const { properties, geometry } = object;
    const {
      name,
      area,
      units,
      calidad,
      yemasPlanta,
      cargadoresPlanta,
      yemasCargador,
      pitonesPlanta,
      yemasPiton,
      planta,
    } = properties;

    switch (geometry.type) {
      case 'Polygon':
        return {
          style: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
            fontSize: '12px',
            padding: '5px',
          },
          text: `${properties.name} - ${area} ${units}`,
        };
      case 'Point':
        return {
          style: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
            fontSize: '12px',
            padding: '5px',
          },
          text: `${name}`,
        };
      case 'Plant':
        return {
          style: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
            fontSize: '12px',
            padding: '5px',
          },
          text: `Planta: ${planta}, \n Calidad: ${calidad} \n Yemas: ${yemasPlanta} \n Cargadores: ${cargadoresPlanta} \n Yemas Cargador: ${yemasCargador} \n Pitones: ${pitonesPlanta} \n Yemas Piton: ${yemasPiton}`,
        };

      case 'LineString':
        return {
          style: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
            fontSize: '12px',
            padding: '5px',
          },
          text: `Columna: ${properties.columna}`,
        };
      default:
        return null;
    }
  }
  return null;
};
