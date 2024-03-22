import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [pass, setpass] = useState("");
  let [length, setLength] = useState(8);
  let [nums, setNums] = useState(false);
  let [char, setChar] = useState(false);

  const generate = useCallback(() => {

    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (nums) {
      str += "1234567890"
    }
    if (char) {
      str += "!@#$%^&*()-_=+[]{};:/?.>"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
    }

    setpass(pass);

  }, [setpass, length, nums, char]
  )
  useEffect(() => {
    generate();
  }, [generate, length, nums, char])
  return (
    <>
      <div className=' h-screen w-screen bg-gray-950 flex flex-col items-center'>
        <div className=' w-full flex items-center justify-center mt-56'>
          <input type="text" className='bg-transparent border  border-orange-500 rounded-lg w-96 h-12 text-white '
            value={pass}
            placeholder='password'
            readOnly
          />

          <button className=' text-orange-500 bg-white h-12 rounded-lg px-5'>copy</button>
        </div>
        <div>
          <input type="range" className=' m-5'
            onChange={(e) => { setLength(e.target.value) }}
            min={8}
            max={32}
            value={length}

          />
          <label className=' text-white mx-3'>length:{length}</label>


          <input type="checkbox"
            defaultChecked={nums}
            id="numbers"
            onChange={() => { setNums((prev) => !prev) }}
          />
          <label className=' text-white text-lg me-2 ' htmlFor="numbers">Numbers</label>
          <input type="checkbox"
            defaultChecked={char}
            id="character"
            onChange={() => { setChar((prev) => !prev) }}
          />
          <label className=' text-white text-lg me-2' htmlFor="character">character</label>

        </div>
      </div>
    </>
  )
}

export default App
