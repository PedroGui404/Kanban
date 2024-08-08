import './App.css'
import BoardKanban from './components/BoardKanban'
import ProfilePhoto from './components/ProfilePhoto'

function App() {
  return (
    <>
      <div className="bg-white">
        <header className="absolute bg-mainBackgroundColor  inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 ">
              <a href="#" className="text-sm  font-semibold leading-6 text-white">Home</a>
              <a href="https://www.linkedin.com/in/pedrogui/" className="text-sm font-semibold leading-6 text-white">LinkedIn</a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">Documentação</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-3">
              <a href="#" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
              <ProfilePhoto/>
            </div>
          </nav>
        </header>
      </div>
      <BoardKanban />
    </>
  )
}

export default App
