import CMS from 'decap-cms-app'
// Initialize the CMS object
CMS.init()
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)
import styles from '../../src/styles/global.css';
import { he } from 'decap-cms-app';
import styles2 from './cms.css';

CMS.registerPreviewStyle(styles2.toString(), { raw: true })
CMS.registerLocale('he', he)
