export const token = import.meta.env.VITE_ENV_MAPBOX_TOKEN as string;

// icon mapping for the icons to display in the map
export const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};
