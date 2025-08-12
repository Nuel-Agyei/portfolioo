const Header = () => {
  const secs =[
    'First',
    'Second',
    'Third',
    'Fourth',
  ]
  return (
    <div className="bg-cyan-800/30 w-1/2 m-auto h-16 border border-cyan-700 text-white p-4 rounded-full hover:scale-110 transition-all duration-500 sm:w-full sm:h-20 flex justify-center items-center relative">
      <div className='absolute w-1/2 blur-3xl bg-cyan-400 hover:scale-110 transition-all duration-500'></div>
      {secs.map((sec, index) => (
        <a href={`#${sec.toLowerCase()}`} key={index} className="text-2xl font-bold mx-2 hover:text-cyan-700 hover:scale-150 transition-all duration-300">
          {sec}
        </a>
      ))}
    </div>
  )
}

export default Header