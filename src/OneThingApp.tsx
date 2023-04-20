import { useState } from 'react'
import CustomForm from './components/CustomForm'
import OneThing from './components/OneThing'
import { Link } from'react-router-dom'
import { ChevronLeftIcon } from'@heroicons/react/24/solid'

import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

const  getSuccessMessage = () =>{
  const messages = ["Congrats!", "Great job!", "Don’t ya feel great?!", "Up, up, and up!", "Um…okay", "Did you though?", "Don’t feel like you tried your best…", "FAget about it!"];
  return messages[Math.floor(Math.random() * messages.length)]
}
function OneThingApp() {
  const [thing, setThing] = useState('')
  const [isComplated , setIsComplated] = useState(false)

  const handleInput = (e:any) => {
    setThing(e.target.value)

  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
      setIsComplated(true)
  }

  const handleCompletedThing = async (e:any) => {
    e.target.setAttribute('disabled', true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
     /*  emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      emojiSize:50 */

   })
    setIsComplated(false)
    e.target.removeAttribute('disabled')
    setThing('')

  }

  return (
    <main className="grid place-items-center min-h-screen  bg-[#16161D] text-slate-200">
          <div className="grid place-items-center gap-8 m-8">
            {
              !isComplated && (
                <CustomForm thing={thing}  handleInput={handleInput} handleSubmit={handleSubmit}/>
              )
            }

            {
              isComplated && (
                <OneThing thing={thing} handleCompletedThing={handleCompletedThing}/>
              )
            }

        <Link className='text-left flex' to='/'>
        <ChevronLeftIcon width={20} />
        <span>Home</span>
        </Link>
          </div>
       
     
    </main>
  )
}

export default OneThingApp
