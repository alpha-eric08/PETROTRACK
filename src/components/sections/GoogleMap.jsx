
const GoogleMap = () => {
  return (
    <div className="px-3 md:px-20">
        {/* Google Map */}
        <div className='h-[600px] w-full rounded-lg overflow-hidden  my-24  shadow-lg shadow-black'>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=KUMASI-GHANA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
        </div>
    </div>
  )
}

export default GoogleMap