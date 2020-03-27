import React from 'react'

import BackgroundImage from '../assets/images/home-background.png'
import Logo from '../components/Logo'
import Select from '../components/Select'
import Input from '../components/Input'

const Home = () => {
  return (
    <div className="h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div className="h-screen flex flex-col">
        <Logo />
        <div className="flex flex-col h-full justify-between md:pt-40 md:pb-20 py-10 px-5">
          <div>
            <h1 className="text-4xl animated fadeInLeft">Work <span className="text-orange-400">Around the World</span></h1>
            <h2 className="text-lg animated fadeInLeft delay-1s">If you want to relocate, this is the first step</h2>
          </div>
          <div className="w-full sm:w-2/3 py-10 md:py-0 animated fadeIn delay-2s">
            <div className="animated pulse delay-3s">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                I am in
              </label>
              <Input />
            </div>
            <div className="animated pulse delay-4s mt-10">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                I am interested in
              </label>
              <Select />
            </div>
          </div>

          <p className="animated fadeInLeft delay-2s">
            Make sure to perfect match <br />
            your budget and <br />
            your weather preferences
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <img className="w-full h-screen animated fadeIn slow delay-2s" src={BackgroundImage} alt="Work around the world" />
      </div>
    </div>
  );
}

export default Home;
