import React, { Suspense, ComponentType } from "react";

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <Suspense fallback={"..load"}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
