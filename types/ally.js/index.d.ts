/* eslint-disable @typescript-eslint/no-unused-vars */
namespace ally {
  type Handler<T = any> = T & {
    disengage: () => void;
  };
}

declare module 'ally.js/is/focusable' {
  export default function (el: HTMLElement): boolean;
}

declare module 'ally.js/is/tabbable' {
  export default function (el: HTMLElement): boolean;
}

declare module 'ally.js/get/active-element' {
  export default function (o?: { context: HTMLElement | string }): HTMLElement;
}

declare module 'ally.js/maintain/disabled' {
  export default function (o?: {
    context: HTMLElement | string;
  }): ally.Handler<{}>;
}

declare module 'ally.js/maintain/tab-focus' {
  export default function (o?: {
    context: HTMLElement | string;
  }): ally.Handler<{}>;
}

declare module 'ally.js/query/focusable' {
  export default function (o?: {
    context?: HTMLElement | string;
    includeContext?: boolean;
    includeOnlyTabbable?: boolean;
    strategy?: 'quick' | 'strict' | 'all';
  }): HTMLElement[];
}

declare module 'ally.js/query/tabbable' {
  export default function (o?: {
    context?: HTMLElement | string;
    includeContext?: boolean;
    includeOnlyTabbable?: boolean;
    strategy?: 'quick' | 'strict' | 'all';
  }): HTMLElement[];
}

declare module 'ally.js/style/focus-source' {
  export type FocuseTypes = 'key' | 'pointer' | 'script';

  export type FocusSourceHandler = ally.Handler<{
    current: () => FocuseTypes;
    lock: (type: FocuseTypes) => void;
    used: (x: FocuseTypes) => boolean;
    unlock: () => void;
  }>;

  export default function (): FocusSourceHandler;
}

declare module 'ally.js/when/key' {
  export default function (o: {
    // context?: HTMLElement | string;
    // filter?: HTMLElement | string;
    [k?: string | number]: (e: Event, disangage: () => void) => void;
  }): ally.Handler<{}>;
}
