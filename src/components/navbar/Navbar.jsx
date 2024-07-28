import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import MyContext from '../../context/data/MyContext'
import { RxCross2 } from 'react-icons/rx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const context = useContext(MyContext)
  const { toggleMode, mode } = context

  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.clear('user')
    window.location.href = "/login"
  }


  return (
    <div className="bg-white sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div>

                  {user?.user?.email === 'knupadhyay784@gmail.com' ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                  {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : ""}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>PAKSITAN</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over Rs300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Pakistan</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link>

                  {user?.user?.email === 'qasimfarooq631@gmail.com'?
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""
                }
                 

                  {user ? <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : <Link to={'/signup'} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Signup
                  </Link>}

                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEUBQRz///8ALQDc4N0ALwAAPxgALAAAMQAAMwAANQAAPhYAMgAAKgAAOxEAOQsANwXH0cthfWoAJQDn7On3+fiaq6Ctu7K1wrqltKqLnpEdTy+Cl4lBZU1thnW+ysI3XkTR2dSfr6Tw9PIRSSYvWT15kIEbSisnVTfV3diDl4pZdmJScVzh5+RIa1QADAAAHQBp1aRWAAAHo0lEQVR4nO2dWYOiOBCAwSYgyKGteJ+oo2Pr7v//dyt4QkXbHE6ld+p72n2wOn6GpFIJGcvWwEfN+l9BTiDkBEJOIOQEQk4g5ARCTiDkBEJOIOQEQk4g5ARCTiDkBEJOIOQEQk4g5ARCTiDkBEJOIOQEQk4g5ARCTiDkBEJOIOQEQk4g5ARCTiDkBEJOIOQEQk4g5ARCTiDGOomiNwR9DTOdMN9pTXQHfRkTnQTOMs26nt6gApjnJHBnPdteuzpjimGak8BdNY8hJ3i9xDQnzBtO84gtTCVmOYn9RRGw1dAUUA6DnDC3lRXx1qi9xCQnUaN3CtcPdYRTwBgn9dmpk9jNTw3RlDDFibs+B2v7TD2aGmY4YZ/dS7CZWE7/DoFGOGFe8xJrIDa+/toEin+bgwlOWLK9hhIbX5m1f0NPMcAJ869K7KHgz+5lH452KfhOWHhTshDNTGofb5in0J0wZ34N1BGec7zjUqBbed7iWKE5OehO3N4t0G9f9NP1fL5K7/4+853JIlFoj4XvxElvcdriOb1ffPy6GAga/qBtzxTnImQnfusuzlr8941Pqd6u6GCRM+wf/6evulzCdRJs7sJ0JL5LtDt9dhxbifNVZDmdWHUiwnXifNyFWdTFAwTjs8+hs96f/nMtPChVQXVyP5jY9lLi92XD84fb2aUx6qtqTCfR+D7K1JGJ4XcqjRFcL/HAdOLu76NMpNKKMCu3padhjY7oxP9diiKzcAk8b28rR6mC54TFpW4/Fw8S1TbdSlMGygOshenEK3+fkWBywhJn16y2ZC81JlVBc3KdMc6shJJPVvfXe9iS0c92Uukmmci3CRxrUZ1vToxV1385WE7YshyjKeAkOICH5spGw3EELCfn3a0rqcDgyMbr/pbfT+wsVi9GYjkJKzFaIr8vi+tuNB702pzG7NXr/khO4kklhnBiz4LE86xWOq+2Zu7+0DWgW/0qckcrWOT/k1Wb01Nd8eA4qU7Edib9PWqXau70KmehKAXHSTKohNjKlxvOPa77b3046Z8EKaYpOE5q1UenKV0bO++85+VtFvuOMxsdh1659eQFFCeMVWfSrvSJk1NF9lZJOg69odVSGmZRnEStaoi+9NotKVbXH6WnhaklbihO6v1qiIW0k7jwe9B5mhbFSakMq+gkmNkapt8SGE5YDEJ0JerT52D5wolp3TPGcBKsQIie9BibC9ZSSbqB4QQk9seES36fys8k9g+fguHEr2Zsx0WKfJbltFs6iiZ3YDjxeiDEXn6QTDQ/OThOalsYQ+EQifaXWjCcVPdkcmQ2Ad8FihNOjUz3mKAChpNPTgyR2uO7wXDS4MRQmIy1g+CEMU4M+aKSfjCcLHlB3nH4VxIMJ7x+Irw3+kYQnFg+L4jIptebwXBS3dsp6ATGZCgoTrh7eOZkKChOOHmsSQ8PhhPeesc2KL3HcOJNuWGMSWUxnPgpN4wxaRuGE06drUDibPlbwHDCqccWZHUzRhQMJ5y6/YmRGSMKhhPO/s4JQzoKihO4D3gmNaJigOIE7hdfMGJ1jOKEPfyzGt6qUAfFCTx/cmWAe81HAY6TZPQwmI4DrorgOOGX2gr+3jscwLnHG3/tXR+P0vucVDycXpCc8GttZybI4yyWk+p5+xIt6RM6ZSSTHSwnT0bZIzstUuo7ueEaywnvwMW9FA1JvjsYyZV40ZyUXkGHqN9tGA4yycEazYnlPO0o9uJTKU8Jal3p09R4Th4vek5MPYWMNrY+7K1sooPnhHesrcR+JjuoMOfQse2xrFNEJ1aN8+ZniTSUmk2joj7Tld4vwnRSvq+AG3noCY8qzD3ke2pZIj0eYTqp3GvBpR+I1SOZtzyN3V/yW62oTizvQWH2njR+faXM6ta5rNlXmMtxnQTVd+B4ZKnlvDRcRk5w6XhKL+njOinfp/SY6Tj0vxluA9893PZcf6nUdZGdvDKknP7GYOX40YOHiEUNbzW4e9v4S2lHEduJFT5PZ+/YL76isJGUxbAoabj+rlt6/VrxomJ0J/f3+L3gpbf+Gjqh6xTUwtDajXrV9/RTxbUSupPSfY8v0tnPm835fL7lHu5RvrtZ3YjWe0E1oH6dtY5WKN8f64s8Pt+Q/uy7yG5SHP7JJQkGGjYSdbRDx33UCx0Nse2WjoOCOhqi497y2pPNjZfJZloOsGhoiZ777f0V74YXIZq+nn1VY5xY0fOq9feMQk27quY4OSYqLW6+8RrbjaZNIaOc5P+uyqMDTN/RGbn6TvMY5cRi3ubxNWNP6Ec6Twea5eS45A8PwglcbyleoXyGaU6OY214EMngOv2N7lv/zXNS3LWdvjgxb9dxQ/uxQBOd5Cug2qH77SS0T4c1+er8Y8x0YuWbNOFsMH9wg+HxkWmOluGbjnkZ68TKS6yOPx71m+2SmWw/XUxmdecdPeSEyU5ygsR3nGC4Gu8mv0eTr/HmV1LzfA0XXT7BdCcFjAVRFCdJHAWB3muCuPwIJ38YcgIhJxByAiEnEHICIScQcgIhJxByAiEnEHICIScQcgIhJxByAiEnEHICIScQcgIhJxByAiEnEHICIScQcgIhJxByAiEnEHICIScQcgIhJxByAiEngP8A64WAKYDM2YIAAAAASUVORK5CYII="
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>PAKISTAN</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}