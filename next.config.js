/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  images: {
    domains: [
      'www.datocms-assets.com',
      'a.storyblok.com',
      'images.ctfassets.net',
      'images.prismic.io',
      'cdn.aglty.io'
    ],
    imageSizes: [24, 64, 300]
  },
  env: {
    SPREADSHEET_ID: "1niw4dRXu13wwm16pKeXac9flssz9ngnHPNcOAZJo1f8",
    SHEET_ID: '0',
    CLIENT_EMAIL: 'devx-conf@devx-conf.iam.gserviceaccount.com',
    PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4HKnRwMyeHz46\nzPPEa8Goi5QuYjSH+wmrEXSitillO3WIbbqK5CrRgeCeUkWntagOs7Lg6j/coc5x\nOVo+WK6o3lld0jKmg3cuu5tbwbVfHSriL+FHbGIfMWU9U1RY2tP/+qSfsuo3Tuw+\n7LXJ1tAB75+01PZ8xz/G12KOkcttd6xkE7t+dMTUjnEiSRIHlHv+m/FfQd/j3sHS\ndFtSlF9Vci/ozoTGUyxUTiuUIiRuQfaAgQaRnknNiYmqStOE6UGDM0nsF9Xz7TI3\nfp+4QPfgH4K7bj8UtIj1a6f6drFylkigUlWh74z7brUBArKEpYKSSG8zPxFSToK3\np9uD9KplAgMBAAECggEAB9pHHvhpccwU2CayNfw/mgv8Ab90DKG3L5nyvtbkrJns\n4SkG9hIVxnJS7YXGTUko9hmRhVjQaP1ow/kFgZfAOVkkeCU1Pldon7BmR7NbJEem\n8tdGdUio5boyXnt9oz2QIcCjwWD87ud5mZR4i3eTTyXUir6zla5c6ML6g+ixg8Vu\npTlhCHTnNAxHnbNkRDsVv+v2uzly3PGlevefIiJVlK+OYyYHaPmzZRv/deVCvDlc\nXCm+nMufMQ/m4cszkr1bnQhOzAP+EedTnkaevro9N5Er1mKHjYz7KRyeGxwk9wKh\n1lVCe35hMcyzVKCag5L6Fqg9CCXCZGFE4meQM9H/sQKBgQDjtvEmQ3szIsQ88NaJ\naRhEaPLJR1aufaot9ntYeP/ocxoUr1M56BoCbIOCziUpkLeXHmWfQfeBd2QA8mda\nKHCAsVyJnTVKD83U4nVvuvEKPWmRTllKU4BwBg9szEzTiYsM1hO9CXMvipLBacU+\nDeGYIyCSlfO2iqomMFqEv465dQKBgQDO+zVJzZtKrPXZ/BlbV655wN5r6sBYuLLg\n9miBX2MUuiwMO1gG+ydW77NYQgqRdCQ51OXe0xNs2acPz0H6XNJKOoDuBlLvXFva\nkFZp6EuPadjp+tH31puusGqomi/QHN8ao8sUcJFdxJOWmmIBwvyjGdaWLIch5Lpi\n1PhW2LYfMQKBgQCzKgFaxcVtWnFkMWna+6FoUdqUm1iMObtoJoKt/aX70nQ2yiuF\naCTuu0pN5LxAk+ifMf9q6pA+gR1h0VeYDDFYUDQq4lJHT1/3m6Yinsd/8wnYlfiT\nDlgDzADe7W+VEKcjFly5Y3IJedI1826JgIp7FUhPjUQP39I38duGjuFQ8QKBgQCM\naKlrmYjhDZfx+iyRZFe9zHKWLrew+AqQxVd7e+PQ6cJ7wb4jbjjvpse49YQJzAnP\nGXeewv2Id9X2yZhuaI1XQXy4+51DNxowmH2mdqjbbuhxQW8ye2k9Bfw0x/Prb8qB\nXd+jzAEw5Oth3PTjUQzk7+A8G5TID0vJQ8P71iMl4QKBgGh7SziOZaHLeTDt4LsI\nxp1+KGmxLrWkRo4kjPuR63+TOUsRQo570zkJpjPb53uvA2O9pxTUY6SwU7vis+Nh\nWOb4VmIQFCXGl50ZptYcHcAQnTFvmU+8cVzdZjKF0THVGazeD/aOiJNrcOQeFbsB\nPlNT5KBXUbxd95Mr3r8kZ24l\n-----END PRIVATE KEY-----\n"
  },
  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      tls: 'empty'
    };

    return config;
  }
};
