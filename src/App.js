import './App.css';

import CompAxiosCall from './materi-testing/CompAxiosCall';
import CompRole from './materi-testing/CompRole';
import CompUserEvent from './materi-testing/CompUserEvent';
import CompVariant from './materi-testing/CompVariant';
import SampleComponentRTL from './materi-testing/SampleComponentRTL';
import ShowHide from './materi-testing/ShowHide';

function App () {
  return (
    <>
      <SampleComponentRTL />
      <ShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </>
  );
}

export default App;
