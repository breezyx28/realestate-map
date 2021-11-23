import SideNav from './components/sideNav'
import MapWraper from './components/mapContainer';
import UpperNav from './components/upperNav';

function App() {
  return (
    <div>
      <div className="w-full">


        {/* grid system */}
        <div className="flex h-full flex-col w-full gap-y-6">

          {/* upper nav */}
          <div className="nav w-full" style={{height:"60px"}}>
            <div className="flex items-center border-b border-gray-100 w-full h-full">
              <UpperNav />
            </div>
          </div>

            {/* main content */}
          <div className="main w-full">
            <div className="flex gap-x-6 w-full">

              {/* side nav */}
              <div className="side-nav pl-10 pb-10 w-1/3">
                <SideNav />
              </div>

              {/* map */}
              <div className="h-screen w-full">
                <MapWraper />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
