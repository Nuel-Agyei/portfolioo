import CircularText from './CircularText/CircularText'

const Landing = () => {
  return (
    <div className="flex justify-center  items-center m-6 p-4" style={{ minHeight: '60vh' }}>
      <CircularText
        text="COMING*SOON*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
    </div>

  )
}

export default Landing