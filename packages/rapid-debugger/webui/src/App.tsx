import React from 'react';

import './style/grid-layout/react-grid-layout.css';
import './style/grid-layout/react-resizable.css';
import AppLayout from './components/global/AppLayout';
import RenderComponentGridLayout from './components/global/grid-layout/RenderComponentGridLayout';
import RightNavbar from './components/global/right-navbar/RightNavbar';

function App() {
  return (
    <AppLayout>
      <div className="flex row">
        <div
          className="flex-1 overflow-y-auto h-screen"
          style={{ direction: 'rtl' }}
        >
          <div style={{ direction: 'ltr' }}>
            <RenderComponentGridLayout />
          </div>
        </div>
        <RightNavbar />
      </div>
    </AppLayout>
  );
}

export default App;
