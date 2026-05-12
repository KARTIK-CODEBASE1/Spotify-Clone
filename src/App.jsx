import LeftSidebar from './components/leftSidebar'
import Navbar from './components/navbar'
import CenterBar from './components/center'


function App() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-black text-white">
      <Navbar />
      <section className="grid min-h-0 flex-1 overflow-hidden gap-2 px-2 pb-2 pt-0 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <div className='hidden md:block'>
        <LeftSidebar />
        </div>
        <CenterBar />
      </section>
    </div>
  )
}

export default App
