/**
 *
 * Asynchronously loads the component for ContactUsComponent
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
