# GyroscopePlugin

<Badges module="gyroscope-plugin"/>

::: module
<ApiButton page="modules/GyroscopePlugin.html"/>
Adds gyroscope controls on mobile devices.

This plugin is available in the [@photo-sphere-viewer/gyroscope-plugin](https://www.npmjs.com/package/@photo-sphere-viewer/gyroscope-plugin) package.
:::

## Usage

Once enabled the plugin will add a new "Gyroscope" button only shown when the gyroscope API is available.

```js
const viewer = new PhotoSphereViewer.Viewer({
    plugins: [PhotoSphereViewer.GyroscopePlugin],
});
```

::: tip
The gyroscope API only works on HTTPS domains.
:::

::: warning
There are known inconsistencies of orientation data accross devices. If the panorama is not displayed in the expected orientation, this plugin is not faulty.
:::

## Example

<ExternalLink href="/demos/plugin-gyroscope.html">Open in a new tab</ExternalLink>

## Configuration

#### `touchmove`

-   type: `boolean`
-   default: `true`
-   updatable: yes

Allows to pan horizontally the camera when the gyroscope is enabled (requires global `mousemove=true`).

#### `absolutePosition`

-   type: `boolean`
-   default: `false`
-   updatable: yes

By default the camera will keep its current horizontal position when the gyroscope is enabled. Turn this option `true` to enable absolute positionning and only use the device orientation.

#### `moveMode`

-   type: `smooth` | `fast`
-   default: `smooth`
-   updatable: yes

How the gyroscope data is used to rotate the panorama.

#### `lang`

-   type: `object`
-   default:

```js
lang: {
    gyroscope: 'Gyroscope',
}
```

_Note: this option is not part of the plugin but is merged with the main [`lang`](../guide/config.md#lang) object._

## Buttons

This plugin adds buttons to the default navbar:

-   `gyroscope` allows to toggle the gyroscope control

If you use a [custom navbar](../guide/navbar.md) you will need to manually add the buttons to the list.
