/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'You-Dont-Know-JS',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/owner.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        A book series on JavaScript. @YDKJS on twitter.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'nodejs/node',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/amazon-photos.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
      Node.js JavaScript runtime ✨🐢🚀✨
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'axios',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/baidu.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
       Promise based HTTP client for the browser and node.js
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'nest',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/Google-Business.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
          A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications with TypeScript/JavaScript 🚀
      </Translate>
    ),
  },
  {
    title: translate({
      message: '33-js-concepts',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/google-earth.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
           📜 33 JavaScript concepts every developer should know.Concepts Every JavaScript Developer Should Know
      </Translate>
    ),
  },
];

export default FEATURES;
