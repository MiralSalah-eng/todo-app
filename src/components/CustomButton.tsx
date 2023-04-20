 import { CheckCircleIcon } from '@heroicons/react/24/solid'

 type CustomButtonProps = {
    text : string
    handleCompletedThing?:(e: any) => Promise<void>
}
const CustomButton = ({ text , handleCompletedThing } : CustomButtonProps) => {
  return (
    <button
    className='flex items-center bg-teal-600 space-x-3 text-2xl  text-slate-200 py-2 px-6 rounded-md ring-2 ring-teal-600
    dark:bg-teal-500 focus:outline-none focus-visible:ring-4 dark:ring-teal-500 ring-offset-4 ring-offset-slate-200 dark:ring-offset-slate-800   hover:opacity-80 transition-opacity disabled:opacity-50
    '
    onClick={handleCompletedThing}
    >
        <span className="pointer-events-none">{text}</span>
        <CheckCircleIcon className=' pointer-events-none w-12 h-12'/>
    </button>
    )
}

export default CustomButton