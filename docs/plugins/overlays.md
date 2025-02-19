# OverlaysPlugin <Badge text="NEW"/>

<Badges module="overlays-plugin"/>

::: module
<ApiButton page="modules/OverlaysPlugin.html"/>
Display additional images and videos on top of the panorama.
:::

[[toc]]

## Usage

Overlays are images and videos "glued" to the panorama. Contrary to [markers](./markers.md) they are part of the 3D scene and not drawn on top of the viewer.

Two kinds of overlays are supported :

-   full size equirectangular/cubemap : will cover the entire panorama
-   positionned rectangle : the image/video has a defined position and size (always in radians/degrees)

```js
const viewer = new PhotoSphereViewer.Viewer({
    plugins: [
        [PhotoSphereViewer.OverlaysPlugin, {
            overlays: [
                {
                    id: 'fullsize',
                    path: 'path/to/overlay.png',
                },
                {
                    id: 'positionned',
                    path: 'path/to/image.jpg',
                    yaw: '-20deg',
                    pitch: '10deg',
                    width: '40deg',
                    height: '20deg',
                    opacity: 0.5,
                },
                {
                    id: 'video',
                    type: 'video',
                    path: 'path/to/video.mp4',
                    yaw: '20deg',
                    pitch: '10deg',
                    width: '40deg',
                    height: '20deg',
                },
            ],
        }],
    ],
});
```

## Example

::: code-demo

```yaml
title: PSV Overlay Demo
version: 5.5.0-alpha.1
packages:
    - name: overlays-plugin
      imports: OverlaysPlugin
```

```js
const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const viewer = new Viewer({
    container: 'viewer',
    panorama: baseUrl + 'sphere.jpg',
    caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
    loadingImg: baseUrl + 'loader.gif',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,

    plugins: [
        [OverlaysPlugin, {
            overlays: [
                {
                    id: 'xray',
                    path: baseUrl + 'sphere-overlay.png',
                    opacity: .8,
                    zIndex: 1,
                },
                {
                    path: baseUrl + 'pictos/tent.png',
                    opacity: 1,
                    yaw: -0.5,
                    pitch: 0.1,
                    width: 0.4,
                    height: 0.3,
                    zIndex: 2,
                },
            ],
        }],
    ],
});
```

:::

::: tip Overlays vs. Markers
Overlays seem very similar to image/video markers but serve different purposes:
- Markers are for "small", generally interactive, elements
- Overlays can cover the whole panorama
- Overlays cannot have a tooltip, change size, etc. You can however listen to click events
- Overlays are rendered over the panorama itself where markers are rendered flat over the viewer HTML element
:::

## Configuration

#### `overlays`

-   type: `OverlayConfig[]`
-   updatable: no

The list of overlays, see bellow. Can be updated with various [methods](#methods).

#### `autoclear`

-   type: `boolean`
-   default: `true`
-   updatable: yes

Automatically remove all overlays when the panorama changes.

### Overlays

Overlays can be a single image/video for a spherical gerometry or six images for a cube geometry (no videos).

#### `id` (recommended)

-   type: `string`
-   default: random value

Used to remove the overlay with `removeOverlay()` method.

#### `type`

-   type: `image | video`
-   default: `image`

#### `opacity`

-   type: `number`
-   default: `1`

#### `zIndex`

-   type: `number`
-   default: `0`

#### Spherical overlays

#### `path` (required)

-   type: `string`

Path to the image or video.

#### `yaw`, `pitch`, `width`, `height`

-   type: `number | string`

Definition of the position and size of the overlay, if none of the four properties are configured, the overlay will cover the full sphere, respecting the [panorama data](../guide/adapters/equirectangular.md#cropped-panorama) if applicable.

#### Cube overlays

#### `path` (required)

-   type: `CubemapPanorama`

Check the [cubemap adapter page](../guide/adapters/cubemap.md#panorama-options) for the possible syntaxes. All six faces are required.

## Methods

#### `addOverlay(config)`

Adds a new overlay.

#### `removeOverlay(id)`

Removes an overlay.

#### `clearOverlays()`

Removes all overlays.

#### `getVideo(id)`

Returns the controller of a video overlay (native HTMLVideoElement) in order to change its state, volume, etc.

```js
overlaysPlugin.getVideo('my-video').muted = false;
```

## Events

#### `overlay-click(overlayId)`

Triggered when an overlay is clicked.

```js
overlaysPlugin.addEventListener('overlay-click', ({ overlayId }) => {
    console.log(`Clicked on overlay ${overlayId}`);
});
```
