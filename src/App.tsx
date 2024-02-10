import Items from './components/Items'
import SideBar from './components/SideBar'

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-neutral-200 w-full pt-5 px-3 flex">
          <Items />
        </div>
        <SideBar />
      </div>
 
      
    </>
  )
}

export default App
