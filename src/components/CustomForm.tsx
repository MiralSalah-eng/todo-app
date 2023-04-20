import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
type CustomFormProps = {
    thing : string
    handleInput:(e:any)=>void
    handleSubmit:(e:any)=>void
}


const CustomForm = ( { thing , handleInput , handleSubmit } : CustomFormProps) => {
  return (
    <>
     <h1 className='text-3xl sm:text-5xl font-bold text-center'>“One Thing” Todo</h1>

   <form
   className='flex ring-4 rounded-md ring-slate-200  dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 dark:ring-offset-slate-800 bg-slate-200 ring-offset-slate-200'
  onSubmit={handleSubmit}
   >
   
    <input 
    className='appearance-none rounded-md bg-inherit py-2 px-6 focus:outline-none caret-teal-600 font-sans text-slate-800 text-xl placeholder:text-slate-400 w-full'
    type='text'
    placeholder='Enter one thing'
    onInput={handleInput}

    />

    <button
     className='bg-inherit rounded-md font-sans text-slate-800  py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600'
    >
        <ArrowRightCircleIcon  className='w-12 h-12' />
    </button>
   </form>
    </>
  )
}

export default CustomForm