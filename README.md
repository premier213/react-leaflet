# React-leaflet for Next.js

this package fixed problems react-leaflet & leaflet for `next.js`

> Next.js 11 is Passed ✔

### install with npm

`$ npm install @meysam213/react-leaflet`

### install with yarn

`$ yarn add @meysam213/react-leaflet`

## Usage

first create component

```javascript
//mapbox.jsx
import { NextMap } from '@meysam213/react-leaflet';

const MapBox = () => {
  return (
    <>
      <NextMap lat={50} lng={50} />
    </>
  );
};
```

and for use with next.js `import dynamic`

```javascript
//pages/mapPage.jsx
import dynamic from 'next/dynamic';

const MapBox = dynamic(() => import('components/mapBox'), {
  ssr: false,
});
```

> notice: Due to being SSR, it is necessary to use import dynamics

## Props

| prop               | Default  | Type    | Necessary |
| ------------------ | -------- | ------- | --------- |
| lat                | -        | Number  | Necessary |
| lng                | -        | Number  | Necessary |
| scrollWheelZoom    | `true`   | Boolean | Optional  |
| zoomControl        | `false`  | Boolean | Optional  |
| attributionControl | `false`  | Boolean | Optional  |
| zoom               | `17`     | Number  | Optional  |
| Height             | `300px`  | String  | Optional  |
| Width              | `300px`  | String  | Optional  |
| popUp              | `Hello!` | String  | Optional  |

## Author

Github: [@premier213](https://guthub.com/premier213)

Twitter : [@premier213](https://twitter.com/premier213)
