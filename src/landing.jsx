
export default function Landing() {
    return (
      <div className="text-white"
      style={{
          backgroundImage: 'url(https://thumbs.dreamstime.com/b/beef-stew-tomato-sauce-rice-spices-herbs-served-plate-white-long-grain-concrete-table-west-african-cuisine-156889393.jpg?w=768)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
        }}>
          <div className="font-bold">
          <h2 className="font-bold text-[50px]">WELCOME TO MY KITCHEN</h2>
          <p> experience the act of exceptional cuisines with our tailored kitchen services</p> 
          </div>
          <button className="bg-black rounded-[10px] p-[9px] mt-[10px]">get your now</button>  
      </div>
      
    )
  }
  