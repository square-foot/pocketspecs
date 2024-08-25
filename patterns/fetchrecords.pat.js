let sort = ""
const filter =  _arg2_.filter // filter has to be given
let limit = 50000
let offset = 0 

if(_arg2_.sort ) {
    sort = _arg2_.sort,  // sort
    limit  = _arg2_.limit, // limit
    offset = _arg2_.offset // offset


try{ _arg3_ = $app.dao().findRecordsByFilter(
    _arg1_,  // collection
   filter,sort,limit,offset 
  )
  _arg4_ = true
} catch(e){ _arg4_: false }

} else {
    try{ _arg3_ = $app.dao().findRecordsByFilter(
        _arg1_,  // collection
       filter 
      )
      _arg4_ = true
    } catch(e){ _arg4_: false }
           
}

if(_arg3_){
    _arg3_ = JSON.parse(JSON.stringify(_arg3_));
   _arg3_.forEach((eachRec)=>{ 
    for (const key in eachRec){
      if(key.indexOf('ts_') == 0){ //if any field starts with ts_ it means it's a unix timestamp
          const myUnixTimestamp = eachRec[key]; // start with a Unix timestamp
          const myDate = new Date(myUnixTimestamp * 1000); // convert timestamp to milliseconds and construct Date object
          // will print "Thu Aug 10 2023 01:13:20" followed by the local timezone on browser console
          eachRec[key]=myDate;
       } 
    }
  });

}