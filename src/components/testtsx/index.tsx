import * as m from "mithril";
import nav from "../nav";
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

class Component extends MithrilTsxComponent {
  view(vnode: m.CVnode) {
    return (
      <div>
        <div class="mt2 br3 pa3 ba b--black-10">Class Style</div>
      </div>
    );
  }
}

const Obj = {
  view(vnode: m.CVnode) {
    return (
      <div>
        <div class="mt2 br3 pa3 ba b--black-10">Object Style</div>
      </div>
    );
  },
};

const Funct = () => {
  return {
    view(vnode: m.CVnode) {
      return (
        <div>
          <div class="mt2 br3 pa3 ba b--black-10">Function Style</div>
        </div>
      );
    },
  };
};

export default {
  view(vnode) {
    return m(".page.testtsx", [m(nav), m(Component), m(Obj), m(Funct)]);
  },
} as m.Component<{}, {}>;
