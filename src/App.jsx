import LeftSidebar from './components/leftSidebar'
import Navbar from './components/navbar'
import CenterBar from './components/center'


function App() {
  return (
    <div className="flex h-dvh min-w-0 flex-col overflow-hidden bg-black text-white">
      <Navbar />
      <section className="grid min-h-0 min-w-0 flex-1 overflow-hidden gap-2 px-1 pb-1 pt-0 sm:px-2 sm:pb-2 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <div className='hidden md:block'>
        <LeftSidebar />
        </div>
        <CenterBar />
      </section>
    </div>
  )
}

export default App
