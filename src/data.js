export const API_KEY ='AIzaSyCN9i_pB1HC2vCSVlVoDIYlt0GoS2Ww_JE';

export const value_converter=(value)=>{
  if(value>=1000000)
  {
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000){
    return Math.floor(value/1000)+"K";
  }
  else{
    return value;
  }

}