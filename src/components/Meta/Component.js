import React from 'react';

import { Helmet } from 'react-helmet';
import { title as appTitle } from 'config';

function Meta({ description, meta, title, image }) {
  const _title = `${appTitle} ${title ? '| ' + title : ''}`;

  return (
    <Helmet
      title={_title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: _title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: _title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

Meta.defaultProps = {
  meta: [],
  image: `${window.location.origin}/images/cover.png`,
};

export default Meta;
