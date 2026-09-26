
const Background = () => {
  return (
    <div className="h-screen w-screen">
        <div className="bg-primary size-full">
            <div className="bg-primary -translate-x-12 -translate-y-12 rounded-full absolute top-0 left-0 backdrop-blur-2xl shadow-[0px_10px_70px_0px_rgba(19,_20,_22,_0.7)] aspect-square h-1/4"></div>
            <div className="bg-primary translate-x-12 translate-y-12 rounded-full absolute bottom-0 right-0 backdrop-blur-2xl shadow-[0px_10px_70px_0px_rgba(120,_129,_145,_0.3)] aspect-square h-1/3"></div>
        </div>
    </div>
  )
}

export default Background