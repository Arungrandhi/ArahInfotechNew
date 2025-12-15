
const Welcome = () => {

  return (
    <div className='container text-center'>
      <h1>Welcome to Admin Dashboard</h1>
      <div className='row'>
        <div className='col-lg-6 p-5'>
          <div className='card' >
            <div className='card-body text-center'>
              <h3>Total Careers</h3>
              
            </div>
          </div>
        </div>
        <div className='col-lg-6 p-5'> 
          <div className='card' >
            <div className='card-body text-center'>
              <h3>Total Enquiries</h3>         
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
