import * as m from 'mithril'
import nav from '../nav'
// import './index.scss'

import { MithrilTsxComponent } from "../../JsxNamespace";

export interface Attrs {
	title: (t: string) => JSX.Element;
	// render: typeof MitrhilTsxComponent;
	render: {
	  new (a: m.CVnode): MithrilTsxComponent;
	};
	// title: string;
  }

  class Testing extends MithrilTsxComponent {
	view(vnode: m.CVnode) {
	  return m('h1.silver', 'More test stuff')
	}
  }


export default {
	view (vnode) {
		return m('.page.test', [
			m(nav),
			m('h1.red', 'Test'),
			m('p', 'This is a test page to see if we can use tachyons.'),
			m(Testing)
		])
	}
} as m.Component<{}, {}>

