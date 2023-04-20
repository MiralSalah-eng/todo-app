import CustomButton from "./CustomButton"

type OneThingProps = {
    thing : string
   handleCompletedThing:(e: any) => Promise<void>

}

const OneThing = ({thing , handleCompletedThing} :OneThingProps ) => {
  return (
   <>
    <h1 className='text-3xl sm:text-5xl font-bold text-center'>{thing}</h1>
    <CustomButton
      text="Mark Done"
      handleCompletedThing = {handleCompletedThing}
    />
   </>
    )
}

export default OneThing