

export default function Menu() {
    return (
      <div className="bg-black text-white ">
        <h1 className="text-center text-[30px] mb-[30px]">Menu</h1>
        <div>
          <div className="justify-center flex gap-[10px]" >
               <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <a href="#"><i className="fas fa-heart"></i></a>
                <a href="#"><i className="fas fa-eye"></i></a>
          </div>
          <div>
              <img src="/public/chips.jpg" alt="" className="sm:ml-[270px]" />
          </div>
          <div className="flex justify-center flex-col text-center">
              <h3 className="font-bold text-[20px]">chips</h3>
              <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">NGN 3500</div>
          </div>
          <br /><br />
        </div>
        <div>
          <div className="justify-center flex gap-[10px]" >
               <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <a href="#"><i className="fas fa-heart"></i></a>
                <a href="#"><i className="fas fa-eye"></i></a>
          </div>
          <div>
              <img src="/public/pasta.jpg" alt="" className="sm:ml-[270px]" />
          </div>
          <div className="flex justify-center flex-col text-center">
              <h3 className="font-bold text-[20px]">pasta</h3>
              <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">NGN 6000</div>
          </div>
          <br /><br />
        </div>
        <div>
          <div className="justify-center flex gap-[10px]" >
               <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <a href="#"><i className="fas fa-heart"></i></a>
                <a href="#"><i className="fas fa-eye"></i></a>
          </div>
          <div>
              <img src="/public/rice.jpg" alt="" className="sm:ml-[270px]" />
          </div>
          <div className="flex justify-center flex-col text-center">
              <h3 className="font-bold text-[20px]">rice</h3>
              <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">NGN 4500</div>
          </div>
          <br /><br />
        </div>
        <div>
          <div className="justify-center flex gap-[10px]" >
               <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <a href="#"><i className="fas fa-heart"></i></a>
                <a href="#"><i className="fas fa-eye"></i></a>
          </div>
          <div>
              <img src="/public/yam and beans.jpg" alt="" className="sm:ml-[270px]" />
          </div>
          <div className="flex justify-center flex-col text-center">
              <h3 className="font-bold text-[20px]">yam and beans</h3>
              <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">NGN 3000</div>
          </div>
        </div>
        
      </div>
      
    )
  }
  