import * as React from "react";

export interface HeatmapOverlayViewport {
    width?: number;
    height?: number;
    longitude?: number;
    latitude?: number;
    zoom?: number;
}

export interface HeatmapOverlayProps extends HeatmapOverlayViewport {
    locations: LatLngPair[];
    lngLatAccessor?: (location: any) => [number, number];
    intensityAccessor?: (location: any) => number;
    sizeAccessor?: (location: any) => number;
    gradientColors?: number[];
}

export interface HeatmapOverlayState extends HeatmapOverlayProps {

}

export interface LatLngPair {
    latitude: number;
    longitude: number;
}


export declare class HeatmapOverlay extends React.Component<HeatmapOverlayProps, HeatmapOverlayState> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillReceiveProps(newProps: HeatmapOverlayProps): void;
    componentWillUnmount(): void;
    render(): React.DOMElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}