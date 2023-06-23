import "./style.css";

import Mechanica from "./detailedcontents/mechanica";
import Massive from "./detailedcontents/massive";
import ClusterMockSeries from "./detailedcontents/clustermock";

//전체 컨텐츠창 컨테이너
function ContentContainer() {
  return (
    <div className="flex flex-col geist-wrapper gap-10">
      <Mechanica />
      <Massive />
      <ClusterMockSeries />
    </div>
  );
}

export { ContentContainer };
