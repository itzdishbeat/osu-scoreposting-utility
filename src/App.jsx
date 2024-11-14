import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { SiOsu } from "react-icons/si";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-screen'>

        <h1 className='block text-4xl font-bold'> osu! Scoreposting Utility</h1>

        <Input type="text" label="osu! Score Link" className='my-6 w-1/4'/>

        <div className='flex gap-4 items-center'>
          <Button color="primary" size='lg' variant='shadow' startContent={<SiOsu />}>
            Generate Scorepost!
          </Button>
          <Button color="secondary" size='lg' variant='faded' startContent={<FaGithub />}>
            Github
          </Button>
        </div>

      </div>
    </>
  )
}

export default App
