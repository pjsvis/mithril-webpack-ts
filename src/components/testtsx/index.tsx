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

const Description = {
  view(vnode: m.CVnode) {
    return (
      <div>
        This page demonstrates different ways to create and compose Mithril components.
        <h3>TODO</h3>
        <div class="pl4">
          <ul>
            <li>Pass props to components</li>
            <li>
              Figure out best way to define components: class/object/function
            </li>
            <li>
              Looks like objects are the cleanest then wrap everything up in a
              view export
            </li>
            <li>Do we need to use default exports?</li>
            <li>
              Why not use named exports like we did as best practice in React?
            </li>
			<li>Set up a CodeSandbox template for a Mithril starter project with tsx (try and import this project!!!)</li>
          </ul>
        </div>
      </div>
    );
  },
};

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

const page = {
  view(vnode: m.CVnode) {
    return (
      <div class="w-50 mt2 br3 pa3 ba b--black-10 shadow-5">
        {[m(Description), m(Component), m(Obj), m(Funct)]}
      </div>
    );
  },
};

export default {
  view(vnode: m.CVnode) {
    return m(".page.testtsx", [m(nav), m(page)]);
  },
} as m.Component<{}, {}>;
