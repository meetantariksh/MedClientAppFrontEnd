/**
 *
 * Asynchronously loads the component for MedicalNewsComponent
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
