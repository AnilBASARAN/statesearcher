
const StateInfo=(props)=>{

    const {info} = props;
    
      return(
        <div className="flex bg-white flex-col items-center justify-center shadow-md" >
          <div className="upper flex justify-between ">
    
              <div className="upperLeftContainer"><img alt="" src={info.image} className=" border border-stone-200 w-40 h-28 object-cover" /> </div>
          
        <div className="upperRightContainer m-3 text-neutral-600" >
        <div className="text-2xl">{info.name}</div>
        <div>{info.capital}</div>
        <div>{info.nickname}</div>
        <div>{info.population.toLocaleString()} Million</div>
        </div>
    
      
            
          </div>
          
            <div className="bottomContainer w-96 p-2 m-2 text-stone-600 text-sm " >{info.description}</div>
        </div>
        
      );
      
    };
    
    export default StateInfo;