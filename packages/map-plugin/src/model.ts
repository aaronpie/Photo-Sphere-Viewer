import { Point } from '@photo-sphere-viewer/core';

export type MapHotspot = (Point | { yaw: number | string; distance: number }) & {
    /**
     * Unique identifier for the {@link SelectHotspot} event
     */
    id?: string;
    /**
     * Tooltip visible on the map
     */
    tooltip?: string;
    /**
     * SVG or image URL used to override the default `spotImage`
     */
    image?: string;
};

export type MapPluginConfig = {
    /**
     * URL of the map
     */
    imageUrl?: string;

    /**
     * The position of the panorama on the map
     */
    center?: Point;

    /**
     * Rotation to apply to the image
     * @default 0
     */
    rotation?: string | number;

    /**
     * Size of the map
     * @default '200px'
     */
    size?: string;

    /**
     * Position of the map
     * @default 'bottom left'
     */
    position?: string | [string, string];

    /**
     * SVG or image URL drawn on top of the map (must be square)
     */
    compassImage?: string;

    /**
     * SVG or image URL used for the central pin (must be square)
     */
    pinImage?: string;

    /**
     * Size of the central pin
     * @default 40
     */
    pinSize?: number;

    /**
     * SVG or image URL used for hotspots (must be square)
     */
    spotImage?: string;

    /**
     * Size of the hotspots
     * @default 20
     */
    spotSize?: number;

    /**
     * Make the map static and rotate the pin instead
     * @default false
     */
    static?: boolean;

    /**
     * Maximum zoom level
     * @default 200
     */
    maxZoom?: number;

    /**
     * Default zoom level
     * @default 100
     */
    defaultZoom?: number;

    /**
     * Minimum zoom level
     * @default 20
     */
    minZoom?: number;

    /**
     * Points of interest on the map
     */
    hotspots?: MapHotspot[];
};

export type ParsedMapPluginConfig = Omit<MapPluginConfig, 'position' | 'rotation'> & {
    position: [string, string];
    rotation: number;
};
