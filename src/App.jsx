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
            <div className="flex md:flex-row flex-col md:gap-x-6 gap-0 w-full">

              {/* side nav */}
              <div className="side-nav pl-10 md:pb-10 pb-16 md:w-1/3 w-full">
                <SideNav />
              </div>

              {/* map */}
              <div className="w-full md:h-auto h-full">
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
